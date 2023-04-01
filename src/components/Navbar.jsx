import React from 'react'
import { Link } from 'react-router-dom'
import WhiteBackground from '../supports/WhiteBackground';
// import discordLogo from '../assets/discord_mini_icon.svg'
const Navbar = () => {
    return <nav className='w-full mx-auto bg-[#404EED]'>
        <div className='mx-auto flex flex-row justify-between items-center py-4 w-10/12'>
            <div className='cursor-pointer flex flex-row'>
                {/* <img src="https://logos-world.net/wp-content/uploads/2020/12/Discord-Logo.png" className='text-blue-600' alt="Discord Logo" /> */}
                <img src="https://pnggrid.com/wp-content/uploads/2021/05/Black-and-white-Discord-Logo-1024x784.png" className='text-blue-600 w-12 mr-2' alt="Discord Logo" />
                {/* <img src={discordLogo} className='text-blue-600 w-12 mr-2' alt="Discord Logo" /> */}
                <p className='font-ginto text-white text-2xl font-bold mt-1'>Discord</p>
            </div>
            <div className='text-white font-bold hidden lg:block'>
                <Link to='/download' className='px-2'>Download</Link>
                <Link to='/nitro' className='px-2'>Nitro</Link>
                <Link to='/safety' className='px-2'>Safety</Link>
                <Link to='/support' className='px-2'>Support</Link>
                <Link to='/blogs' className='px-2'>Blog</Link>
                <Link to='/carrers' className='px-2'>Carrers</Link>
            </div>
            <div>
                <WhiteBackground>
                    <Link to='/login' className='bg-white px-6 py-3 inline-block hover:shadow-lg hover:text-[#5865f2] transition-all                            '>Login</Link>
                </WhiteBackground>
            </div>
        </div>
    </nav>
}

export default Navbar;