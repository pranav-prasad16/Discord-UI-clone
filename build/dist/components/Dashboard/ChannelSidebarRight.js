import React from '../../../_snowpack/pkg/react.js';
import { ChevronDownIcon, CogIcon, HashtagIcon, MicrophoneIcon, SpeakerphoneIcon, XIcon } from '../../../_snowpack/pkg/@heroicons/react/outline.js';
import discordIcon from '../../assets/icons/favicon.ico.proxy.js';
const ChannelSidebarRight = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-rows-[repeat(12,_minmax(0,_1fr))] px-4 min-h-screen font-ginto text-[#797A7F]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row-start-1 row-span-3 mt-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-white flex flex-row justify-between items-center"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-sm font-bold"
  }, "newLine"), /*#__PURE__*/React.createElement("div", {
    className: "w-6 cursor-pointer"
  }, /*#__PURE__*/React.createElement(XIcon, null))), /*#__PURE__*/React.createElement("div", {
    className: "max-h-[200px] mt-5"
  }, ['rules'].map((el, key) => {
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      className: "flex flex-row p-2 my-2 hover:bg-[#363942] rounded-sm cursor-pointer"
    }, /*#__PURE__*/React.createElement(HashtagIcon, {
      className: "w-6"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-md ml-2 select-none text-gray-400"
    }, el));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "row-start-4 row-span-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row"
  }, /*#__PURE__*/React.createElement(ChevronDownIcon, {
    className: "w-4 cursor-pointer hover:text-white transition-colors"
  }), /*#__PURE__*/React.createElement("p", {
    className: "pl-4"
  }, "TEXT CHANNELS")), /*#__PURE__*/React.createElement("div", {
    className: "w-11/12 mx-auto mt-6 grow max-h-[64vh] overflow-y-auto scrollbar-thin"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row p-2 bg-[#363942] my-2 rounded-sm cursor-pointer"
  }, /*#__PURE__*/React.createElement(HashtagIcon, {
    className: "w-6"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-md ml-2 select-none text-white"
  }, "algorithms")), ['announcements', 'blogging', 'collabrators', 'course-ideas', 'machine-learning'].map((el, key) => {
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      className: "flex flex-row p-2 my-2 hover:bg-[#363942] rounded-sm cursor-pointer"
    }, /*#__PURE__*/React.createElement(HashtagIcon, {
      className: "w-6"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-md ml-2 select-none text-white"
    }, el));
  })))), /*#__PURE__*/React.createElement("div", {
    className: "w-full absolute bottom-0 left-0 px-2 py-3 bg-[#242424] flex flex-row items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 relative mr-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute w-3 h-3 right-0 bottom-1 bg-green-500 rounded-full"
  }), /*#__PURE__*/React.createElement("img", {
    src: discordIcon,
    alt: "Discord icon"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col justify-center"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-sm text-white font-bold"
  }, "milda"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-400 select-none"
  }, "#8454"))), /*#__PURE__*/React.createElement("div", {
    className: "w-10 ml-auto text-gray-400 cursor-pointer p-2 hover:text-white transition-colors"
  }, /*#__PURE__*/React.createElement(MicrophoneIcon, null)), /*#__PURE__*/React.createElement("div", {
    className: "w-10 text-gray-400 cursor-pointer p-2 hover:text-white transition-colors"
  }, /*#__PURE__*/React.createElement(SpeakerphoneIcon, null)), /*#__PURE__*/React.createElement("div", {
    className: "w-10 text-gray-400 cursor-pointer p-2 hover:text-white transition-colors"
  }, /*#__PURE__*/React.createElement(CogIcon, null))));
};
export default ChannelSidebarRight;