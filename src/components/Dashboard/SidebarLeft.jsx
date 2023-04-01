import React from 'react'
import newLine from '../../assets/new_line.png'
import { DownloadIcon, PlusIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
const SidebarLeft = () => {
    return <div className='flex flex-col min-h-full items-center'>
        <Link to='/dashboard'>
            <div className='p-3 mt-4 bg-[#5367F2] rounded-2xl cursor-pointer'>
                <img src="https://pnggrid.com/wp-content/uploads/2021/05/Black-and-white-Discord-Logo-1024x784.png" className='w-8' alt="Discord" />
            </div>
        </Link>
        <div className='mt-4'>
            <Link to='/channel/newline'>
                <div className='p-3 bg-[#252E47] rounded-2xl cursor-pointer'>
                    <img src={newLine} className='w-8' alt="Discord" />
                </div>
            </Link>
        </div>
        <div className='p-3 mt-4 bg-[#303136] rounded-full cursor-pointer'>
            <PlusIcon className='text-[#42B781] w-8' />
        </div>
        <div className='p-3 mt-4 bg-[#303136] rounded-full cursor-pointer '>
            <img src="http://cdn.onlinewebfonts.com/svg/img_119257.png" alt="compass" className='text-[#42B781] w-8' />
        </div>
        <div className='p-3 mt-4 bg-[#303136] rounded-full cursor-pointer'>
            <DownloadIcon className='text-[#42B781] w-8' />
        </div>
    </div>
}

export default SidebarLeft