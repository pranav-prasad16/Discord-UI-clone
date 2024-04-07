import React, { useState } from '../../_snowpack/pkg/react.js';
import SidebarLeft from '../components/Dashboard/SidebarLeft.js';
import SidebarRight from '../components/Dashboard/SidebarRight.js';
import FriendsImg from '../supports/FriendsImg.js';
import addFriendIcon from '../assets/add_friend_icon.svg.proxy.js';
import noOnineFriendIcon from '../assets/no_online_friends.svg.proxy.js';
import pendingFriendIcon from '../assets/pending_users_icon.svg.proxy.js';
import blockedFriendIcon from '../assets/blocked_users_icon.svg.proxy.js';
const DashboardFriends = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row min-h-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grow max-w-sm hidden md:flex flex-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[80px] min-w-[80px] grow bg-[#212226] text-white"
  }, /*#__PURE__*/React.createElement(SidebarLeft, null)), /*#__PURE__*/React.createElement("div", {
    className: "max-w-full grow bg-[#303136] text-white"
  }, /*#__PURE__*/React.createElement(SidebarRight, null))), /*#__PURE__*/React.createElement(RightFriendsDashboard, null));
};
const RightFriendsDashboard = () => {
  const [screen, setScreen] = useState('Online');
  const handleClickOnFriendStatus = e => {
    console.log(e.target.textContent);
    setScreen(e.target.textContent);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-[#363942] grid grid-rows-[repeat(12,_minmax(0,_1fr))] relative px-4 min-h-screen grow font-ginto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute left-0 top-0 w-full h-[1px] bg-black mt-16"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row items-center text-[#797A7F]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row items-center py-2 text-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-6 -mt-1"
  }, /*#__PURE__*/React.createElement(FriendsImg, null)), /*#__PURE__*/React.createElement("p", {
    className: "ml-3 font-bold text-xs sm:text-sm select-none"
  }, "Friends")), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:block ml-6 p-3 cursor-pointer transition-colors hover:text-white",
    onClick: handleClickOnFriendStatus
  }, /*#__PURE__*/React.createElement("p", {
    className: `text-xs sm:text-sm ${screen === 'Online' ? 'text-green-600 font-bold' : ''} transition-colors`
  }, "Online")), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:block ml-6 p-3 cursor-pointer hover:text-white transition-colors",
    onClick: handleClickOnFriendStatus
  }, /*#__PURE__*/React.createElement("p", {
    className: `text-xs sm:text-sm ${screen === 'All' ? 'text-green-600 font-bold' : ''} transition-colors`
  }, "All")), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:block ml-6 p-3 cursor-pointer hover:text-white transition-colors",
    onClick: handleClickOnFriendStatus
  }, /*#__PURE__*/React.createElement("p", {
    className: `text-xs sm:text-sm ${screen === 'Pending' ? 'text-green-600 font-bold' : ''} transition-colors`
  }, "Pending")), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:block ml-6 p-3 cursor-pointer hover:text-white transition-colors",
    onClick: handleClickOnFriendStatus
  }, /*#__PURE__*/React.createElement("p", {
    className: `text-xs sm:text-sm ${screen === 'Blocked' ? 'text-green-600 font-bold' : ''} transition-colors`
  }, "Blocked")), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:block ml-6 p-3 cursor-pointer",
    onClick: handleClickOnFriendStatus
  }, /*#__PURE__*/React.createElement("p", {
    className: `text-xs sm:text-sm ${screen === 'Add Friend' ? 'text-green-600 font-bold' : ''} transition-colors`
  }, "Add Friend"))), /*#__PURE__*/React.createElement(FriendView, {
    viewToRender: screen
  }));
};
const FriendView = ({
  viewToRender
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row row-start-2 row-span-full transition-all"
  }, /*#__PURE__*/React.createElement("div", {
    className: `min-w-full md:min-w-[65%] h-full flex flex-col justify-between px-6`
  }, viewToRender === 'Add Friend' && /*#__PURE__*/React.createElement(AddFriendView, null), viewToRender === 'Online' && /*#__PURE__*/React.createElement(OnlineFriendView, null), viewToRender === 'All' && /*#__PURE__*/React.createElement(AllFriendView, null), viewToRender === 'Pending' && /*#__PURE__*/React.createElement(PendingFriendView, null), viewToRender === 'Blocked' && /*#__PURE__*/React.createElement(BlockedFriendView, null)), /*#__PURE__*/React.createElement("div", {
    className: "w-[1px] hidden lg:block bg-gray-600 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute left-0 top-0 w-full h-full -mt-4 bg-gray-600"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grow text-white hidden lg:flex ml-4  flex-col py-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "py-6"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-bold"
  }, "Active Now")), /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-md font-bold"
  }, "It's quiet for now..."), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-400"
  }, "When a friend starts an activity - like playing a game or hanging out on voice - we'll show it here"))));
};
const AddFriendView = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "text-white mt-5"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-lg font-bold"
  }, "ADD FRIEND"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-400"
  }, "You can add a friend with their Discord Tag. It's cAsE sEnSiTiVe!"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row mt-6 overflow-hidden rounded-lg border-[#363942] border-[1px] transition-colors focus-within:border-black bg-[#26272bd0]  "
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "w-full border-none outline-none bg-transparent pl-4",
    placeholder: "Enter a Username#0000"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-64 p-2 bg-[#303136]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full bg-[#5367F2] cursor-pointer rounded-md p-2"
  }, /*#__PURE__*/React.createElement("button", {
    className: "w-full text-sm"
  }, "Send Friend Request"))))), /*#__PURE__*/React.createElement("div", {
    className: "mx-auto w-[400px] mb-[200px]"
  }, /*#__PURE__*/React.createElement("img", {
    src: addFriendIcon,
    alt: "",
    className: "w-full"
  }), /*#__PURE__*/React.createElement("p", {
    className: "mt-8 text-sm text-gray-500 text-center"
  }, "Wumpus is waiting on friends. You don't have to though!")));
};
const OnlineFriendView = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "m-auto md:w-[400px]"
  }, /*#__PURE__*/React.createElement("img", {
    src: noOnineFriendIcon,
    alt: "",
    className: "w-full"
  }), /*#__PURE__*/React.createElement("p", {
    className: "mt-8 text-sm text-gray-500 text-center"
  }, "No one's around to play with Wumpus!")));
};
const AllFriendView = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "m-auto md:w-[400px]"
  }, /*#__PURE__*/React.createElement("img", {
    src: addFriendIcon,
    alt: "",
    className: "w-full"
  }), /*#__PURE__*/React.createElement("p", {
    className: "mt-8 text-sm text-gray-500 text-center"
  }, "Wumpus is waiting on friends. You don't have to though!")));
};
const PendingFriendView = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "m-auto md:w-[400px]"
  }, /*#__PURE__*/React.createElement("img", {
    src: pendingFriendIcon,
    alt: "",
    className: "w-full"
  }), /*#__PURE__*/React.createElement("p", {
    className: "mt-8 text-sm text-gray-500 text-center"
  }, "Wumpus is waiting on friends. You don't have to though!")));
};
const BlockedFriendView = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "m-auto md:w-[400px]"
  }, /*#__PURE__*/React.createElement("img", {
    src: blockedFriendIcon,
    alt: "",
    className: "w-full"
  }), /*#__PURE__*/React.createElement("p", {
    className: "mt-8 text-sm text-gray-500 text-center"
  }, "Wumpus is blocking toxic friends. You don't have to though!")));
};
export default DashboardFriends;