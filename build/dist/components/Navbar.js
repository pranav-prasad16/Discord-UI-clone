import React from '../../_snowpack/pkg/react.js';
import { Link } from '../../_snowpack/pkg/react-router-dom.js';
import WhiteBackground from '../supports/WhiteBackground.js';
// import discordLogo from '../assets/discord_mini_icon.svg'
const Navbar = () => {
  return /*#__PURE__*/React.createElement("nav", {
    className: "w-full mx-auto bg-[#404EED]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto flex flex-row justify-between items-center py-4 w-10/12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cursor-pointer flex flex-row"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://pnggrid.com/wp-content/uploads/2021/05/Black-and-white-Discord-Logo-1024x784.png",
    className: "text-blue-600 w-12 mr-2",
    alt: "Discord Logo"
  }), /*#__PURE__*/React.createElement("p", {
    className: "font-ginto text-white text-2xl font-bold mt-1"
  }, "Discord")), /*#__PURE__*/React.createElement("div", {
    className: "text-white font-bold hidden lg:block"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/download",
    className: "px-2"
  }, "Download"), /*#__PURE__*/React.createElement(Link, {
    to: "/nitro",
    className: "px-2"
  }, "Nitro"), /*#__PURE__*/React.createElement(Link, {
    to: "/safety",
    className: "px-2"
  }, "Safety"), /*#__PURE__*/React.createElement(Link, {
    to: "/support",
    className: "px-2"
  }, "Support"), /*#__PURE__*/React.createElement(Link, {
    to: "/blogs",
    className: "px-2"
  }, "Blog"), /*#__PURE__*/React.createElement(Link, {
    to: "/carrers",
    className: "px-2"
  }, "Carrers")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WhiteBackground, null, /*#__PURE__*/React.createElement(Link, {
    to: "/login",
    className: "bg-white px-6 py-3 inline-block hover:shadow-lg hover:text-[#5865f2] transition-all                            "
  }, "Login")))));
};
export default Navbar;