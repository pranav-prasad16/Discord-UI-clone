import * as __SNOWPACK_ENV__ from '../_snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React from '../_snowpack/pkg/react.js';
import ReactDOM from '../_snowpack/pkg/react-dom.js';
import App from './App.js';
import './index.css.proxy.js';
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render( /*#__PURE__*/React.createElement(App, null));

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (undefined /* [snowpack] import.meta.hot */ ) {
  undefined /* [snowpack] import.meta.hot */ .accept();
}