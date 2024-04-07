import React from '../../_snowpack/pkg/react.js';
import { Link } from '../../_snowpack/pkg/react-router-dom.js';
import qrCode from '../assets/qr_code.png.proxy.js';
import discordLogo from '../assets/discord_logo.svg.proxy.js';
import loginBg from '../assets/login_bg.svg.proxy.js';
const CreateAccount = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-screen min-h-screen relative overflow-auto"
  }, /*#__PURE__*/React.createElement("img", {
    src: loginBg,
    alt: "BG",
    className: "fixed h-full w-full left-0 top-0 z-0"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative z-1 w-full min-h-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-[#36393F] sm:rounded-md absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-[784px] w-full max-w-screen-sm h-screen sm:h-auto sm:max-w-[480px] lg:max-w-[784px] p-8 transition-all"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-white text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-40 sm:hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cursor-pointer flex flex-row justify-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://pnggrid.com/wp-content/uploads/2021/05/Black-and-white-Discord-Logo-1024x784.png",
    className: "text-blue-600 w-12 mr-2",
    alt: "Discord Logo"
  }), /*#__PURE__*/React.createElement("p", {
    className: "font-ginto text-white text-2xl font-bold mt-1"
  }, "Discord"))), /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl"
  }, "Create an account")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mt-6"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "text-sm leading-4 mb-2 text-gray-400"
  }, "EMAIL"), /*#__PURE__*/React.createElement("div", {
    className: "w-full"
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    className: "bg-[#303339] pl-2 outline-slate-900 border-none outline-none outline-1 outline-offset-0 rounded-sm px-1 py-2 text-gray-300 focus:outline-[#00aff4] w-full transition-all"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mb-2 mt-6"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "text-sm leading-4 mb-2 text-gray-400"
  }, "USERNAME"), /*#__PURE__*/React.createElement("div", {
    className: "w-full"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "bg-[#303339] pl-2 outline-slate-900 border-none outline-none outline-1 outline-offset-0 rounded-sm px-1 py-2 text-gray-300 focus:outline-[#00aff4] w-full transition-all"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mb-2 mt-6"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "text-sm leading-4 mb-2 text-gray-400"
  }, "PASSWORD"), /*#__PURE__*/React.createElement("div", {
    className: "w-full"
  }, /*#__PURE__*/React.createElement("input", {
    type: "password",
    className: "bg-[#303339] pl-2 outline-slate-900 border-none outline-none outline-1 outline-offset-0 rounded-sm px-1 py-2 text-gray-300 focus:outline-[#00aff4] w-full transition-all"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "bg-[#5865F2] border-none w-full text-white py-3 rounded-sm mt-4"
  }, "Continue"), /*#__PURE__*/React.createElement("div", {
    className: "text-gray-500 text-sm"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", {
    className: "text-[#00aff4] ml-1"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/login"
  }, "Already have an account?"), " ")))))))));
};
export default CreateAccount;