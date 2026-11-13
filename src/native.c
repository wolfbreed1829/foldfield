/* Native adapter only: Win32 events, GDI rendering, process/file IO.
   All gesture rules, history and orchestration belong to Koka. */
#define WIN32_LEAN_AND_MEAN
#include <windows.h>
#include <windowsx.h>
#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>
#include <stdint.h>
#include <stdbool.h>
#include <io.h>

static HWND ff_window;
static char ff_root[MAX_PATH], ff_work[MAX_PATH], ff_error[1024];
static int ff_event=0,ff_x,ff_y,ff_closed=0,ff_busy=0;
static int ff_topology,ff_rule,ff_undos,ff_redos,ff_count,ff_havefield=0;
static double ff_values[3072];
static int ff_sx[16],ff_sy[16],ff_ss[16];
static char ff_status[256]="Click the fabric to place a wave source.";
static int ff_help=0;
static HANDLE ff_mutex;
#ifdef FOLDFIELD_TEST
static int ff_teststep=0;
static int ff_test=0;
static int ff_testmode=0;
static FILE*ff_testlog=NULL;
#endif
static const COLORREF ff_bg=RGB(15,24,24),ff_ink=RGB(235,230,211),ff_muted=RGB(151,166,158),ff_gold=RGB(232,172,81);
static RECT ff_canvas;

