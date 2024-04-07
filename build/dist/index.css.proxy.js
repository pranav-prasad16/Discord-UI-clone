// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "/*\n! tailwindcss v3.0.22 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n* {\n  scrollbar-color: initial;\n  scrollbar-width: initial;\n}\n\n*, ::before, ::after {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\r\n.container {\n  width: 100%;\n}\r\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\r\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\r\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\r\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\r\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\r\n.fixed {\n  position: fixed;\n}\r\n.absolute {\n  position: absolute;\n}\r\n.relative {\n  position: relative;\n}\r\n.bottom-0 {\n  bottom: 0px;\n}\r\n.left-0 {\n  left: 0px;\n}\r\n.top-0 {\n  top: 0px;\n}\r\n.left-1\\/2 {\n  left: 50%;\n}\r\n.top-auto {\n  top: auto;\n}\r\n.bottom-\\[-20px\\] {\n  bottom: -20px;\n}\r\n.-bottom-\\[35px\\] {\n  bottom: -35px;\n}\r\n.top-1\\/2 {\n  top: 50%;\n}\r\n.right-0 {\n  right: 0px;\n}\r\n.bottom-1 {\n  bottom: 0.25rem;\n}\r\n.z-\\[1\\] {\n  z-index: 1;\n}\r\n.z-0 {\n  z-index: 0;\n}\r\n.col-span-full {\n  grid-column: 1 / -1;\n}\r\n.col-span-2 {\n  grid-column: span 2 / span 2;\n}\r\n.col-start-1 {\n  grid-column-start: 1;\n}\r\n.col-start-3 {\n  grid-column-start: 3;\n}\r\n.row-span-full {\n  grid-row: 1 / -1;\n}\r\n.row-span-3 {\n  grid-row: span 3 / span 3;\n}\r\n.row-start-2 {\n  grid-row-start: 2;\n}\r\n.row-start-1 {\n  grid-row-start: 1;\n}\r\n.row-start-4 {\n  grid-row-start: 4;\n}\r\n.m-auto {\n  margin: auto;\n}\r\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\r\n.mx-2 {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\r\n.my-2 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\r\n.mt-6 {\n  margin-top: 1.5rem;\n}\r\n.mt-4 {\n  margin-top: 1rem;\n}\r\n.ml-\\[-880px\\] {\n  margin-left: -880px;\n}\r\n.ml-\\[-380px\\] {\n  margin-left: -380px;\n}\r\n.ml-\\[370px\\] {\n  margin-left: 370px;\n}\r\n.mr-2 {\n  margin-right: 0.5rem;\n}\r\n.mt-1 {\n  margin-top: 0.25rem;\n}\r\n.mt-9 {\n  margin-top: 2.25rem;\n}\r\n.mt-7 {\n  margin-top: 1.75rem;\n}\r\n.mt-8 {\n  margin-top: 2rem;\n}\r\n.ml-3 {\n  margin-left: 0.75rem;\n}\r\n.ml-2 {\n  margin-left: 0.5rem;\n}\r\n.ml-auto {\n  margin-left: auto;\n}\r\n.mt-auto {\n  margin-top: auto;\n}\r\n.mb-4 {\n  margin-bottom: 1rem;\n}\r\n.ml-4 {\n  margin-left: 1rem;\n}\r\n.mt-2 {\n  margin-top: 0.5rem;\n}\r\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\r\n.mb-40 {\n  margin-bottom: 10rem;\n}\r\n.ml-1 {\n  margin-left: 0.25rem;\n}\r\n.mt-16 {\n  margin-top: 4rem;\n}\r\n.-mt-1 {\n  margin-top: -0.25rem;\n}\r\n.ml-6 {\n  margin-left: 1.5rem;\n}\r\n.-mt-4 {\n  margin-top: -1rem;\n}\r\n.mt-5 {\n  margin-top: 1.25rem;\n}\r\n.mb-\\[200px\\] {\n  margin-bottom: 200px;\n}\r\n.mb-8 {\n  margin-bottom: 2rem;\n}\r\n.mt-\\[18px\\] {\n  margin-top: 18px;\n}\r\n.block {\n  display: block;\n}\r\n.inline-block {\n  display: inline-block;\n}\r\n.flex {\n  display: flex;\n}\r\n.grid {\n  display: grid;\n}\r\n.hidden {\n  display: none;\n}\r\n.h-full {\n  height: 100%;\n}\r\n.h-\\[47px\\] {\n  height: 47px;\n}\r\n.h-screen {\n  height: 100vh;\n}\r\n.h-\\[1px\\] {\n  height: 1px;\n}\r\n.h-auto {\n  height: auto;\n}\r\n.h-3 {\n  height: 0.75rem;\n}\r\n.max-h-\\[200px\\] {\n  max-height: 200px;\n}\r\n.max-h-\\[64vh\\] {\n  max-height: 64vh;\n}\r\n.min-h-screen {\n  min-height: 100vh;\n}\r\n.min-h-full {\n  min-height: 100%;\n}\r\n.w-full {\n  width: 100%;\n}\r\n.w-11\\/12 {\n  width: 91.666667%;\n}\r\n.w-6 {\n  width: 1.5rem;\n}\r\n.w-10\\/12 {\n  width: 83.333333%;\n}\r\n.w-12 {\n  width: 3rem;\n}\r\n.w-\\[600px\\] {\n  width: 600px;\n}\r\n.w-4 {\n  width: 1rem;\n}\r\n.w-10 {\n  width: 2.5rem;\n}\r\n.w-\\[250px\\] {\n  width: 250px;\n}\r\n.w-screen {\n  width: 100vw;\n}\r\n.w-\\[1px\\] {\n  width: 1px;\n}\r\n.w-64 {\n  width: 16rem;\n}\r\n.w-\\[400px\\] {\n  width: 400px;\n}\r\n.w-\\[160px\\] {\n  width: 160px;\n}\r\n.w-3 {\n  width: 0.75rem;\n}\r\n.w-8 {\n  width: 2rem;\n}\r\n.min-w-\\[80px\\] {\n  min-width: 80px;\n}\r\n.min-w-full {\n  min-width: 100%;\n}\r\n.max-w-none {\n  max-width: none;\n}\r\n.max-w-\\[530px\\] {\n  max-width: 530px;\n}\r\n.max-w-sm {\n  max-width: 24rem;\n}\r\n.max-w-\\[80px\\] {\n  max-width: 80px;\n}\r\n.max-w-full {\n  max-width: 100%;\n}\r\n.max-w-screen-sm {\n  max-width: 640px;\n}\r\n.grow {\n  flex-grow: 1;\n}\r\n.-translate-x-1\\/2 {\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.-translate-y-1\\/2 {\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.cursor-pointer {\n  cursor: pointer;\n}\r\n.select-none {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\r\n.grid-cols-4 {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\r\n.grid-rows-2 {\n  grid-template-rows: repeat(2, minmax(0, 1fr));\n}\r\n.grid-rows-\\[repeat\\(12\\2c _minmax\\(0\\2c _1fr\\)\\)\\] {\n  grid-template-rows: repeat(12, minmax(0, 1fr));\n}\r\n.flex-row {\n  flex-direction: row;\n}\r\n.flex-col {\n  flex-direction: column;\n}\r\n.items-center {\n  align-items: center;\n}\r\n.justify-center {\n  justify-content: center;\n}\r\n.justify-between {\n  justify-content: space-between;\n}\r\n.gap-x-\\[20px\\] {\n  -moz-column-gap: 20px;\n       column-gap: 20px;\n}\r\n.gap-y-0 {\n  row-gap: 0px;\n}\r\n.overflow-auto {\n  overflow: auto;\n}\r\n.overflow-hidden {\n  overflow: hidden;\n}\r\n.overflow-y-auto {\n  overflow-y: auto;\n}\r\n.rounded-sm {\n  border-radius: 0.125rem;\n}\r\n.rounded-md {\n  border-radius: 0.375rem;\n}\r\n.rounded-full {\n  border-radius: 9999px;\n}\r\n.rounded-lg {\n  border-radius: 0.5rem;\n}\r\n.rounded-2xl {\n  border-radius: 1rem;\n}\r\n.border-\\[1px\\] {\n  border-width: 1px;\n}\r\n.border-4 {\n  border-width: 4px;\n}\r\n.border-none {\n  border-style: none;\n}\r\n.border-\\[\\#363942\\] {\n  --tw-border-opacity: 1;\n  border-color: rgb(54 57 66 / var(--tw-border-opacity));\n}\r\n.border-white {\n  --tw-border-opacity: 1;\n  border-color: rgb(255 255 255 / var(--tw-border-opacity));\n}\r\n.bg-\\[\\#404EED\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(64 78 237 / var(--tw-bg-opacity));\n}\r\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\r\n.bg-gray-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n}\r\n.bg-\\[\\#f6f6f6\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(246 246 246 / var(--tw-bg-opacity));\n}\r\n.bg-\\[\\#5865F2\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(88 101 242 / var(--tw-bg-opacity));\n}\r\n.bg-gray-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n}\r\n.bg-\\[\\#5865f2\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(88 101 242 / var(--tw-bg-opacity));\n}\r\n.bg-\\[\\#212226\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(33 34 38 / var(--tw-bg-opacity));\n}\r\n.bg-\\[\\#303136\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(48 49 54 / var(--tw-bg-opacity));\n}\r\n.bg-\\[\\#363942\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(54 57 66 / var(--tw-bg-opacity));\n}\r\n.bg-transparent {\n  background-color: transparent;\n}\r\n.bg-\\[\\#41444D\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(65 68 77 / var(--tw-bg-opacity));\n}\r\n.bg-\\[\\#36393F\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(54 57 63 / var(--tw-bg-opacity));\n}\r\n.bg-\\[\\#303339\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(48 51 57 / var(--tw-bg-opacity));\n}\r\n.bg-black {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity));\n}\r\n.bg-gray-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(75 85 99 / var(--tw-bg-opacity));\n}\r\n.bg-\\[\\#26272bd0\\] {\n  background-color: #26272bd0;\n}\r\n.bg-\\[\\#5367F2\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(83 103 242 / var(--tw-bg-opacity));\n}\r\n.bg-\\[\\#242424\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(36 36 36 / var(--tw-bg-opacity));\n}\r\n.bg-green-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(34 197 94 / var(--tw-bg-opacity));\n}\r\n.bg-\\[\\#252E47\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(37 46 71 / var(--tw-bg-opacity));\n}\r\n.p-2 {\n  padding: 0.5rem;\n}\r\n.p-3 {\n  padding: 0.75rem;\n}\r\n.p-8 {\n  padding: 2rem;\n}\r\n.p-6 {\n  padding: 1.5rem;\n}\r\n.py-32 {\n  padding-top: 8rem;\n  padding-bottom: 8rem;\n}\r\n.py-\\[8px\\] {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\r\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\r\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\r\n.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\r\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\r\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\r\n.py-\\[120px\\] {\n  padding-top: 120px;\n  padding-bottom: 120px;\n}\r\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\r\n.py-\\[1\\.3rem\\] {\n  padding-top: 1.3rem;\n  padding-bottom: 1.3rem;\n}\r\n.py-16 {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\r\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\r\n.px-1 {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\r\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\r\n.py-6 {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\r\n.pb-64 {\n  padding-bottom: 16rem;\n}\r\n.pb-\\[120px\\] {\n  padding-bottom: 120px;\n}\r\n.pl-2 {\n  padding-left: 0.5rem;\n}\r\n.pl-0 {\n  padding-left: 0px;\n}\r\n.pl-4 {\n  padding-left: 1rem;\n}\r\n.text-left {\n  text-align: left;\n}\r\n.text-center {\n  text-align: center;\n}\r\n.font-ginto {\n  font-family: Ginto Nord, Poppins, Sans-serif;\n}\r\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\r\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\r\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\r\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\r\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\r\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\r\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\r\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\r\n.font-extrabold {\n  font-weight: 800;\n}\r\n.font-bold {\n  font-weight: 700;\n}\r\n.font-thin {\n  font-weight: 100;\n}\r\n.font-semibold {\n  font-weight: 600;\n}\r\n.leading-9 {\n  line-height: 2.25rem;\n}\r\n.leading-\\[120\\%\\] {\n  line-height: 120%;\n}\r\n.leading-7 {\n  line-height: 1.75rem;\n}\r\n.leading-4 {\n  line-height: 1rem;\n}\r\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\r\n.text-blue-600 {\n  --tw-text-opacity: 1;\n  color: rgb(37 99 235 / var(--tw-text-opacity));\n}\r\n.text-\\[\\#5865F2\\] {\n  --tw-text-opacity: 1;\n  color: rgb(88 101 242 / var(--tw-text-opacity));\n}\r\n.text-\\[\\#5865f2\\] {\n  --tw-text-opacity: 1;\n  color: rgb(88 101 242 / var(--tw-text-opacity));\n}\r\n.text-\\[\\#797A7F\\] {\n  --tw-text-opacity: 1;\n  color: rgb(121 122 127 / var(--tw-text-opacity));\n}\r\n.text-gray-300 {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}\r\n.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\r\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity));\n}\r\n.text-\\[\\#00aff4\\] {\n  --tw-text-opacity: 1;\n  color: rgb(0 175 244 / var(--tw-text-opacity));\n}\r\n.text-green-600 {\n  --tw-text-opacity: 1;\n  color: rgb(22 163 74 / var(--tw-text-opacity));\n}\r\n.text-\\[\\#42B781\\] {\n  --tw-text-opacity: 1;\n  color: rgb(66 183 129 / var(--tw-text-opacity));\n}\r\n.outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\r\n.outline-1 {\n  outline-width: 1px;\n}\r\n.outline-offset-0 {\n  outline-offset: 0px;\n}\r\n.outline-slate-900 {\n  outline-color: #0f172a;\n}\r\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\r\n.transition {\n  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\r\n.transition-colors {\n  transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\r\n.scrollbar-thin {\n  --scrollbar-track: initial;\n  --scrollbar-thumb: initial;\n  scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);\n  overflow: overlay;\n}\r\n.scrollbar-thin.overflow-x-hidden {\n  overflow-x: hidden;\n}\r\n.scrollbar-thin.overflow-y-hidden {\n  overflow-y: hidden;\n}\r\n.scrollbar-thin::-webkit-scrollbar-track {\n  background-color: var(--scrollbar-track);\n}\r\n.scrollbar-thin::-webkit-scrollbar-thumb {\n  background-color: var(--scrollbar-thumb);\n}\r\n.scrollbar-thin {\n  scrollbar-width: thin;\n}\r\n.scrollbar-thin::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.focus-within\\:border-black:focus-within {\n  --tw-border-opacity: 1;\n  border-color: rgb(0 0 0 / var(--tw-border-opacity));\n}\r\n\r\n.hover\\:bg-gray-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-\\[\\#5f6bf1\\]:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(95 107 241 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:bg-\\[\\#363942\\]:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(54 57 66 / var(--tw-bg-opacity));\n}\r\n\r\n.hover\\:text-\\[\\#5865f2\\]:hover {\n  --tw-text-opacity: 1;\n  color: rgb(88 101 242 / var(--tw-text-opacity));\n}\r\n\r\n.hover\\:text-gray-100:hover {\n  --tw-text-opacity: 1;\n  color: rgb(243 244 246 / var(--tw-text-opacity));\n}\r\n\r\n.hover\\:text-white:hover {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\r\n\r\n.hover\\:shadow-lg:hover {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n\r\n.hover\\:shadow-xl:hover {\n  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n\r\n.focus\\:outline-\\[\\#00aff4\\]:focus {\n  outline-color: #00aff4;\n}\r\n\r\n@media (min-width: 640px) {\n\n  .sm\\:bottom-0 {\n    bottom: 0px;\n  }\n\n  .sm\\:hidden {\n    display: none;\n  }\n\n  .sm\\:h-auto {\n    height: auto;\n  }\n\n  .sm\\:max-w-\\[480px\\] {\n    max-width: 480px;\n  }\n\n  .sm\\:rounded-md {\n    border-radius: 0.375rem;\n  }\n\n  .sm\\:text-sm {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n  }\n}\r\n\r\n@media (min-width: 768px) {\n\n  .md\\:col-span-7 {\n    grid-column: span 7 / span 7;\n  }\n\n  .md\\:col-span-4 {\n    grid-column: span 4 / span 4;\n  }\n\n  .md\\:col-span-10 {\n    grid-column: span 10 / span 10;\n  }\n\n  .md\\:col-span-3 {\n    grid-column: span 3 / span 3;\n  }\n\n  .md\\:col-span-full {\n    grid-column: 1 / -1;\n  }\n\n  .md\\:col-span-2 {\n    grid-column: span 2 / span 2;\n  }\n\n  .md\\:col-start-9 {\n    grid-column-start: 9;\n  }\n\n  .md\\:col-start-6 {\n    grid-column-start: 6;\n  }\n\n  .md\\:col-start-2 {\n    grid-column-start: 2;\n  }\n\n  .md\\:col-start-1 {\n    grid-column-start: 1;\n  }\n\n  .md\\:col-start-5 {\n    grid-column-start: 5;\n  }\n\n  .md\\:col-start-3 {\n    grid-column-start: 3;\n  }\n\n  .md\\:row-start-1 {\n    grid-row-start: 1;\n  }\n\n  .md\\:mx-2 {\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n  }\n\n  .md\\:mt-0 {\n    margin-top: 0px;\n  }\n\n  .md\\:ml-\\[-1030px\\] {\n    margin-left: -1030px;\n  }\n\n  .md\\:block {\n    display: block;\n  }\n\n  .md\\:flex {\n    display: flex;\n  }\n\n  .md\\:w-3\\/5 {\n    width: 60%;\n  }\n\n  .md\\:w-1\\/2 {\n    width: 50%;\n  }\n\n  .md\\:w-\\[400px\\] {\n    width: 400px;\n  }\n\n  .md\\:min-w-\\[65\\%\\] {\n    min-width: 65%;\n  }\n\n  .md\\:max-w-\\[726px\\] {\n    max-width: 726px;\n  }\n\n  .md\\:grid-cols-12 {\n    grid-template-columns: repeat(12, minmax(0, 1fr));\n  }\n\n  .md\\:grid-cols-8 {\n    grid-template-columns: repeat(8, minmax(0, 1fr));\n  }\n\n  .md\\:grid-rows-1 {\n    grid-template-rows: repeat(1, minmax(0, 1fr));\n  }\n\n  .md\\:flex-row {\n    flex-direction: row;\n  }\n\n  .md\\:py-32 {\n    padding-top: 8rem;\n    padding-bottom: 8rem;\n  }\n\n  .md\\:py-\\[24px\\] {\n    padding-top: 24px;\n    padding-bottom: 24px;\n  }\n\n  .md\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n\n  .md\\:pl-2 {\n    padding-left: 0.5rem;\n  }\n\n  .md\\:text-center {\n    text-align: center;\n  }\n\n  .md\\:text-6xl {\n    font-size: 3.75rem;\n    line-height: 1;\n  }\n\n  .md\\:text-xl {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n\n  .md\\:text-5xl {\n    font-size: 3rem;\n    line-height: 1;\n  }\n\n  .md\\:text-4xl {\n    font-size: 2.25rem;\n    line-height: 2.5rem;\n  }\n\n  .md\\:text-\\[40px\\] {\n    font-size: 40px;\n  }\n\n  .md\\:text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n}\r\n\r\n@media (min-width: 1024px) {\n\n  .lg\\:block {\n    display: block;\n  }\n\n  .lg\\:flex {\n    display: flex;\n  }\n\n  .lg\\:w-\\[784px\\] {\n    width: 784px;\n  }\n\n  .lg\\:w-1\\/2 {\n    width: 50%;\n  }\n\n  .lg\\:min-w-\\[75\\%\\] {\n    min-width: 75%;\n  }\n\n  .lg\\:max-w-\\[784px\\] {\n    max-width: 784px;\n  }\n}\r\n\r\n@media (min-width: 1280px) {\n\n  .xl\\:w-3\\/5 {\n    width: 60%;\n  }\n}\r\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}