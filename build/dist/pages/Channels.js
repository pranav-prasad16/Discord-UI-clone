import React, { useState } from '../../_snowpack/pkg/react.js';
import SidebarLeft from '../components/Dashboard/SidebarLeft.js';
import ChannelSidebarRight from '../components/Dashboard/ChannelSidebarRight.js';
import { BellIcon, BookmarkIcon, EmojiHappyIcon, GiftIcon, HashtagIcon, PhotographIcon, PlusCircleIcon, QuestionMarkCircleIcon, SearchIcon, UsersIcon, WifiIcon } from '../../_snowpack/pkg/@heroicons/react/outline.js';
const Channels = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row min-h-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grow max-w-sm hidden md:flex flex-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "min-w-[80px] max-w-[80px] grow bg-[#212226] text-white"
  }, /*#__PURE__*/React.createElement(SidebarLeft, null)), /*#__PURE__*/React.createElement("div", {
    className: "max-w-full grow bg-[#303136] text-white"
  }, /*#__PURE__*/React.createElement(ChannelSidebarRight, null))), /*#__PURE__*/React.createElement(RightChannelDashboard, null));
};
const RightChannelDashboard = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-[#363942] grid grid-rows-[repeat(12,_minmax(0,_1fr))] relative px-4 min-h-screen grow font-ginto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row items-center text-[#797A7F]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row p-2 my-2 hover:bg-[#363942] rounded-sm cursor-pointer items-center"
  }, /*#__PURE__*/React.createElement(HashtagIcon, {
    className: "w-6"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-sm ml-2 select-none text-white font-bold"
  }, "Javascript")), /*#__PURE__*/React.createElement("div", {
    className: "ml-auto flex-row text-gray-300 hidden lg:flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 p-2 cursor-pointer"
  }, /*#__PURE__*/React.createElement(BellIcon, null)), /*#__PURE__*/React.createElement("div", {
    className: "w-10 p-2 cursor-pointer"
  }, /*#__PURE__*/React.createElement(BookmarkIcon, null)), /*#__PURE__*/React.createElement("div", {
    className: "w-10 p-2 cursor-pointer"
  }, /*#__PURE__*/React.createElement(UsersIcon, null)), /*#__PURE__*/React.createElement("div", {
    className: "w-[250px] p-2 cursor-pointer flex flex-row bg-[#212226] rounded-sm"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "w-full pl-2 outline-none border-none bg-transparent text-white"
  }), /*#__PURE__*/React.createElement(SearchIcon, {
    className: "w-6 pl-2 text-white cursor-pointer"
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-10 p-2 cursor-pointer"
  }, /*#__PURE__*/React.createElement(WifiIcon, null)), /*#__PURE__*/React.createElement("div", {
    className: "w-10 p-2 cursor-pointer"
  }, /*#__PURE__*/React.createElement(QuestionMarkCircleIcon, null)))), /*#__PURE__*/React.createElement(ChannelContentView, null));
};
const ChannelContentView = () => {
  const [onlineMembers, setOnlineMembers] = useState(['Milad', 'Batman', '[x]Joker[x]', '[x]Joker[x]', '[x]Joker[x]']);
  const generateRandomColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
  };
  console.log(`#${generateRandomColor()}`);
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row row-start-2 row-span-full transition-all"
  }, /*#__PURE__*/React.createElement("div", {
    className: `min-w-full lg:min-w-[75%] h-full flex flex-col justify-between px-1 md:px-6`
  }, /*#__PURE__*/React.createElement("div", {
    className: "mt-auto text-gray-300"
  }, /*#__PURE__*/React.createElement("div", {
    className: "py-2 flex flex-row items-center bg-[#41444D] rounded-md mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 px-3 cursor-pointer hover:text-gray-100 transition-colors"
  }, /*#__PURE__*/React.createElement(PlusCircleIcon, {
    className: "w-full"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grow"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Message #undefined",
    className: "bg-transparent w-full text-white pl-0 md:pl-2 outline-none border-none text-sm"
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-12 px-3 cursor-pointer hover:text-gray-100 transition-colors"
  }, /*#__PURE__*/React.createElement(GiftIcon, {
    className: "w-full"
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-12 px-3 cursor-pointer hover:text-gray-100 transition-colors"
  }, /*#__PURE__*/React.createElement(PhotographIcon, {
    className: "w-full"
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-12 px-3 cursor-pointer hover:text-gray-100 transition-colors"
  }, /*#__PURE__*/React.createElement(EmojiHappyIcon, {
    className: "w-full"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "grow text-gray-400 bg-[#303136] hidden lg:flex ml-4 px-4  flex-col py-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "py-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-sm font-bold"
  }, "ONLINE - ", 3)), /*#__PURE__*/React.createElement("div", {
    className: "h-full flex flex-col scrollbar-thin overflow-y-auto mt-2"
  }, onlineMembers.map((el, idx) => {
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      className: "flex flex-row items-center mb-2"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        backgroundColor: `#${generateRandomColor()}bf`
      },
      className: `p-3 h-[47px] rounded-full cursor-pointer flex justify-center items-center`
    }, /*#__PURE__*/React.createElement("img", {
      src: "https://pnggrid.com/wp-content/uploads/2021/05/Black-and-white-Discord-Logo-1024x784.png",
      className: "w-6",
      alt: "Discord"
    })), /*#__PURE__*/React.createElement("p", {
      className: "ml-3"
    }, el));
  }))));
};
export default Channels;