static void ff_text(HDC dc,int x,int y,int size,COLORREF color,const char *s,int weight) {
  HFONT font=CreateFontA(size,0,0,0,weight,FALSE,FALSE,FALSE,DEFAULT_CHARSET,OUT_DEFAULT_PRECIS,CLIP_DEFAULT_PRECIS,CLEARTYPE_QUALITY,DEFAULT_PITCH,"Segoe UI");
  HGDIOBJ old=SelectObject(dc,font); SetBkMode(dc,TRANSPARENT); SetTextColor(dc,color); TextOutA(dc,x,y,s,(int)strlen(s)); SelectObject(dc,old); DeleteObject(font);
}
static void ff_line(HDC dc,int x,int y,int x2,int y2,COLORREF c,int width) {
  HPEN pen=CreatePen(PS_SOLID,width,c); HGDIOBJ old=SelectObject(dc,pen); MoveToEx(dc,x,y,NULL); LineTo(dc,x2,y2); SelectObject(dc,old);DeleteObject(pen);
}
static void ff_fill(HDC dc,int x,int y,int w,int h,COLORREF c) {
  RECT r={x,y,x+w,y+h}; HBRUSH b=CreateSolidBrush(c); FillRect(dc,&r,b);DeleteObject(b);
}
static POINT ff_project(double x,double y,double value,int w,int h) {
  POINT p; double cw=w-240,ch=h-290;
  p.x=(LONG)(92+x*cw/63+y*1.2);
  p.y=(LONG)(167+y*ch/47-value*29);
  return p;
}
static void ff_paint(HDC dc,int w,int h) {
  ff_fill(dc,0,0,w,h,ff_bg);
  ff_text(dc,42,28,13,ff_gold,"EXPERIMENT ZERO     /     001",600);
  ff_text(dc,40,47,45,ff_ink,"Foldfield",300);
  ff_text(dc,43,102,14,ff_muted,"A TOPOLOGICAL WAVE LOOM",400);
  const char *tops[]={"OPEN SHEET","CYLINDER","MOBIUS STRIP"};
  const char *rules[]={"SINGLE","MIRROR PAIR","OPPOSED PAIR"};
  ff_text(dc,w-390,38,12,ff_muted,"SURFACE  /  T",400);
  ff_text(dc,w-390,58,18,ff_ink,tops[ff_topology%3],500);
  ff_text(dc,w-190,38,12,ff_muted,"GESTURE  /  M",400);
  ff_text(dc,w-190,58,18,ff_ink,rules[ff_rule%3],500);
  ff_line(dc,42,132,w-42,132,RGB(49,64,61),1);
  ff_canvas=(RECT){92,167,w-92,h-123};
  int canvas_dc=SaveDC(dc);IntersectClipRect(dc,65,142,w-65,h-112);
  // Native projection of the scalar array. No wave calculation occurs here.
  for(int y=47;y>=0;y--) {
    for(int x=0;x<63;x++) {
      double a=ff_values[y*64+x],b=ff_values[y*64+x+1];
      POINT p=ff_project(x,y,a,w,h),q=ff_project(x+1,y,b,w,h);
      double z=fmin(1.0,fabs((a+b)*0.5));
      COLORREF c=(a+b>=0)?RGB(92+(int)(144*z),111+(int)(68*z),99+(int)(10*z)):RGB(70+(int)(54*z),112+(int)(77*z),109+(int)(68*z));
      if(!ff_count)c=RGB(44,63,59);
      ff_line(dc,p.x,p.y,q.x,q.y,c,1);
    }
  }
  for(int x=0;x<64;x+=4) for(int y=0;y<47;y++) {
    POINT p=ff_project(x,y,ff_values[y*64+x],w,h),q=ff_project(x,y+1,ff_values[(y+1)*64+x],w,h);
    ff_line(dc,p.x,p.y,q.x,q.y,RGB(48,70,64),1);
  }
  // The two seams show which edge is joined; reversing the right arrow marks the twist.
  for(int side=0;side<2;side++) {
    POINT p=ff_project(side?63:0,0,0,w,h),q=ff_project(side?63:0,47,0,w,h);
    ff_line(dc,p.x-9,p.y,q.x-9,q.y,ff_topology?ff_gold:RGB(59,77,70),1);
    if(ff_topology) {
      POINT end=(side && ff_topology==2)?p:q;
      int d=(side && ff_topology==2)?1:-1;
      ff_line(dc,end.x-9,end.y,end.x-13,end.y+d*9,ff_gold,1);
      ff_line(dc,end.x-9,end.y,end.x-4,end.y+d*9,ff_gold,1);
    }
  }
  for(int i=0;i<ff_count;i++) {
    POINT p=ff_project(ff_sx[i],ff_sy[i],0,w,h);
    COLORREF c=ff_ss[i]>0?ff_gold:RGB(136,211,195);
    HPEN pen=CreatePen(PS_SOLID,2,c); HGDIOBJ op=SelectObject(dc,pen),ob=SelectObject(dc,GetStockObject(NULL_BRUSH));
    Ellipse(dc,p.x-6,p.y-6,p.x+7,p.y+7);SelectObject(dc,op);SelectObject(dc,ob);DeleteObject(pen);
    ff_line(dc,p.x-3,p.y,p.x+4,p.y,c,1);
    if(ff_ss[i]>0)ff_line(dc,p.x,p.y-3,p.x,p.y+4,c,1);
  }
  RestoreDC(dc,canvas_dc);
  if(ff_count==0) {
    ff_fill(dc,w/2-196,h/2-42,392,76,ff_bg);
    ff_text(dc,w/2-168,h/2-34,24,ff_ink,"Touch the fabric. Change its world.",300);
    ff_text(dc,w/2-145,h/2+1,14,ff_muted,"Left click creates. Right click opposes.",400);
  }
  char info[128];snprintf(info,sizeof(info),"%02d SOURCES     /     64 x 48 CELLS     /     %s",ff_count,ff_topology==0?"EDGES FREE":ff_topology==1?"EDGES JOINED":"ONE HALF TWIST");
  ff_text(dc,43,h-101,12,ff_muted,info,400);
  ff_line(dc,42,h-77,w-42,h-77,RGB(49,64,61),1);
  const char *buttons[]={"Undo  Z","Redo  Y","Clear  R","Export  E","Help  H"};
  for(int i=0;i<5;i++) {
    COLORREF c=(i==0&&!ff_undos)||(i==1&&!ff_redos)?RGB(91,107,100):ff_ink;
    ff_text(dc,43+i*105,h-54,15,c,buttons[i],400);
  }
  ff_text(dc,43,h-28,12,ff_busy?ff_gold:ff_muted,ff_status,400);
  if(ff_help) {
    int x=w/2-270,y=h/2-150;ff_fill(dc,x,y,540,290,RGB(24,37,35));
    ff_text(dc,x+25,y+20,27,ff_ink,"How to fold a field",300);
    const char *lines[]={"Click / right click: add positive / negative sources.","T: open sheet > cylinder > Mobius strip.","M: one source > mirror pair > opposed pair.","Z / Y: undo / redo. R: clear (also undoable).", "E: export this view as a bitmap. H: close this guide.","Sources and surface are saved after successful computation.","The lines show interference on graph-distance wavefronts.","This is a discrete mathematical instrument, not a physics solver."};
    for(int i=0;i<8;i++)ff_text(dc,x+25,y+68+i*24,14,ff_muted,lines[i],400);
  }
}
static LRESULT CALLBACK ff_proc(HWND hwnd,UINT msg,WPARAM wp,LPARAM lp) {
#ifdef FOLDFIELD_TEST
  if(msg==WM_TIMER && ff_test && !ff_busy && !ff_event){
    RECT r;GetClientRect(hwnd,&r);int ids[]={1,2,'T','T','M',1,'Z','Y','H','H','E','R','Z',0};
    int e=ff_testmode==3?(ff_teststep++<17?1:ff_teststep==18?'E':0):ids[ff_teststep++];if(ff_testmode==1)ff_teststep=13;
    if(ff_testlog){fprintf(ff_testlog,"event %d\n",e);fflush(ff_testlog);}
    if(!e){SendMessage(hwnd,WM_CLOSE,0,0);return 0;}
    if(e<3){int x=ff_teststep==1?18:ff_teststep==2?43:29,y=ff_teststep==1?15:ff_teststep==2?29:22;POINT p=ff_project(x,y,0,r.right,r.bottom);SendMessage(hwnd,e==1?WM_LBUTTONDOWN:WM_RBUTTONDOWN,0,MAKELPARAM(p.x,p.y));}
    else if(ff_testmode==2){int x=0,y=r.bottom-48;switch(e){case 'T':x=r.right-300;y=65;break;case 'M':x=r.right-100;y=65;break;case 'Z':x=75;break;case 'Y':x=180;break;case 'R':x=285;break;case 'E':x=390;break;case 'H':x=495;break;}SendMessage(hwnd,WM_LBUTTONDOWN,0,MAKELPARAM(x,y));}
    else if(e=='T'&&ff_teststep==3)SendMessage(hwnd,WM_LBUTTONDOWN,0,MAKELPARAM(r.right-300,65));
    else if(e=='E')SendMessage(hwnd,WM_LBUTTONDOWN,0,MAKELPARAM(380,r.bottom-48));
    else SendMessage(hwnd,WM_KEYDOWN,e,0);
    return 0;
  }
#endif
  if(msg==WM_CLOSE){ff_closed=1;ff_event=-1;DestroyWindow(hwnd);return 0;}
  if(msg==WM_DESTROY){ff_closed=1;return 0;}
  if(msg==WM_SIZE){InvalidateRect(hwnd,NULL,FALSE);return 0;}
  if(msg==WM_GETMINMAXINFO){MINMAXINFO *m=(MINMAXINFO*)lp;m->ptMinTrackSize.x=1000;m->ptMinTrackSize.y=700;return 0;}
  if(msg==WM_ERASEBKGND)return 1;
  if(msg==WM_PAINT){PAINTSTRUCT ps;HDC dc=BeginPaint(hwnd,&ps);RECT r;GetClientRect(hwnd,&r);HDC mem=CreateCompatibleDC(dc);HBITMAP b=CreateCompatibleBitmap(dc,r.right,r.bottom);HGDIOBJ old=SelectObject(mem,b);ff_paint(mem,r.right,r.bottom);BitBlt(dc,0,0,r.right,r.bottom,mem,0,0,SRCCOPY);SelectObject(mem,old);DeleteObject(b);DeleteDC(mem);EndPaint(hwnd,&ps);return 0;}
  if(msg==WM_KEYDOWN && !ff_busy){if(wp==VK_ESCAPE && ff_help){ff_event='H';}else if(wp=='T'||wp=='M'||wp=='Z'||wp=='Y'||wp=='R'||wp=='E'||wp=='H')ff_event=(int)wp;return 0;}
  if((msg==WM_LBUTTONDOWN||msg==WM_RBUTTONDOWN)&&!ff_busy){
    RECT r;GetClientRect(hwnd,&r);int x=GET_X_LPARAM(lp),y=GET_Y_LPARAM(lp);
    if(ff_help){ff_event='H';return 0;}
    if(y<96 && x>r.right-400){ff_event=x<r.right-200?'T':'M';return 0;}
    if(y>r.bottom-70 && y<r.bottom-30 && x>=43 && x<568){int ids[]={'Z','Y','R','E','H'};ff_event=ids[(x-43)/105];return 0;}
    double gy=(y-167.0)*47/(r.bottom-290.0),gx=(x-92.0-gy*1.2)*63/(r.right-240.0);
    if(gx>=0&&gx<=63&&gy>=0&&gy<=47){ff_x=(int)lround(gx);ff_y=(int)lround(gy);ff_event=msg==WM_LBUTTONDOWN?1:2;}
    return 0;
  }
  return DefWindowProcA(hwnd,msg,wp,lp);
}
static int ff_open(void) {
  SetProcessDPIAware();GetModuleFileNameA(NULL,ff_root,MAX_PATH);char *slash=strrchr(ff_root,'\\');if(slash)*slash=0;
  snprintf(ff_work,MAX_PATH,"%s\\.work",ff_root);CreateDirectoryA(ff_work,NULL);
  // Portable packages must have a writable directory. Never silently lose state.
  char p[MAX_PATH];snprintf(p,MAX_PATH,"%s\\write.check",ff_work);FILE *f=fopen(p,"wb");if(!f){MessageBoxA(NULL,"Foldfield needs a writable folder. Extract the package into your own folder.","Foldfield",MB_ICONERROR);return 0;}fclose(f);DeleteFileA(p);
  char mutexname[MAX_PATH];snprintf(mutexname,MAX_PATH,"Local\\Foldfield-%lu",(unsigned long)GetCurrentProcessId());
  // Exclusive lock is held on the portable session for this process lifetime.
  snprintf(p,MAX_PATH,"%s\\.work\\session.lock",ff_root);ff_mutex=CreateFileA(p,GENERIC_READ|GENERIC_WRITE,0,NULL,OPEN_ALWAYS,FILE_ATTRIBUTE_NORMAL,NULL);
  if(ff_mutex==INVALID_HANDLE_VALUE){MessageBoxA(NULL,"This Foldfield package is already open.","Foldfield",MB_ICONINFORMATION);return 0;}
  WNDCLASSA wc={0};wc.lpfnWndProc=ff_proc;wc.hInstance=GetModuleHandle(NULL);wc.hCursor=LoadCursor(NULL,IDC_CROSS);wc.lpszClassName="FoldfieldNative";RegisterClassA(&wc);
  ff_window=CreateWindowExA(0,wc.lpszClassName,"Foldfield | Experiment Zero",WS_OVERLAPPEDWINDOW,CW_USEDEFAULT,CW_USEDEFAULT,1200,820,NULL,NULL,wc.hInstance,NULL);if(!ff_window)return 0;
  ShowWindow(ff_window,SW_SHOW);UpdateWindow(ff_window);
#ifdef FOLDFIELD_TEST
  if(strstr(GetCommandLineA(),"--self-test")||strstr(GetCommandLineA(),"--test-")){char lp[MAX_PATH];snprintf(lp,MAX_PATH,"%s\\ui-test.log",ff_root);ff_testlog=fopen(lp,"wb");ff_test=1;if(strstr(GetCommandLineA(),"--test-restart"))ff_teststep=13;if(strstr(GetCommandLineA(),"--test-failure"))ff_testmode=1;if(strstr(GetCommandLineA(),"--test-pointer"))ff_testmode=2;if(strstr(GetCommandLineA(),"--test-limit"))ff_testmode=3;SetTimer(ff_window,1,200,NULL);}
#endif
  return 1;
}
static void ff_pump(void){MSG m;while(PeekMessage(&m,NULL,0,0,PM_REMOVE)){TranslateMessage(&m);DispatchMessage(&m);}}
static kk_integer_t native_open(kk_context_t *ctx){return kk_integer_from_int(ff_open(),ctx);}
static kk_integer_t native_event(kk_context_t *ctx){while(!ff_event&&!ff_closed){MSG m;if(GetMessage(&m,NULL,0,0)<=0){ff_closed=1;break;}TranslateMessage(&m);DispatchMessage(&m);}int e=ff_closed?-1:ff_event;ff_event=0;return kk_integer_from_int(e,ctx);}
static kk_integer_t native_coord(kk_integer_t n,kk_context_t *ctx){int i=kk_integer_clamp32(n,ctx);return kk_integer_from_int(i?ff_y:ff_x,ctx);}
static kk_unit_t native_status(kk_string_t text,kk_context_t *ctx){const char*s=kk_string_cbuf_borrow(text,NULL,ctx);snprintf(ff_status,sizeof(ff_status),"%s",s);
#ifdef FOLDFIELD_TEST
  if(ff_testlog){fprintf(ff_testlog,"status %s\n",s);fflush(ff_testlog);}
#endif
  kk_string_drop(text,ctx);InvalidateRect(ff_window,NULL,FALSE);UpdateWindow(ff_window);return kk_Unit;}
