import React from '../../../_snowpack/pkg/react.js';
import newLine from '../../assets/new_line.png.proxy.js';
import { DownloadIcon, PlusIcon } from '../../../_snowpack/pkg/@heroicons/react/outline.js';
import { Link } from '../../../_snowpack/pkg/react-router-dom.js';
const SidebarLeft = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col min-h-full items-center"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/dashboard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 mt-4 bg-[#5367F2] rounded-2xl cursor-pointer"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://pnggrid.com/wp-content/uploads/2021/05/Black-and-white-Discord-Logo-1024x784.png",
    className: "w-8",
    alt: "Discord"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/channel/newline"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-[#252E47] rounded-2xl cursor-pointer"
  }, /*#__PURE__*/React.createElement("img", {
    src: newLine,
    className: "w-8",
    alt: "Discord"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "p-3 mt-4 bg-[#303136] rounded-full cursor-pointer"
  }, /*#__PURE__*/React.createElement(PlusIcon, {
    className: "text-[#42B781] w-8"
  })), /*#__PURE__*/React.createElement("div", {
    className: "p-3 mt-4 bg-[#303136] rounded-full cursor-pointer "
  }, /*#__PURE__*/React.createElement("img", {
    src: "http://cdn.onlinewebfonts.com/svg/img_119257.png",
    alt: "compass",
    className: "text-[#42B781] w-8"
  })), /*#__PURE__*/React.createElement("div", {
    className: "p-3 mt-4 bg-[#303136] rounded-full cursor-pointer"
  }, /*#__PURE__*/React.createElement(DownloadIcon, {
    className: "text-[#42B781] w-8"
  })));
};
export default SidebarLeft;