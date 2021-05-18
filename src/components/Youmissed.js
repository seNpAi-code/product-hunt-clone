import React from 'react'
import Mighty from '../images/Mighty.jpg'
import triangle from '../images/triangle.svg'
import Butter from '../images/Butter.gif'
import FaceGenerator from '../images/FaceGenerator.gif'


const Youmissed = () => {
    return (
        <>
            <h2 className='flex flex-row text-f20 text-left text-gray-900 mb-2'>In case you missed it</h2>
            <div className='flex flex-row bg-white rounded shadow overflow-hidden sm:flex items-center mb-6'>
                <div className='flex w-full'>
                    <ul className='w-full flex flex-col grid grid-cols-none md:grid-cols-2 md:flex-row '>
                        <li class='group'>
                            <div className='flex pl-5 pr-24 pt-5 pb-5 relative border-b border-gray-200'>
                                <a href="javascript.void(0)" className='flex flex-col'>
                                <div className='absolute mt-1'>
                                    <img src={Mighty} alt="Mighty.jpg" />
                                </div>
                                <div className='ml-12 pl-2 w-44'>
                                    <h3 className='text-base font-bold text-gray-700'>Mighty</h3>
                                    <p className='text-f13  font-normal'>
                                    Make Chrome faster and use 10x less memory 
                                    </p>
                                    <div className='absolute top-25 right-40 pt-1 lg:mt-2 ml-1'>
                                        <div className='border border-gray-200 rounded hover:bg-gray-100 opacity-0 group-hover:opacity-100'>
                                            <a href="javascript.void(0)"  className='flex align-center items-center pl-2 pr-2 pt-1 pb-1'>
                                            <img src={triangle} alt="" />
                                            <span className='text-f13 font-semibold ml-2 block'>234</span>
                                            </a>  
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </div>
                        </li>
                        <li class='group'>
                            <div className='flex pl-5 pr-24 pt-5 pb-5 relative border-b border-gray-200'>
                                <a href="javascript.void(0)" className='flex flex-col'>
                                <div className='absolute mt-1'>
                                <img src={Butter} alt="Butter.gif"/>
                                </div>
                                <div className='ml-12 pl-2 '>
                                    <h3 className='text-base font-bold text-gray-700'>Butter</h3>
                                    <p className='text-f13  font-normal'>
                                    All-in-one tool for the smoothest virtual workshops
                                    </p>
                                    <div className='absolute top-25 right-40 pt-1 lg:mt-2'>
                                        <div className='border border-gray-200 rounded hover:bg-gray-100 opacity-0 group-hover:opacity-100'>
                                            <a href="javascript.void(0)"  className='flex align-center items-center pl-2 pr-2 pt-1 pb-1'>
                                            <img src={triangle} alt="" />
                                            <span className='text-f13 font-semibold ml-2 block'>104</span>
                                            </a>  
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </div>
                        </li>
                        <li class='group'>
                            <div className='flex pl-5 pr-24 pt-5 pb-5 relative border-b border-gray-200'>
                                <a href="javascript.void(0)" className='flex flex-col'>
                                <div className='absolute mt-1'>
                                <video class="styles_video__38i79" width="50" height="50" poster="https://ph-files.imgix.net/3429dc68-32df-4454-9f61-c926357c95a3.gif?auto=compress&amp;fm=webp&amp;codec=mozjpeg&amp;cs=strip&amp;w=50&amp;h=50&amp;fit=max&amp;frame=1&amp;dpr=2" loop="" playsinline=""><source src="https://ph-files.imgix.net/3429dc68-32df-4454-9f61-c926357c95a3.gif?fm=webm&amp;w=50&amp;h=50&amp;crop=max&amp;dpr=2" type="video/webm"/><source src="https://ph-files.imgix.net/3429dc68-32df-4454-9f61-c926357c95a3.gif?fm=mp4&amp;w=50&amp;h=50&amp;crop=max&amp;dpr=2" type="video/mp4"/></video>
                                </div>
                                <div className='ml-12 pl-2 '>
                                    <h3 className='text-base font-bold text-gray-700'>Jarvis by Conversion.ai</h3>
                                    <p className='text-f13  font-normal'>
                                    Write long form content like blog posts with AI
                                    </p>
                                    <div className='absolute top-25 right-40 pt-1 lg:mt-2'>
                                        <div className='border border-gray-200 rounded hover:bg-gray-100 opacity-0 group-hover:opacity-100'>
                                            <a href="javascript.void(0)"  className='flex align-center items-center pl-2 pr-2 pt-1 pb-1'>
                                            <img src={triangle} alt="" />
                                            <span className='text-f13 font-semibold ml-2 block'>196</span>
                                            </a>  
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </div>
                        </li>
                        <li class='group'>
                            <div className='flex pl-5 pr-24 pt-5 pb-5 relative border-b border-gray-200'>
                                <a href="javascript.void(0)" className='flex flex-col'>
                                <div className='absolute mt-1'>
                                    <img src={FaceGenerator} alt="FaceGenerator.gif"/>
                                </div>
                                <div className='ml-12 pl-2 '>
                                    <h3 className='text-base font-bold text-gray-700'>Face Generator</h3>
                                    <p className='text-f13  font-normal'>
                                    Generate unique AI-generated faces in real time
                                    </p>
                                    <div className='absolute top-25 right-40 pt-1 lg:mt-2'>
                                        <div className='border border-gray-200 rounded hover:bg-gray-100 opacity-0 group-hover:opacity-100'>
                                            <a href="javascript.void(0)"  className='flex align-center items-center pl-2 pr-2 pt-1 pb-1'>
                                            <img src={triangle} alt="" />
                                            <span className='text-f13 font-semibold ml-2 block'>45</span>
                                            </a>  
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </div>
                        </li>
                    </ul>
                    
                </div>
                
            </div>
        </>
    )
}

export default Youmissed
