import React from 'react';
import { ChevronDownIcon, CogIcon, HashtagIcon, MicrophoneIcon, SpeakerphoneIcon, XIcon } from '@heroicons/react/outline';
import discordIcon from '../../assets/icons/favicon.ico'

const ChannelSidebarRight = () => {
  return (
    <div className='relative'>
      <div className='grid grid-rows-[repeat(12,_minmax(0,_1fr))] px-4 min-h-screen font-ginto text-[#797A7F]'>
        <div className='row-start-1 row-span-3 mt-5'>
          <div className='text-white flex flex-row justify-between items-center'>
            <h2 className='text-sm font-bold'>newLine</h2>
            <div className='w-6 cursor-pointer'>
              <XIcon />
            </div>
          </div>
          <div className='max-h-[200px] mt-5'>
            {/* #rules goes here */}
            {
              ['rules'].map((el, key) => {
                return <div key={key} className='flex flex-row p-2 my-2 hover:bg-[#363942] rounded-sm cursor-pointer'>
                  <HashtagIcon className='w-6' />
                  <p className='text-md ml-2 select-none text-gray-400'>{el}</p>
                </div>
              })
            }
          </div>
        </div>
        <div className='row-start-4 row-span-full'>
          <div className='flex flex-row'>
            <ChevronDownIcon className='w-4 cursor-pointer hover:text-white transition-colors' />
            <p className='pl-4'>TEXT CHANNELS</p>
          </div>
          <div className='w-11/12 mx-auto mt-6 grow max-h-[64vh] overflow-y-auto scrollbar-thin'>
            <div className='flex flex-row p-2 bg-[#363942] my-2 rounded-sm cursor-pointer'>
              <HashtagIcon className='w-6' />
              <p className='text-md ml-2 select-none text-white'>algorithms</p>
            </div>
            {
              ['announcements', 'blogging', 'collabrators', 'course-ideas', 'machine-learning'].map((el, key) => {
                return <div key={key} className='flex flex-row p-2 my-2 hover:bg-[#363942] rounded-sm cursor-pointer'>
                  <HashtagIcon className='w-6' />
                  <p className='text-md ml-2 select-none text-white'>{el}</p>
                </div>
              })
            }
          </div>
        </div>
      </div>
      <div className='w-full absolute bottom-0 left-0 px-2 py-3 bg-[#242424] flex flex-row items-center'>
        <div className='flex flex-row'>
          <div className='w-10 relative mr-2'>
            <div className='absolute w-3 h-3 right-0 bottom-1 bg-green-500 rounded-full'></div>
            <img src={discordIcon} alt="Discord icon" />
          </div>
          <div className='flex flex-col justify-center'>
            <h2 className='text-sm text-white font-bold'>milda</h2>
            <p className='text-xs text-gray-400 select-none'>#8454</p>
          </div>
        </div>
        <div className='w-10 ml-auto text-gray-400 cursor-pointer p-2 hover:text-white transition-colors'>
          <MicrophoneIcon />
        </div>
        <div className='w-10 text-gray-400 cursor-pointer p-2 hover:text-white transition-colors'>
          <SpeakerphoneIcon />
        </div>
        <div className='w-10 text-gray-400 cursor-pointer p-2 hover:text-white transition-colors'>
          <CogIcon />
        </div>
      </div>
    </div>
  );
};

export default ChannelSidebarRight;
