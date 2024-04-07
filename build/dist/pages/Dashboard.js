import React from '../../_snowpack/pkg/react.js';
import SidebarLeft from '../components/Dashboard/SidebarLeft.js';
import SidebarRight from '../components/Dashboard/SidebarRight.js';
const Dashboard = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row min-h-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grow max-w-sm flex flex-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[80px] grow bg-[#212226] text-white"
  }, /*#__PURE__*/React.createElement(SidebarLeft, null)), /*#__PURE__*/React.createElement("div", {
    className: "max-w-full grow bg-[#303136] text-white"
  }, /*#__PURE__*/React.createElement(SidebarRight, null))), /*#__PURE__*/React.createElement("div", {
    className: "bg-[#363942] grid grid-rows-[repeat(12,_minmax(0,_1fr))] px-4 min-h-screen grow font-ginto"
  }, /*#__PURE__*/React.createElement("div", null, "Main Dashboard Here")));
};
export default Dashboard;