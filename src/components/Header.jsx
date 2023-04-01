import React from 'react'
import WhiteBackground from '../supports/WhiteBackground'
import { DownloadIcon } from '@heroicons/react/outline'
import leftBgLandingHeader from '../assets/left_bg_landing_header.svg'
import rightBgLandingHeader from '../assets/right_bg_landing_header.svg'
import centerBgLandingHeader from '../assets/center_bg_landing_header.svg'
const Header = () => {
    return <header className='bg-[#404EED] w-full py-32 pb-64 bottom-0 md:py-32 relative block overflow-hidden'>
        <div className='z-[1] relative'>
            <div className='w-11/12 md:w-3/5 mx-auto'>
                <h1 className='text-2xl font-extrabold md:text-6xl text-left md:text-center text-white'>IMAGINE A PLACE...</h1>
                <div className='text-left md:text-center text-base md:text-xl text-white leading-9 mt-6'>
                    <p>...where you can belong to a school club, a gaming group, or a worldwide art community.</p>
                    <p>Where just you and a handful of friends can spend time together. A place that makes it</p>
                    <p>easier to talk everyday and hang out more often.</p>
                </div>
                <div className='flex flex-col md:flex-row w-full xl:w-3/5  mx-auto mt-6 transition-all'>
                    <WhiteBackground>
                        <button className='flex flex-row justify-center w-full md:w-1/2 items-center bg-white grow md:mx-2 hover:shadow-lg hover:text-[#5865f2] transition py-[8px] md:py-[24px]'>
                            <DownloadIcon className='w-6' />
                            <p>Download For Mac</p>
                        </button>
                    </WhiteBackground>
                    <WhiteBackground>
                        <button className='flex flex-row justify-center w-full md:w-1/2 items-center grow md:mx-2 text-white bg-gray-800 hover:bg-gray-700 hover:shadow-lg transition py-[8px] mt-4 md:mt-0 md:py-[24px]'>
                            <p>Open Discord in your browser</p>
                        </button>
                    </WhiteBackground>
                </div>
            </div>
        </div>
        <div className='z-0 absolute w-full h-full left-0 top-0 select-none'>
            <img src={centerBgLandingHeader} alt="centerBgLandingHeader" className='block absolute left-1/2 top-auto bottom-[-20px] sm:bottom-0 ml-[-880px] max-w-none' />
            <img src={leftBgLandingHeader} alt="leftBgLandingHeader" className='block absolute left-1/2 -bottom-[35px] sm:bottom-0 ml-[-380px] max-w-[530px] md:ml-[-1030px] md:max-w-[726px]' />
            <img src={rightBgLandingHeader} alt="right_bg_landing_header" className='block absolute bottom-0 left-1/2 ml-[370px]' />
        </div>
    </header>
}

export default Header;