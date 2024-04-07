import React from '../_snowpack/pkg/react.js';
import './App.css.proxy.js';
import { BrowserRouter as Router, Routes, Route, Link } from '../_snowpack/pkg/react-router-dom.js';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import CreateAccount from './pages/CreateAccount.js';
import Dashboard from './pages/Dashboard.js';
import DashboardFriends from './pages/DashboardFriends.js';
import Channels from './pages/Channels.js';
import StageDiscovery from './pages/StageDiscovery.js';
import Nitro from './pages/Nitro.js';
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(Home, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/login",
    element: /*#__PURE__*/React.createElement(Login, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/create-account",
    element: /*#__PURE__*/React.createElement(CreateAccount, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/dashboard/",
    element: /*#__PURE__*/React.createElement(DashboardFriends, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/dashboard/stage-discovery",
    element: /*#__PURE__*/React.createElement(StageDiscovery, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/dashboard/nitro",
    element: /*#__PURE__*/React.createElement(Nitro, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/channel/:name",
    element: /*#__PURE__*/React.createElement(Channels, null)
  }))));
}
export default App;