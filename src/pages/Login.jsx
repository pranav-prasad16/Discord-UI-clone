import React from 'react'
import { Link } from 'react-router-dom'
import qrCode from '../assets/qr_code.png'
import discordLogo from '../assets/discord_logo.svg'
import loginBg from '../assets/login_bg.svg'
const Login = () => {
    return <div className='w-screen min-h-screen relative overflow-auto'>
        <img src={loginBg} alt="BG" className='fixed h-full w-full left-0 top-0 z-0' />
        <div className='relative z-1 w-full min-h-screen'>
            <div className='bg-[#36393F] sm:rounded-md absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-[784px] w-full max-w-screen-sm h-screen sm:h-auto sm:max-w-[480px] lg:max-w-[784px] p-8 transition-all'>
                <div className='flex flex-row justify-between'>
                    <div className='lg:w-1/2 w-full'>
                        <div className='text-white text-center'>
                            <div className='mb-40 sm:hidden'>
                                <div className='cursor-pointer flex flex-row justify-center'>
                                    <img src="https://pnggrid.com/wp-content/uploads/2021/05/Black-and-white-Discord-Logo-1024x784.png" className='text-blue-600 w-12 mr-2' alt="Discord Logo" />
                                    <p className='font-ginto text-white text-2xl font-bold mt-1'>Discord</p>
                                </div>
                            </div>
                            <h2 className='text-2xl'>Welcome Back!</h2>
                            <p className='text-gray-400'>We're so excited to see you again!</p>
                        </div>
                        <div>
                            <div className='mt-6'>
                                <h5 className='text-sm leading-4 mb-2 text-gray-400'>EMAIL OR PHONE NUMBER</h5>
                                <div className='w-full'>
                                    <input type="text" className='bg-[#303339] pl-2 outline-slate-900 border-none outline-none outline-1 outline-offset-0 rounded-sm px-1 py-2 text-gray-300 focus:outline-[#00aff4] w-full transition-all' />
                                </div>
                            </div>
                            <div className='mb-2 mt-6'>
                                <h5 className='text-sm leading-4 mb-2 text-gray-400'>PASSWORD</h5>
                                <div className='w-full'>
                                    <input type="password" className='bg-[#303339] pl-2 outline-slate-900 border-none outline-none outline-1 outline-offset-0 rounded-sm px-1 py-2 text-gray-300 focus:outline-[#00aff4] w-full transition-all' />
                                </div>
                            </div>
                            <div className='text-sm text-[#00aff4]'>
                                <Link to='/forget-password'>Forget your password?</Link>
                            </div>
                            <Link to='/dashboard'><button className='bg-[#5865F2] border-none w-full text-white py-3 rounded-sm mt-4'>Login</button></Link>
                            <div className='text-gray-500 text-sm'>
                                <p>Need an account?<span className='text-[#00aff4] ml-1'><Link to='/create-account'>Register</Link> </span></p>
                            </div>
                        </div>
                    </div>
                    <div className='text-white text-center lg:w-1/2 p-6 hidden lg:block'>
                        <div className='flex justify-center mb-8 mt-[18px] relative'>
                            <div className='p-2 bg-white rounded-md relative'>
                                <img src={qrCode} alt="qrcode" className='w-[160px] h-auto' />
                                <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-white rounded-full overflow-hidden'>
                                    <img src={discordLogo} alt="discord logo" className='w-12' />
                                </div>
                            </div>
                        </div>
                        <h2 className='text-2xl font-semibold'>Log in with QR Code</h2>
                        <div className='text-gray-400 px-6 mt-2'>
                            <p>Scan this with the <strong>discord mobile app</strong> to log in instantly</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Login