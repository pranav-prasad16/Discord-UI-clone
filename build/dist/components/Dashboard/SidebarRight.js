import React from '../../../_snowpack/pkg/react.js';
import { PlusIcon } from '../../../_snowpack/pkg/@heroicons/react/outline.js';
import EmptyDmListImg from '../../supports/EmptyDmListImg.js';
import FriendsImg from '../../supports/FriendsImg.js';
import StageDiscoveryImg from '../../supports/StageDiscoveryImg.js';
import NitroImg from '../../supports/NitroImg.js';
import { Link } from '../../../_snowpack/pkg/react-router-dom.js';
const SidebarRight = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "grid grid-rows-[repeat(12,_minmax(0,_1fr))] px-4 min-h-screen font-ginto text-[#797A7F]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row-start-1 row-span-3 mt-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: ""
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "bg-[#303339] pl-2 outline-slate-900 border-none outline-none outline-1 outline-offset-0 rounded-sm px-1 py-2 text-gray-300 focus:outline-[#00aff4] w-full transition-all"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mt-5"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/dashboard/friends"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row items-center p-2 mt-2 rounded-md text-white cursor-pointer hover:text-white bg-[#363942] transition-colors"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-6 -mt-1"
  }, /*#__PURE__*/React.createElement(FriendsImg, null)), /*#__PURE__*/React.createElement("p", {
    className: "ml-3 font-bold text-sm select-none"
  }, "Friends"))), /*#__PURE__*/React.createElement(Link, {
    to: "/dashboard/stage-discovery"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row items-center p-2 mt-2 rounded-md cursor-pointer hover:text-white hover:bg-[#363942] transition-colors"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-6 -mt-1"
  }, /*#__PURE__*/React.createElement(StageDiscoveryImg, null)), /*#__PURE__*/React.createElement("p", {
    className: "ml-3 font-bold text-sm select-none"
  }, "Stage Discovery"))), /*#__PURE__*/React.createElement(Link, {
    to: "/dashboard/nitro"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row items-center p-2 mt-2 rounded-md cursor-pointer hover:text-white hover:bg-[#363942] transition-colors"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-6 -mt-1"
  }, /*#__PURE__*/React.createElement(NitroImg, null)), /*#__PURE__*/React.createElement("p", {
    className: "ml-3 font-bold text-sm select-none"
  }, "Nitro"))))), /*#__PURE__*/React.createElement("div", {
    className: "row-start-4 row-span-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row justify-between"
  }, /*#__PURE__*/React.createElement("p", null, "Direct Messages"), /*#__PURE__*/React.createElement(PlusIcon, {
    className: "w-4 cursor-pointer hover:text-white transition-colors"
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-11/12 mx-auto mt-6 "
  }, /*#__PURE__*/React.createElement(EmptyDmListImg, null))));
};
export default SidebarRight;