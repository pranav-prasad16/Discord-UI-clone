import React, { useState } from 'react'
import SidebarLeft from '../components/Dashboard/SidebarLeft'
import SidebarRight from '../components/Dashboard/SidebarRight'
import FriendsImg from '../supports/FriendsImg'
import addFriendIcon from '../assets/add_friend_icon.svg'
import noOnineFriendIcon from '../assets/no_online_friends.svg'
import pendingFriendIcon from '../assets/pending_users_icon.svg'
import blockedFriendIcon from '../assets/blocked_users_icon.svg'

const DashboardFriends = () => {
    return <div className='flex flex-row min-h-screen'>
        <div className='grow max-w-sm hidden md:flex flex-row'>
            <div className='max-w-[80px] min-w-[80px] grow bg-[#212226] text-white'>
                <SidebarLeft />
            </div>
            <div className='max-w-full grow bg-[#303136] text-white'>
                <SidebarRight />
            </div>
        </div>
        <RightFriendsDashboard />
    </div>
}

const RightFriendsDashboard = () => {

    const [screen, setScreen] = useState('Online');

    const handleClickOnFriendStatus = (e) => {
        console.log(e.target.textContent)
        setScreen(e.target.textContent)
    }

    return <div className='bg-[#363942] grid grid-rows-[repeat(12,_minmax(0,_1fr))] relative px-4 min-h-screen grow font-ginto'>
        <div className='absolute left-0 top-0 w-full h-[1px] bg-black mt-16'></div>
        <div className='flex flex-row items-center text-[#797A7F]'>
            <div className='flex flex-row items-center py-2 text-white'>
                <div className='w-6 -mt-1'>
                    <FriendsImg />
                </div>
                <p className='ml-3 font-bold text-xs sm:text-sm select-none'>Friends</p>
            </div>
            <div className='hidden md:block ml-6 p-3 cursor-pointer transition-colors hover:text-white' onClick={handleClickOnFriendStatus}>
                <p className={`text-xs sm:text-sm ${screen === 'Online' ? 'text-green-600 font-bold' : ''} transition-colors`}>Online</p>
            </div>
            <div className='hidden md:block ml-6 p-3 cursor-pointer hover:text-white transition-colors' onClick={handleClickOnFriendStatus}>
                <p className={`text-xs sm:text-sm ${screen === 'All' ? 'text-green-600 font-bold' : ''} transition-colors`}>All</p>
            </div>
            <div className='hidden md:block ml-6 p-3 cursor-pointer hover:text-white transition-colors' onClick={handleClickOnFriendStatus}>
                <p className={`text-xs sm:text-sm ${screen === 'Pending' ? 'text-green-600 font-bold' : ''} transition-colors`}>Pending</p>
            </div>
            <div className='hidden md:block ml-6 p-3 cursor-pointer hover:text-white transition-colors' onClick={handleClickOnFriendStatus}>
                <p className={`text-xs sm:text-sm ${screen === 'Blocked' ? 'text-green-600 font-bold' : ''} transition-colors`}>Blocked</p>
            </div>
            <div className='hidden md:block ml-6 p-3 cursor-pointer' onClick={handleClickOnFriendStatus}>
                <p className={`text-xs sm:text-sm ${screen === 'Add Friend' ? 'text-green-600 font-bold' : ''} transition-colors`}>Add Friend</p>
            </div>
        </div>
        <FriendView viewToRender={screen} />
    </div>
}

const FriendView = ({ viewToRender }) => {
    return <div className='flex flex-row row-start-2 row-span-full transition-all' >
        <div className={`min-w-full md:min-w-[65%] h-full flex flex-col justify-between px-6`}>
            {
                viewToRender === 'Add Friend' && <AddFriendView />
            }
            {
                viewToRender === 'Online' && <OnlineFriendView />
            }
            {
                viewToRender === 'All' && <AllFriendView />
            }
            {
                viewToRender === 'Pending' && <PendingFriendView />
            }
            {
                viewToRender === 'Blocked' && <BlockedFriendView />
            }
        </div>
        <div className='w-[1px] hidden lg:block bg-gray-600 relative'>
            <div className='absolute left-0 top-0 w-full h-full -mt-4 bg-gray-600'></div>
        </div>
        <div className='grow text-white hidden lg:flex ml-4  flex-col py-6'>
            <div className='py-6'>
                <h2 className='text-xl font-bold'>Active Now</h2>
            </div>
            <div className='text-center'>
                <h3 className='text-md font-bold'>It's quiet for now...</h3>
                <p className='text-sm text-gray-400'>When a friend starts an activity - like playing a game or hanging out on voice - we'll show it here</p>
            </div>
        </div>
    </div>
}

const AddFriendView = () => {
    return <>
        <div className='text-white mt-5'>
            <h2 className='text-lg font-bold'>ADD FRIEND</h2>
            <p className='text-sm text-gray-400'>You can add a friend with their Discord Tag. It's cAsE sEnSiTiVe!</p>
            <div className='flex flex-row mt-6 overflow-hidden rounded-lg border-[#363942] border-[1px] transition-colors focus-within:border-black bg-[#26272bd0]  '>
                <input type="text" className='w-full border-none outline-none bg-transparent pl-4' placeholder='Enter a Username#0000' />
                <div className='w-64 p-2 bg-[#303136]'>
                    <div className='w-full bg-[#5367F2] cursor-pointer rounded-md p-2'>
                        <button className='w-full text-sm'>Send Friend Request</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='mx-auto w-[400px] mb-[200px]'>
            <img src={addFriendIcon} alt="" className='w-full' />
            <p className='mt-8 text-sm text-gray-500 text-center'>Wumpus is waiting on friends. You don't have to though!</p>
        </div>
    </>
}

const OnlineFriendView = () => {
    return <>
        <div className='m-auto md:w-[400px]'>
            <img src={noOnineFriendIcon} alt="" className='w-full' />
            <p className='mt-8 text-sm text-gray-500 text-center'>No one's around to play with Wumpus!</p>
        </div>
    </>
}
const AllFriendView = () => {
    return <>
        <div className='m-auto md:w-[400px]'>
            <img src={addFriendIcon} alt="" className='w-full' />
            <p className='mt-8 text-sm text-gray-500 text-center'>Wumpus is waiting on friends. You don't have to though!</p>
        </div>
    </>
}
const PendingFriendView = () => {
    return <>
        <div className='m-auto md:w-[400px]'>
            <img src={pendingFriendIcon} alt="" className='w-full' />
            <p className='mt-8 text-sm text-gray-500 text-center'>Wumpus is waiting on friends. You don't have to though!</p>
        </div>
    </>
}
const BlockedFriendView = () => {
    return <>
        <div className='m-auto md:w-[400px]'>
            <img src={blockedFriendIcon} alt="" className='w-full' />
            <p className='mt-8 text-sm text-gray-500 text-center'>Wumpus is blocking toxic friends. You don't have to though!</p>
        </div>
    </>
}

export default DashboardFriends