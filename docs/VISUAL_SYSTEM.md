# Visual system

The design uses a dark green-black ground, warm off-white type, ochre positive values, and pale green negative values. Signed source markers also carry plus/minus symbols, so polarity is not communicated by color alone.

The central fabric is a cut-open coordinate chart. Forty-eight horizontal threads encode the scalar field as height; sparse vertical stitches retain spatial relationships. Joined-edge arrows identify the seam. Opposed arrow directions signal the Mobius reversal. There is no decorative time animation.

Native GDI double buffering avoids intermediate-frame flicker. Segoe UI is used at several native sizes. The window resizes with a minimum 1000 by 700 outer size. The fabric is clipped to its workspace so dense amplitudes cannot overwrite controls. Rendering and BMP export share the same drawing function, which makes export inspection a direct check of layout.

The title occupies a small quiet header. The surface and gesture rule live at the right; editing and artifact actions stay below the fabric. The footer carries actual computation, save, export, and failure status. Empty state gives two direct placement instructions over the latent grid.

Keyboard equivalents cover all textual controls. Full screen-reader navigation and keyboard-only spatial placement are not implemented. Wireframe lines use native GDI rasterization rather than antialiased vector rendering; see LIMITATIONS.md.
