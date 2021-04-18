import React from 'react'
import Card from 'src/components/Card/Card'
import logo from '../../assets/logo.svg'
import apple from '../../assets/apple-original.svg'
import google from '../../assets/google-original.svg'
import facebook from '../../assets/facebook-original.svg'
import './login.css'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div className="flex items-center justify-center h-full text-gray-600">
            <div className="login-container">
                <Card padding='px-5 pt-5 sm:px-8 pt-8 pb-3.5'>
                    <div className='flex flex-col justify-center items-center relative'>
                        <div className='mb-10 flex flex-col items-center justify-center'>
                            <img src={logo} alt="logo" className=''/>
                            <p className="text-lg text-gray-600">Log in to your account</p>
                        </div>
                        <div className='w-full text-left'>
                            <p className='mb-1 text-sm'>Email Address</p>
                            <input type="text" name="email" id="email" className='w-full rounded-md border-gray-200 shadow-md py-1.5 mb-5 text-sm' />
                            <p className='mt-2 mb-1 text-sm'>Password</p>
                            <input type="password" name="passowrd" id="password" className='w-full rounded-md border-gray-200 shadow-md py-1.5 text-sm'/>
                            <div className='flex justify-between text-xs sm:text-sm mt-2'>

                                <div className='inline-flex items-center'>
                                    <input type="checkbox" className='mr-2 rounded text-green-400 border-gray-200 shadow-md' />
                                    <span>Remember me?</span>
                                </div>
                                <p className='text-green-500 cursor-pointer hover:underline'>Forgot your Password?</p>
                            </div>
                            <button type='submit' className='w-full mt-6 bg-green-100 text-green-800 py-2 rounded-md shadow-md'>Login</button>

                            <div className="mt-6 mb-4">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div className="relative flex justify-center">
                                        <span className="px-4 bg-white text-gray-500">OR</span>
                                    </div>
                                </div>
                            </div>
                            <div className='space-y-3.5'>
                                <button type='button' className='w-full py-2 rounded-md shadow-md relative border text-center text-sm border-gray-200'>
                                    <img src={google} alt="Google Logo" className="w-5 h-5 absolute inset-0 my-auto ml-4"/>
                                    Login with Google
                                </button>
                                <button type='button' className='w-full py-2 rounded-md shadow-md relative border text-center text-sm border-gray-200'>
                                    <img src={facebook} alt="Facebook Logo" className="w-5 h-5 absolute inset-0 my-auto ml-4"/>
                                    Login with Facebook
                                </button>
                                <button type='button' className='w-full py-2 rounded-md shadow-md relative border text-center text-sm border-gray-200'>
                                    <img src={apple} alt="Apple Logo" className="w-5 h-5 absolute inset-0 my-auto ml-4"/>
                                    Login with Apple
                                </button>
                            </div>

                            <p className='text-xs text-center mt-12'>Don't have an account? <Link to={"/register"} className='text-green-500 cursor-pointer hover:underline ml-1'>Sign up</Link></p>
                        </div>
                        
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Login


