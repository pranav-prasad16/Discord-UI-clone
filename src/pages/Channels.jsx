import React, { useState } from 'react'
import SidebarLeft from '../components/Dashboard/SidebarLeft'
import ChannelSidebarRight from '../components/Dashboard/ChannelSidebarRight.jsx'
import { BellIcon, BookmarkIcon, EmojiHappyIcon, GiftIcon, HashtagIcon, PhotographIcon, PlusCircleIcon, QuestionMarkCircleIcon, SearchIcon, UsersIcon, WifiIcon } from '@heroicons/react/outline'

const Channels = () => {
    return <div className='flex flex-row min-h-screen'>
        <div className='grow max-w-sm hidden md:flex flex-row'>
            <div className='min-w-[80px] max-w-[80px] grow bg-[#212226] text-white'>
                <SidebarLeft />
            </div>
            <div className='max-w-full grow bg-[#303136] text-white'>
                <ChannelSidebarRight />
            </div>
        </div>
        <RightChannelDashboard />
    </div>
}

const RightChannelDashboard = () => {
    return <div className='bg-[#363942] grid grid-rows-[repeat(12,_minmax(0,_1fr))] relative px-4 min-h-screen grow font-ginto'>
        <div className='flex flex-row items-center text-[#797A7F]'>
            <div className='flex flex-row p-2 my-2 hover:bg-[#363942] rounded-sm cursor-pointer items-center'>
                <HashtagIcon className='w-6' />
                <p className='text-sm ml-2 select-none text-white font-bold'>Javascript</p>
            </div>
            <div className='ml-auto flex-row text-gray-300 hidden lg:flex'>
                <div className='w-10 p-2 cursor-pointer'>
                    <BellIcon />
                </div>
                <div className='w-10 p-2 cursor-pointer'>
                    <BookmarkIcon />
                </div>
                <div className='w-10 p-2 cursor-pointer'>
                    <UsersIcon />
                </div>
                <div className='w-[250px] p-2 cursor-pointer flex flex-row bg-[#212226] rounded-sm'>
                    <input type="text" className='w-full pl-2 outline-none border-none bg-transparent text-white' />
                    <SearchIcon className='w-6 pl-2 text-white cursor-pointer' />
                </div>
                <div className='w-10 p-2 cursor-pointer'>
                    <WifiIcon />
                </div>
                <div className='w-10 p-2 cursor-pointer'>
                    <QuestionMarkCircleIcon />
                </div>

            </div>
        </div>
        <ChannelContentView />
    </div>
}

const ChannelContentView = () => {

    const [onlineMembers, setOnlineMembers] = useState(['Milad', 'Batman', '[x]Joker[x]', '[x]Joker[x]', '[x]Joker[x]'])

    const generateRandomColor = () => {
        return Math.floor(Math.random() * 16777215).toString(16);
    }
    console.log(`#${generateRandomColor()}`)
    return <div className='flex flex-row row-start-2 row-span-full transition-all' >
        <div className={`min-w-full lg:min-w-[75%] h-full flex flex-col justify-between px-1 md:px-6`}>
            <div className='mt-auto text-gray-300'>
                <div className='py-2 flex flex-row items-center bg-[#41444D] rounded-md mb-4'>
                    <div className='w-12 px-3 cursor-pointer hover:text-gray-100 transition-colors'>
                        <PlusCircleIcon className='w-full' />
                    </div>
                    <div className='grow'>
                        <input type="text" placeholder='Message #undefined' className='bg-transparent w-full text-white pl-0 md:pl-2 outline-none border-none text-sm' />
                    </div>
                    <div className='w-12 px-3 cursor-pointer hover:text-gray-100 transition-colors'>
                        <GiftIcon className='w-full' />
                    </div>
                    <div className='w-12 px-3 cursor-pointer hover:text-gray-100 transition-colors'>
                        <PhotographIcon className='w-full' />
                    </div>
                    <div className='w-12 px-3 cursor-pointer hover:text-gray-100 transition-colors'>
                        <EmojiHappyIcon className='w-full' />
                    </div>
                </div>
            </div>
        </div>
        <div className='grow text-gray-400 bg-[#303136] hidden lg:flex ml-4 px-4  flex-col py-4'>
            <div className='py-6'>
                <h2 className='text-sm font-bold'>ONLINE - {3}</h2>
            </div>
            <div className='h-full flex flex-col scrollbar-thin overflow-y-auto mt-2'>
                {
                    onlineMembers.map((el, idx) => {
                        return <div key={idx} className='flex flex-row items-center mb-2'>
                            <div style={{ backgroundColor: `#${generateRandomColor()}bf` }} className={`p-3 h-[47px] rounded-full cursor-pointer flex justify-center items-center`}>
                                <img src="https://pnggrid.com/wp-content/uploads/2021/05/Black-and-white-Discord-Logo-1024x784.png" className='w-6' alt="Discord" />
                            </div>
                            <p className='ml-3'>{el}</p>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}



export default Channels