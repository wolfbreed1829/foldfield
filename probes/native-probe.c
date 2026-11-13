// Test-only stand-ins for Koka's FFI types; not shipped.
#include <stdint.h>
#include <stdlib.h>
#include <string.h>
typedef int64_t kk_integer_t;
typedef char* kk_string_t;
typedef int kk_unit_t;
typedef void kk_context_t;
#define kk_Unit 0
static int kk_integer_clamp32(int64_t n,void*ctx){return (int)n;}
static kk_integer_t kk_integer_from_int(int n,void*ctx){return n;}
static const char* kk_string_cbuf_borrow(char*s,void*n,void*ctx){return s;}
static void kk_string_drop(char*s,void*ctx){free(s);}
static char*kk_string_alloc_from_utf8(const char*s,void*ctx){return _strdup(s);}
static char*kk_string_empty(void){return _strdup("");}
#include "../src/native.c"
int main(int argc,char**argv){if(!ff_open())return 1;if(argc>1){native_field(NULL);native_present(_strdup("20,20,1;45,25,-1"),0,0,1,0,NULL);char*s=native_export(NULL);free(s);native_close(NULL);return 0;}while(native_event(NULL)!=-1){}native_close(NULL);return 0;}