static kk_unit_t native_present(kk_string_t sources,kk_integer_t top,kk_integer_t rule,kk_integer_t undo,kk_integer_t redo,kk_context_t *ctx){
  ff_topology=kk_integer_clamp32(top,ctx);ff_rule=kk_integer_clamp32(rule,ctx);ff_undos=kk_integer_clamp32(undo,ctx);ff_redos=kk_integer_clamp32(redo,ctx);
  char s[2048];snprintf(s,sizeof(s),"%s",kk_string_cbuf_borrow(sources,NULL,ctx));kk_string_drop(sources,ctx);ff_count=0;char*part=strtok(s,";");
  while(part&&ff_count<16){if(sscanf(part,"%d,%d,%d",ff_sx+ff_count,ff_sy+ff_count,ff_ss+ff_count)==3)ff_count++;part=strtok(NULL,";");}
#ifdef FOLDFIELD_TEST
  if(ff_testlog){fprintf(ff_testlog,"state %d %d %d %d %d\n",ff_topology,ff_rule,ff_count,ff_undos,ff_redos);fflush(ff_testlog);}
#endif
  if(!ff_count){memset(ff_values,0,sizeof(ff_values));ff_havefield=1;}
  InvalidateRect(ff_window,NULL,FALSE);UpdateWindow(ff_window);return kk_Unit;
}
static kk_unit_t native_help(kk_context_t *ctx){ff_help=!ff_help;InvalidateRect(ff_window,NULL,FALSE);return kk_Unit;}
static kk_string_t native_process(kk_integer_t kind,kk_string_t arguments,kk_context_t *ctx){
  int k=kk_integer_clamp32(kind,ctx);char command[4096],exe[MAX_PATH],outpath[MAX_PATH],errpath[MAX_PATH];
  snprintf(exe,MAX_PATH,"%s\\%s",ff_root,k==0?"wave.exe":"uiua.exe");
  const char*args=kk_string_cbuf_borrow(arguments,NULL,ctx);
  if(k==0)snprintf(command,sizeof(command),"\"%s\" %s",exe,args);
  else snprintf(command,sizeof(command),"\"%s\" run --no-format \"%s\\field.ua\"",exe,ff_root);
  kk_string_drop(arguments,ctx);snprintf(outpath,MAX_PATH,"%s\\%s",ff_work,k==0?"travel.json":"uiua.log");snprintf(errpath,MAX_PATH,"%s\\error.log",ff_work);
  if(k==1){char stale[MAX_PATH];snprintf(stale,MAX_PATH,"%s\\field.json",ff_work);DeleteFileA(stale);if(GetFileAttributesA(stale)!=INVALID_FILE_ATTRIBUTES)return kk_string_alloc_from_utf8("Cannot replace previous field output.",ctx);}
  SECURITY_ATTRIBUTES sa={sizeof(sa),NULL,TRUE};HANDLE out=CreateFileA(outpath,GENERIC_WRITE,FILE_SHARE_READ,&sa,CREATE_ALWAYS,FILE_ATTRIBUTE_NORMAL,NULL),err=CreateFileA(errpath,GENERIC_WRITE,FILE_SHARE_READ,&sa,CREATE_ALWAYS,FILE_ATTRIBUTE_NORMAL,NULL),in=CreateFileA("NUL",GENERIC_READ,FILE_SHARE_READ|FILE_SHARE_WRITE,&sa,OPEN_EXISTING,0,NULL);
  if(out==INVALID_HANDLE_VALUE||err==INVALID_HANDLE_VALUE||in==INVALID_HANDLE_VALUE){if(out!=INVALID_HANDLE_VALUE)CloseHandle(out);if(err!=INVALID_HANDLE_VALUE)CloseHandle(err);if(in!=INVALID_HANDLE_VALUE)CloseHandle(in);return kk_string_alloc_from_utf8("Cannot open worker IO files.",ctx);}
  STARTUPINFOA si={0};PROCESS_INFORMATION pi={0};si.cb=sizeof(si);si.dwFlags=STARTF_USESTDHANDLES;si.hStdOutput=out;si.hStdError=err;si.hStdInput=in;
  ff_busy=1;snprintf(ff_status,sizeof(ff_status),"%s",k==0?"Computing geodesics in source actors...":"Combining wave arrays...");InvalidateRect(ff_window,NULL,FALSE);UpdateWindow(ff_window);
  BOOL ok=CreateProcessA(exe,command,NULL,NULL,TRUE,CREATE_NO_WINDOW,NULL,ff_work,&si,&pi);CloseHandle(out);CloseHandle(err);CloseHandle(in);
  ff_error[0]=0;
  if(!ok)snprintf(ff_error,sizeof(ff_error),"Cannot launch %s (Windows error %lu).",k==0?"Pony worker":"Uiua",GetLastError());
  else {
    ULONGLONG start=GetTickCount64();DWORD ec=0;
    while(WaitForSingleObject(pi.hProcess,10)==WAIT_TIMEOUT){ff_pump();if(ff_closed||GetTickCount64()-start>15000){TerminateProcess(pi.hProcess,124);WaitForSingleObject(pi.hProcess,2000);snprintf(ff_error,sizeof(ff_error),"Worker cancelled or exceeded 15 seconds.");break;}}
    GetExitCodeProcess(pi.hProcess,&ec);CloseHandle(pi.hThread);CloseHandle(pi.hProcess);
    if(ec&& !ff_error[0]){FILE*f=fopen(errpath,"rb");char detail[600]={0};if(f){fread(detail,1,599,f);fclose(f);}snprintf(ff_error,sizeof(ff_error),"%s failed (%lu): %.600s",k==0?"Pony":"Uiua",ec,detail);}
  }
  ff_busy=0;return kk_string_alloc_from_utf8(ff_error,ctx);
}
static bool native_field(kk_context_t *ctx){
  (void)ctx;char path[MAX_PATH];snprintf(path,MAX_PATH,"%s\\field.json",ff_work);FILE*f=fopen(path,"rb");if(!f)return false;
  char buf[150000];size_t n=fread(buf,1,sizeof(buf)-1,f);int extra=fgetc(f);fclose(f);if(extra!=EOF||memchr(buf,0,n)!=NULL)return false;buf[n]=0;
  char*p=buf;while(*p==' '||*p=='\r'||*p=='\n')p++;if(*p++!='[')return false;double values[3072];
  for(int i=0;i<3072;i++){char*end;values[i]=strtod(p,&end);if(end==p||!isfinite(values[i])||fabs(values[i])>16)return false;p=end;while(*p==' '||*p=='\r'||*p=='\n')p++;if(i<3071){if(*p++!=',')return false;}}
  if(*p++!=']')return false;while(*p==' '||*p=='\n'||*p=='\r')p++;if(*p)return false;
  memcpy(ff_values,values,sizeof(values));ff_havefield=1;return true;
}
static kk_string_t native_load(kk_context_t *ctx){char path[MAX_PATH];snprintf(path,MAX_PATH,"%s\\session.ff",ff_root);FILE*f=fopen(path,"rb");if(!f)return GetFileAttributesA(path)==INVALID_FILE_ATTRIBUTES?kk_string_empty():kk_string_alloc_from_utf8("!Saved session cannot be read",ctx);char b[32768];size_t n=fread(b,1,sizeof(b)-1,f);int e=fgetc(f);fclose(f);if(e!=EOF||memchr(b,0,n)!=NULL)return kk_string_alloc_from_utf8("!Invalid session size or embedded NUL",ctx);b[n]=0;return kk_string_alloc_from_utf8(b,ctx);}
static kk_string_t native_save(kk_string_t data,kk_context_t *ctx){char p[MAX_PATH],tmp[MAX_PATH];snprintf(p,MAX_PATH,"%s\\session.ff",ff_root);snprintf(tmp,MAX_PATH,"%s\\session.ff.tmp",ff_root);const char*s=kk_string_cbuf_borrow(data,NULL,ctx);FILE*f=fopen(tmp,"wb");int ok=0;if(f){ok=fwrite(s,1,strlen(s),f)==strlen(s);if(fflush(f))ok=0;HANDLE h=(HANDLE)_get_osfhandle(_fileno(f));if(!FlushFileBuffers(h))ok=0;if(fclose(f))ok=0;}kk_string_drop(data,ctx);if(ok)ok=MoveFileExA(tmp,p,MOVEFILE_REPLACE_EXISTING|MOVEFILE_WRITE_THROUGH);return kk_string_alloc_from_utf8(ok?"":"Session could not be saved. Check folder permissions and free space.",ctx);}
static kk_string_t native_export(kk_context_t *ctx){
  RECT r;GetClientRect(ff_window,&r);HDC dc=GetDC(ff_window),mem=CreateCompatibleDC(dc);BITMAPINFO bi={0};bi.bmiHeader.biSize=sizeof(BITMAPINFOHEADER);bi.bmiHeader.biWidth=r.right;bi.bmiHeader.biHeight=-r.bottom;bi.bmiHeader.biPlanes=1;bi.bmiHeader.biBitCount=32;bi.bmiHeader.biCompression=BI_RGB;void*bits;HBITMAP b=CreateDIBSection(dc,&bi,DIB_RGB_COLORS,&bits,NULL,0);if(!b){DeleteDC(mem);ReleaseDC(ff_window,dc);return kk_string_alloc_from_utf8("Export failed: no bitmap memory.",ctx);}HGDIOBJ old=SelectObject(mem,b);ff_paint(mem,r.right,r.bottom);
  char dir[MAX_PATH],path[MAX_PATH];snprintf(dir,MAX_PATH,"%s\\exports",ff_root);CreateDirectoryA(dir,NULL);SYSTEMTIME t;GetLocalTime(&t);snprintf(path,MAX_PATH,"%s\\foldfield-%04d%02d%02d-%02d%02d%02d-%03d.bmp",dir,t.wYear,t.wMonth,t.wDay,t.wHour,t.wMinute,t.wSecond,t.wMilliseconds);
  GdiFlush();BITMAPFILEHEADER bh={0};bh.bfType=0x4d42;bh.bfOffBits=sizeof(bh)+sizeof(BITMAPINFOHEADER);bh.bfSize=bh.bfOffBits+r.right*r.bottom*4;FILE*f=fopen(path,"wb");int ok=0;if(f){ok=fwrite(&bh,1,sizeof(bh),f)==sizeof(bh)&&fwrite(&bi.bmiHeader,1,sizeof(BITMAPINFOHEADER),f)==sizeof(BITMAPINFOHEADER)&&fwrite(bits,1,r.right*r.bottom*4,f)==(size_t)(r.right*r.bottom*4);if(fclose(f))ok=0;}SelectObject(mem,old);DeleteObject(b);DeleteDC(mem);ReleaseDC(ff_window,dc);return kk_string_alloc_from_utf8(ok?"Bitmap saved in the exports folder beside Foldfield.exe.":"Export failed. Check folder permissions and free space.",ctx);
}
static kk_unit_t native_close(kk_context_t *ctx){(void)ctx;if(IsWindow(ff_window))DestroyWindow(ff_window);if(ff_mutex&&ff_mutex!=INVALID_HANDLE_VALUE)CloseHandle(ff_mutex);return kk_Unit;}
