import React from 'react'
import triangle from '../images/triangle.svg'
import Adyouneed from '../images/Adyouneed.gif'
import Scandi from '../images/Scandi.gif'
import Mailook from '../images/Mailook.gif'
import Microacquire from '../images/Microacquire.jpg'
import Cabana from '../images/Cabana.jpg'


const Yesterdaylist = () => {
    return (
        <>
        <h2 className='flex flex-row text-f20 text-left text-gray-900 mb-2'>Yesterday</h2>
        <div className='flex bg-white rounded shadow overflow-hidden sm:flex items-center mb-6'>
            <div className='flex w-full'>
                <ul className='w-full'>
                    <li>
                        <a href='javascript.void(0)' className='flex pl-5 pr-24 pt-5 pb-5 relative border-b border-gray-200 hover:bg-gray-100'>
                            <div>
                                <img src={Adyouneed} alt="Adyouneed.gif" />
                            </div>
                            <div className='ml-2'>
                                <h3 className='text-base font-bold text-gray-800'>ADYOUNEED</h3>
                                <p className='text-f13 font-normal '>
                                    Marketing platform to create and optimize ads
                                </p>
                                <div>
                                <a href='javascript.void(0)' className='flex flex-row items-center mt-3 border border-gray-200 rounded h-7 w-12 text-gray-600 justify-center bg-white hover:bg-gray-200'>
                                <svg width="12" height="11" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg"><path d="M2.012 7.832C1.21 7.052.727 6.045.727 4.946c0-2.48 2.463-4.491 5.5-4.491 3.038 0 5.5 2.01 5.5 4.491 0 2.48-2.462 4.492-5.5 4.492a6.562 6.562 0 01-2.13-.35c-1.07.62-3.166 1.44-3.166 1.44s.7-1.685 1.081-2.696z" fill-rule="evenodd" className='fill-current pl-2'></path></svg>
                                <p className='text-f12 ml-1 font-md'>106</p>
                                </a>
                                </div>
                            </div>
                            <div className='absolute top-25 right-40 border border-gray-200 rounded bg-white hover:bg-gray-100'>
                                <a href='javascript.void(0)' className='flex flex-col align-center pl-7 pr-6 pt-4 pb-4 inset-3'>
                                    <img src={triangle} alt="" className='w-4 justify-center'/>
                                    <span className='text-f13 font-semibold mt-1 block'>
                                        466
                                    </span>
                                </a>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='javascript.void(0)' className='flex pl-5 pr-24 pt-5 pb-5 relative border-b border-gray-200 hover:bg-gray-100'>
                            <div>
                                <img src={Scandi} alt="Scandi.gif" />
                            </div>
                            <div className='ml-2'>
                                <h3 className='text-base font-bold text-gray-800'>ScandiPWA</h3>
                                <p className='text-f13 font-normal '>
                                    React PWA to improve your e-commerce store experience
                                </p>
                                <div>
                                <a href='javascript.void(0)' className='flex flex-row items-center mt-3 border border-gray-200 rounded h-7 w-12 text-gray-600 justify-center bg-white hover:bg-gray-200'>
                                <svg width="12" height="11" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg"><path d="M2.012 7.832C1.21 7.052.727 6.045.727 4.946c0-2.48 2.463-4.491 5.5-4.491 3.038 0 5.5 2.01 5.5 4.491 0 2.48-2.462 4.492-5.5 4.492a6.562 6.562 0 01-2.13-.35c-1.07.62-3.166 1.44-3.166 1.44s.7-1.685 1.081-2.696z" fill-rule="evenodd" className='fill-current pl-2'></path></svg>
                                <p className='text-f12 ml-1 font-md'>59</p>
                                </a>
                                </div>
                            </div>
                            <div className='absolute top-25 right-40 border border-gray-200 rounded bg-white hover:bg-gray-100'>
                                <a href='javascript.void(0)' className='flex flex-col align-center pl-7 pr-6 pt-4 pb-4 inset-3'>
                                    <img src={triangle} alt="" className='w-4 justify-center'/>
                                    <span className='text-f13 font-semibold mt-1 block'>
                                        409
                                    </span>
                                </a>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='javascript.void(0)' className='flex pl-5 pr-24 pt-5 pb-5 relative border-b border-gray-200 hover:bg-gray-100'>
                            <div>
                                <img src={Mailook} alt="Mailook.gif" />
                            </div>
                            <div className='ml-2'>
                                <h3 className='text-base font-bold text-gray-800'>Mailook</h3>
                                <p className='text-f13 font-normal '>
                                    Identify & fix your email deliverability issues for free
                                </p>
                                <div>
                                <a href='javascript.void(0)' className='flex flex-row items-center mt-3 border border-gray-200 rounded h-7 w-12 text-gray-600 justify-center bg-white hover:bg-gray-200'>
                                <svg width="12" height="11" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg"><path d="M2.012 7.832C1.21 7.052.727 6.045.727 4.946c0-2.48 2.463-4.491 5.5-4.491 3.038 0 5.5 2.01 5.5 4.491 0 2.48-2.462 4.492-5.5 4.492a6.562 6.562 0 01-2.13-.35c-1.07.62-3.166 1.44-3.166 1.44s.7-1.685 1.081-2.696z" fill-rule="evenodd" className='fill-current pl-2'></path></svg>
                                <p className='text-f12 ml-1 font-md'>91</p>
                                </a>
                                </div>
                            </div>
                            <div className='absolute top-25 right-40 border border-gray-200 rounded bg-white hover:bg-gray-100'>
                                <a href='javascript.void(0)' className='flex flex-col align-center pl-7 pr-6 pt-4 pb-4 inset-3'>
                                    <img src={triangle} alt="" className='w-4 justify-center'/>
                                    <span className='text-f13 font-semibold mt-1 block'>
                                        340
                                    </span>
                                </a>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='javascript.void(0)' className='flex pl-5 pr-24 pt-5 pb-5 relative border-b border-gray-200 hover:bg-gray-100'>
                            <div>
                                <img src={Microacquire} alt="Microacquire.jpg" />
                            </div>
                            <div className='ml-2'>
                                <h3 className='text-base font-bold text-gray-800'>MicroAcquire</h3>
                                <p className='text-f13 font-normal '>
                                    A free and anonymous startup acquisition marketplace
                                </p>
                                <div>
                                <a href='javascript.void(0)' className='flex flex-row items-center mt-3 border border-gray-200 rounded h-7 w-12 text-gray-600 justify-center bg-white hover:bg-gray-200'>
                                <svg width="12" height="11" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg"><path d="M2.012 7.832C1.21 7.052.727 6.045.727 4.946c0-2.48 2.463-4.491 5.5-4.491 3.038 0 5.5 2.01 5.5 4.491 0 2.48-2.462 4.492-5.5 4.492a6.562 6.562 0 01-2.13-.35c-1.07.62-3.166 1.44-3.166 1.44s.7-1.685 1.081-2.696z" fill-rule="evenodd" className='fill-current pl-2'></path></svg>
                                <p className='text-f12 ml-1 font-md'>165</p>
                                </a>
                                </div>
                            </div>
                            <div className='absolute top-25 right-40 border border-gray-200 rounded bg-white hover:bg-gray-100'>
                                <a href='javascript.void(0)' className='flex flex-col align-center pl-7 pr-6 pt-4 pb-4 inset-3'>
                                    <img src={triangle} alt="" className='w-4 justify-center'/>
                                    <span className='text-f13 font-semibold mt-1 block'>
                                        303
                                    </span>
                                </a>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='javascript.void(0)' className='flex pl-5 pr-24 pt-5 pb-5 relative border-b border-gray-200 hover:bg-gray-100'>
                            <div>
                                <img src={Cabana} alt="Cabana.jpg" />
                            </div>
                            <div className='ml-2'>
                                <h3 className='text-base font-bold text-gray-800'>Cabana Health</h3>
                                <p className='text-f13 font-normal '>
                                    Easily sync mindfulness nutrition & fiteness data w/ friends
                                </p>
                                <div>
                                <a href='javascript.void(0)' className='flex flex-row items-center mt-3 border border-gray-200 rounded h-7 w-12 text-gray-600 justify-center bg-white hover:bg-gray-200'>
                                <svg width="12" height="11" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg"><path d="M2.012 7.832C1.21 7.052.727 6.045.727 4.946c0-2.48 2.463-4.491 5.5-4.491 3.038 0 5.5 2.01 5.5 4.491 0 2.48-2.462 4.492-5.5 4.492a6.562 6.562 0 01-2.13-.35c-1.07.62-3.166 1.44-3.166 1.44s.7-1.685 1.081-2.696z" fill-rule="evenodd" className='fill-current pl-2'></path></svg>
                                <p className='text-f12 ml-1 font-md'>74</p>
                                </a>
                                </div>
                            </div>
                            <div className='absolute top-25 right-40 border border-gray-200 rounded bg-white hover:bg-gray-100'>
                                <a href='javascript.void(0)' className='flex flex-col align-center pl-7 pr-6 pt-4 pb-4 inset-3'>
                                    <img src={triangle} alt="" className='w-4 justify-center'/>
                                    <span className='text-f13 font-semibold mt-1 block'>
                                        185
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

export default Yesterdaylist
