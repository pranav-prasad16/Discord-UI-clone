import React from 'react'
import SidebarLeft from '../components/Dashboard/SidebarLeft'
import SidebarRight from '../components/Dashboard/SidebarRight'

const Dashboard = () => {
    return <div className='flex flex-row min-h-screen'>
        <div className='grow max-w-sm flex flex-row'>
            <div className='max-w-[80px] grow bg-[#212226] text-white'>
                <SidebarLeft />
            </div>
            <div className='max-w-full grow bg-[#303136] text-white'>
                <SidebarRight />
            </div>
        </div>
        <div className='bg-[#363942] grid grid-rows-[repeat(12,_minmax(0,_1fr))] px-4 min-h-screen grow font-ginto'>
            <div>Main Dashboard Here</div>
        </div>
    </div>
}

export default Dashboard