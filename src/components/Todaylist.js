import React from 'react'
import Figmaster from '../images/Figmaster.jpg'
import triangle from '../images/triangle.svg'
import Goodmind from '../images/Goodmind.jpg'
import Doppler from '../images/Doppler.jpg'
import Chatbot from '../images/Chatbot.gif'
import Vidds from '../images/Vidds.gif'
import Dovetale from '../images/Dovetale.jpg'
import ReactBS5 from '../images/ReactBS5.gif'
import Presence from '../images/Presence.jpeg'
import Icebreaker from '../images/Icebreaker.gif'
import Nucleo from '../images/Nucleo.jpeg'

const Todaylist = () => {
    return (
        <>
        <h2 className='flex flex-row text-f20 text-left text-gray-900 mb-2'>Today</h2>
        <div className='flex bg-white rounded shadow overflow-hidden sm:flex items-center mb-6'>
            <div className='flex w-full'>
                <ul className='w-full'>
                    <li>
                        <a href='javascript.void(0)' className='flex pl-5 pr-24 pt-5 pb-5 relative border-b border-gray-200 hover:bg-gray-100'>
                            <div>
                                <img src={Figmaster} alt="Figmaster.jpg" />
                            </div>
                            <div className='ml-2'>
                                <h3 className='text-base font-bold text-gray-800'>Figmaster</h3>
                                <p className='text-f13 font-normal '>
                                    Build you design system by doing exercises in Figma
                                </p>
                                <div>
                                <a href='javascript.void(0)' className='flex flex-row items-center mt-3 border border-gray-200 rounded h-7 w-12 text-gray-600 justify-center bg-white hover:bg-gray-200'>
                                <svg width="12" height="11" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg"><path d="M2.012 7.832C1.21 7.052.727 6.045.727 4.946c0-2.48 2.463-4.491 5.5-4.491 3.038 0 5.5 2.01 5.5 4.491 0 2.48-2.462 4.492-5.5 4.492a6.562 6.562 0 01-2.13-.35c-1.07.62-3.166 1.44-3.166 1.44s.7-1.685 1.081-2.696z" fill-rule="evenodd" className='fill-current pl-2'></path></svg>
                                <p className='text-f12 ml-1 font-md'>78</p>
                                </a>
                                </div>
                            </div>
                            <div className='absolute top-25 right-40 border border-gray-200 rounded bg-white hover:bg-gray-100'>
                                <a href='javascript.void(0)' className='flex flex-col align-center pl-7 pr-6 pt-4 pb-4 inset-3'>
                                    <img src={triangle} alt="" className='w-4 justify-center'/>
                                    <span className='text-f13 font-semibold mt-1 block'>
                                        412
                                    </span>
                                </a>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='javascript.void(0)' className='flex pl-5 pr-24 pt-5 pb-5 relative border-b border-gray-200 hover:bg-gray-100'>
                            <div>
                                <img src={Goodmind} alt="Goodmind.jpg" />
                            </div>
                            <div className='ml-2'>
                                <h3 className='text-base font-bold text-gray-800'>Goodmind</h3>
                                <p className='text-f13 font-normal '>
                                    AI-powered assessments & stigma-free counselling sessions
                                </p>
                                <div>
                                <a href='javascript.void(0)' className='flex flex-row items-center mt-3 border border-gray-200 rounded h-7 w-12 text-gray-600 justify-center bg-white hover:bg-gray-200'>
                                <svg width="12" height="11" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg"><path d="M2.012 7.832C1.21 7.052.727 6.045.727 4.946c0-2.48 2.463-4.491 5.5-4.491 3.038 0 5.5 2.01 5.5 4.491 0 2.48-2.462 4.492-5.5 4.492a6.562 6.562 0 01-2.13-.35c-1.07.62-3.166 1.44-3.166 1.44s.7-1.685 1.081-2.696z" fill-rule="evenodd" className='fill-current pl-2'></path></svg>
                                <p className='text-f12 ml-1 font-md'>64</p>
                                </a>
                                </div>
                            </div>
                            <div className='absolute top-25 right-40 border border-gray-200 rounded bg-white hover:bg-gray-100'>
                                <a href='javascript.void(0)' className='flex flex-col align-center pl-7 pr-6 pt-4 pb-4 inset-3'>
                                    <img src={triangle} alt="" className='w-4 justify-center'/>
                                    <span className='text-f13 font-semibold mt-1 block'>
                                        308
                                    </span>
                                </a>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='javascript.void(0)' className='flex pl-5 pr-24 pt-5 pb-5 relative border-b border-gray-200 hover:bg-gray-100'>
                            <div>
                                <img src={Doppler} alt="Doppler.jpg" />
                            </div>
                            <div className='ml-2'>
                                <h3 className='text-base font-bold text-gray-800'>Doppler</h3>
                                <p className='text-f13 font-normal '>
                                    The easiest way to supercharge developer productivity
                                </p>
                                <div>
                                <a href='javascript.void(0)' className='flex flex-row items-center mt-3 border border-gray-200 rounded h-7 w-12 text-gray-600 justify-center bg-white hover:bg-gray-200'>
                                <svg width="12" height="11" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg"><path d="M2.012 7.832C1.21 7.052.727 6.045.727 4.946c0-2.48 2.463-4.491 5.5-4.491 3.038 0 5.5 2.01 5.5 4.491 0 2.48-2.462 4.492-5.5 4.492a6.562 6.562 0 01-2.13-.35c-1.07.62-3.166 1.44-3.166 1.44s.7-1.685 1.081-2.696z" fill-rule="evenodd" className='fill-current pl-2'></path></svg>
                                <p className='text-f12 ml-1 font-md'>67</p>
                                </a>
                                </div>
                            </div>
                            <div className='absolute top-25 right-40 border border-gray-200 rounded bg-white hover:bg-gray-100'>
                                <a href='javascript.void(0)' className='flex flex-col align-center pl-7 pr-6 pt-4 pb-4 inset-3'>
                                    <img src={triangle} alt="" className='w-4 justify-center'/>
                                    <span className='text-f13 font-semibold mt-1 block'>
                                        657
                                    </span>
                                </a>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='javascript.void(0)' className='flex pl-5 pr-24 pt-5 pb-5 relative border-b border-gray-200 hover:bg-gray-100'>
                            <div>
                                <img src={Chatbot} alt="Chatbot.gif" />
                            </div>
                            <div className='ml-2'>
                                <h3 className='text-base font-bold text-gray-800'>Chatbot in Notion</h3>
                                <p className='text-f13 font-normal '>
                                    Embed a chatbot in your Notion page
                                </p>
                                <div>
                                <a href='javascript.void(0)' className='flex flex-row items-center mt-3 border border-gray-200 rounded h-7 w-12 text-gray-600 justify-center bg-white hover:bg-gray-200'>
                                <svg width="12" height="11" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg"><path d="M2.012 7.832C1.21 7.052.727 6.045.727 4.946c0-2.48 2.463-4.491 5.5-4.491 3.038 0 5.5 2.01 5.5 4.491 0 2.48-2.462 4.492-5.5 4.492a6.562 6.562 0 01-2.13-.35c-1.07.62-3.166 1.44-3.166 1.44s.7-1.685 1.081-2.696z" fill-rule="evenodd" className='fill-current pl-2'></path></svg>
                                <p className='text-f12 ml-1 font-md'>56</p>
                                </a>
                                </div>
                            </div>
                            <div className='absolute top-25 right-40 border border-gray-200 rounded bg-white hover:bg-gray-100'>
                                <a href='javascript.void(0)' className='flex flex-col align-center pl-7 pr-6 pt-4 pb-4 inset-3'>
                                    <img src={triangle} alt="" className='w-4 justify-center'/>
                                    <span className='text-f13 font-semibold mt-1 block'>
                                        200
                                    </span>
                                </a>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='javascript.void(0)' className='flex pl-5 pr-24 pt-5 pb-5 relative border-b border-gray-200 hover:bg-gray-100'>
                            <div>
                                <img src={Vidds} alt="Vidds.gif" />
                            </div>
                            <div className='ml-2'>
                                <h3 className='text-base font-bold text-gray-800'>Vidds</h3>
                                <p className='text-f13 font-normal '>
                                    Fast and easy template-based video creation in the browser
                                </p>
                                <div>
                                <a href='javascript.void(0)' className='flex flex-row items-center mt-3 border border-gray-200 rounded h-7 w-12 text-gray-600 justify-center bg-white hover:bg-gray-200'>
                                <svg width="12" height="11" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg"><path d="M2.012 7.832C1.21 7.052.727 6.045.727 4.946c0-2.48 2.463-4.491 5.5-4.491 3.038 0 5.5 2.01 5.5 4.491 0 2.48-2.462 4.492-5.5 4.492a6.562 6.562 0 01-2.13-.35c-1.07.62-3.166 1.44-3.166 1.44s.7-1.685 1.081-2.696z" fill-rule="evenodd" className='fill-current pl-2'></path></svg>
                                <p className='text-f12 ml-1 font-md'>80</p>
                                </a>
                                </div>
                            </div>
                            <div className='absolute top-25 right-40 border border-gray-200 rounded bg-white hover:bg-gray-100'>
                                <a href='javascript.void(0)' className='flex flex-col align-center pl-7 pr-6 pt-4 pb-4 inset-3'>
                                    <img src={triangle} alt="" className='w-4 justify-center'/>
                                    <span className='text-f13 font-semibold mt-1 block'>
                                        195
                                    </span>
                                </a>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='javascript.void(0)' className='flex pl-5 pr-24 pt-5 pb-5 relative border-b border-gray-200 hover:bg-gray-100'>
                            <div>
                                <img src={Dovetale} alt="Dovetale.jpg" />
                            </div>
                            <div className='ml-2'>
                                <h3 className='text-base font-bold text-gray-800'>Dovetale for Shopify</h3>
                                <p className='text-f13 font-normal '>
                                    Influencer market starts with community
                                </p>
                                <div>
                                <a href='javascript.void(0)' className='flex flex-row items-center mt-3 border border-gray-200 rounded h-7 w-12 text-gray-600 justify-center bg-white hover:bg-gray-200'>
                                <svg width="12" height="11" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg"><path d="M2.012 7.832C1.21 7.052.727 6.045.727 4.946c0-2.48 2.463-4.491 5.5-4.491 3.038 0 5.5 2.01 5.5 4.491 0 2.48-2.462 4.492-5.5 4.492a6.562 6.562 0 01-2.13-.35c-1.07.62-3.166 1.44-3.166 1.44s.7-1.685 1.081-2.696z" fill-rule="evenodd" className='fill-current pl-2'></path></svg>
                                <p className='text-f12 ml-1 font-md'>13</p>
                                </a>
                                </div>
                            </div>
                            <div className='absolute top-25 right-40 border border-gray-200 rounded bg-white hover:bg-gray-100'>
                                <a href='javascript.void(0)' className='flex flex-col align-center pl-7 pr-6 pt-4 pb-4 inset-3'>
                                    <img src={triangle} alt="" className='w-4 justify-center'/>
                                    <span className='text-f13 font-semibold mt-1 block'>
                                        136
                                    </span>
                                </a>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='javascript.void(0)' className='flex pl-5 pr-24 pt-5 pb-5 relative border-b border-gray-200 hover:bg-gray-100'>
                            <div>
                                <img src={ReactBS5} alt="ReactBS5.gif" />
                            </div>
                            <div className='ml-2'>
                                <h3 className='text-base font-bold text-gray-800'>React Bootstrap 5</h3>
                                <p className='text-f13 font-normal '>
                                    700+ UI components & templates for Bootstrap 5 and React 17
                                </p>
                                <div>
                                <a href='javascript.void(0)' className='flex flex-row items-center mt-3 border border-gray-200 rounded h-7 w-12 text-gray-600 justify-center bg-white hover:bg-gray-200'>
                                <svg width="12" height="11" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg"><path d="M2.012 7.832C1.21 7.052.727 6.045.727 4.946c0-2.48 2.463-4.491 5.5-4.491 3.038 0 5.5 2.01 5.5 4.491 0 2.48-2.462 4.492-5.5 4.492a6.562 6.562 0 01-2.13-.35c-1.07.62-3.166 1.44-3.166 1.44s.7-1.685 1.081-2.696z" fill-rule="evenodd" className='fill-current pl-2'></path></svg>
                                <p className='text-f12 ml-1 font-md'>64</p>
                                </a>
                                </div>
                            </div>
                            <div className='absolute top-25 right-40 border border-gray-200 rounded bg-white hover:bg-gray-100'>
                                <a href='javascript.void(0)' className='flex flex-col align-center pl-7 pr-6 pt-4 pb-4 inset-3'>
                                    <img src={triangle} alt="" className='w-4 justify-center'/>
                                    <span className='text-f13 font-semibold mt-1 block'>
                                        158
                                    </span>
                                </a>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='javascript.void(0)' className='flex pl-5 pr-24 pt-5 pb-5 relative border-b border-gray-200 hover:bg-gray-100'>
                            <div>
                                <img src={Presence} alt="Presence.jpg" />
                            </div>
                            <div className='ml-2'>
                                <h3 className='text-base font-bold text-gray-800'>Presence</h3>
                                <p className='text-f13 font-normal '>
                                    Family friendly digital privacy app for peace of mind online
                                </p>
                                <div>
                                <a href='javascript.void(0)' className='flex flex-row items-center mt-3 border border-gray-200 rounded h-7 w-12 text-gray-600 justify-center bg-white hover:bg-gray-200'>
                                <svg width="12" height="11" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg"><path d="M2.012 7.832C1.21 7.052.727 6.045.727 4.946c0-2.48 2.463-4.491 5.5-4.491 3.038 0 5.5 2.01 5.5 4.491 0 2.48-2.462 4.492-5.5 4.492a6.562 6.562 0 01-2.13-.35c-1.07.62-3.166 1.44-3.166 1.44s.7-1.685 1.081-2.696z" fill-rule="evenodd" className='fill-current pl-2'></path></svg>
                                <p className='text-f12 ml-1 font-md'>6</p>
                                </a>
                                </div>
                            </div>
                            <div className='absolute top-25 right-40 border border-gray-200 rounded bg-white hover:bg-gray-100'>
                                <a href='javascript.void(0)' className='flex flex-col align-center pl-7 pr-6 pt-4 pb-4 inset-3'>
                                    <img src={triangle} alt="" className='w-4 justify-center'/>
                                    <span className='text-f13 font-semibold mt-1 block'>
                                        131
                                    </span>
                                </a>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='javascript.void(0)' className='flex pl-5 pr-24 pt-5 pb-5 relative border-b border-gray-200 hover:bg-gray-100'>
                            <div>
                                <img src={Icebreaker} alt="Icebreaker.gif" />
                            </div>
                            <div className='ml-2'>
                                <h3 className='text-base font-bold text-gray-800'>Icebreaker Zoom backgrounds for standups</h3>
                                <p className='text-f13 font-normal '>
                                    Lols, hmms and a whole lot of banter with this 30-pack
                                </p>
                                <div>
                                <a href='javascript.void(0)' className='flex flex-row items-center mt-3 border border-gray-200 rounded h-7 w-12 text-gray-600 justify-center bg-white hover:bg-gray-200'>
                                <svg width="12" height="11" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg"><path d="M2.012 7.832C1.21 7.052.727 6.045.727 4.946c0-2.48 2.463-4.491 5.5-4.491 3.038 0 5.5 2.01 5.5 4.491 0 2.48-2.462 4.492-5.5 4.492a6.562 6.562 0 01-2.13-.35c-1.07.62-3.166 1.44-3.166 1.44s.7-1.685 1.081-2.696z" fill-rule="evenodd" className='fill-current pl-2'></path></svg>
                                <p className='text-f12 ml-1 font-md'>36</p>
                                </a>
                                </div>
                            </div>
                            <div className='absolute top-25 right-40 border border-gray-200 rounded bg-white hover:bg-gray-100'>
                                <a href='javascript.void(0)' className='flex flex-col align-center pl-7 pr-6 pt-4 pb-4 inset-3'>
                                    <img src={triangle} alt="" className='w-4 justify-center'/>
                                    <span className='text-f13 font-semibold mt-1 block'>
                                        129
                                    </span>
                                </a>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='javascript.void(0)' className='flex pl-5 pr-24 pt-5 pb-5 relative border-b border-gray-200 hover:bg-gray-100'>
                            <div>
                                <img src={Nucleo} alt="Nucleo.jpg" />
                            </div>
                            <div className='ml-2'>
                                <h3 className='text-base font-bold text-gray-800'>Nucleo</h3>
                                <p className='text-f13 font-normal '>
                                    Icon manager for Mac and Windows
                                </p>
                                <div>
                                <a href='javascript.void(0)' className='flex flex-row items-center mt-3 border border-gray-200 rounded h-7 w-12 text-gray-600 justify-center bg-white hover:bg-gray-200'>
                                <svg width="12" height="11" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg"><path d="M2.012 7.832C1.21 7.052.727 6.045.727 4.946c0-2.48 2.463-4.491 5.5-4.491 3.038 0 5.5 2.01 5.5 4.491 0 2.48-2.462 4.492-5.5 4.492a6.562 6.562 0 01-2.13-.35c-1.07.62-3.166 1.44-3.166 1.44s.7-1.685 1.081-2.696z" fill-rule="evenodd" className='fill-current pl-2'></path></svg>
                                <p className='text-f12 ml-1 font-md'>23</p>
                                </a>
                                </div>
                            </div>
                            <div className='absolute top-25 right-40 border border-gray-200 rounded bg-white hover:bg-gray-100'>
                                <a href='javascript.void(0)' className='flex flex-col align-center pl-7 pr-6 pt-4 pb-4 inset-3'>
                                    <img src={triangle} alt="" className='w-4 justify-center'/>
                                    <span className='text-f13 font-semibold mt-1 block'>
                                        110
                                    </span>
                                </a>
                            </div>
                        </a>
                    </li>
                   
                </ul>
            </div>
        </div>
        </>
    )
}

export default Todaylist
