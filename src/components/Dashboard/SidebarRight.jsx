import React from 'react'
import { PlusIcon } from '@heroicons/react/outline'
import EmptyDmListImg from '../../supports/EmptyDmListImg'
import FriendsImg from '../../supports/FriendsImg'
import StageDiscoveryImg from '../../supports/StageDiscoveryImg'
import NitroImg from '../../supports/NitroImg'
import { Link } from 'react-router-dom'

const SidebarRight = () => {
    return <div className='grid grid-rows-[repeat(12,_minmax(0,_1fr))] px-4 min-h-screen font-ginto text-[#797A7F]'>
        <div className='row-start-1 row-span-3 mt-5'>
            <div className=''>
                <div className='w-full'>
                    <input type="text" className='bg-[#303339] pl-2 outline-slate-900 border-none outline-none outline-1 outline-offset-0 rounded-sm px-1 py-2 text-gray-300 focus:outline-[#00aff4] w-full transition-all' />
                </div>
            </div>
            <div className='mt-5'>
                <Link to='/dashboard/friends'>
                    <div className='flex flex-row items-center p-2 mt-2 rounded-md text-white cursor-pointer hover:text-white bg-[#363942] transition-colors'>
                        <div className='w-6 -mt-1'>
                            <FriendsImg />
                        </div>
                        <p className='ml-3 font-bold text-sm select-none'>Friends</p>
                    </div>
                </Link>
                <Link to='/dashboard/stage-discovery'>
                    <div className='flex flex-row items-center p-2 mt-2 rounded-md cursor-pointer hover:text-white hover:bg-[#363942] transition-colors'>
                        <div className='w-6 -mt-1'>
                            <StageDiscoveryImg />
                        </div>
                        <p className='ml-3 font-bold text-sm select-none'>Stage Discovery</p>
                    </div>
                </Link>
                <Link to='/dashboard/nitro'>
                    <div className='flex flex-row items-center p-2 mt-2 rounded-md cursor-pointer hover:text-white hover:bg-[#363942] transition-colors'>
                        <div className='w-6 -mt-1'>
                            <NitroImg />
                        </div>
                        <p className='ml-3 font-bold text-sm select-none'>Nitro</p>
                    </div>
                </Link>
            </div>
        </div>
        <div className='row-start-4 row-span-full'>
            <div className='flex flex-row justify-between'>
                <p>Direct Messages</p>
                <PlusIcon className='w-4 cursor-pointer hover:text-white transition-colors' />
            </div>
            <div className='w-11/12 mx-auto mt-6 '>
                <EmptyDmListImg />
            </div>
        </div>
    </div>
}

export default SidebarRight