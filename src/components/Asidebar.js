import React from 'react'
import LatestStory from '../images/LatestStory.jpg'
import Trrove from '../images/Trrove.jpg'
import Yought from '../images/Yought.jpg'
import DocsPlugin from '../images/DocsPlugin.jpg'
import Geneva from '../images/Geneva.jpeg'
import Fabric from '../images/Fabric.jpg'
import Newsletter from '../images/Newsletter.gif'
import Discussion1 from '../images/Discussion1.jpg'
import Discussion2 from '../images/Discussion2.jpg'
import Discussion3 from '../images/Discussion3.jpg'
import Triangle from '../images/triangle.svg'

const Asidebar = () => {
    return (
        <>
        <div className='invisible lg:visible'>
        <h2 className='flex flex-row font-semibold text-md text-left text-gray-900 mb-2 pt-2'>Latest Story</h2>
            <div className='flex flex-row bg-white rounded shadow overflow-hidden sm:flex items-center mb-4'>
                <a href="javascript.code(0)">
                <div className='text-f13 hover:underline py-3 px-3 text-gray-900'>
                Maker Story: How we built a service to help interns during the pandemic
                </div>
                </a>
                <div className='align-middle items-end'>
                    <img src={LatestStory} alt="LatestStory.jpg" className='h-30 w-40'/>
                </div>
            </div>
            <h2 className='flex flex-row text-md font-semibold text-left text-gray-900 mb-2'>Upcoming Products</h2>
            <div className='flex flex-col bg-white rounded shadow overflow-hidden sm:flex mb-4 shadow'>
                <div>
                    <div className='shadow-sm'>
                        <a href="javascript.code(0)" className='flex flex-row'>
                        <div>
                        <div className='text-f13 pt-4 pb-2 px-5 text-gray-900'>
                            Trrove
                        </div>
                        <div className='text-f13 pb-3 px-5 text-gray-500'>
                            Learn & build your knowledge with Trrove
                        </div>

                        </div>
                        <div className='py-5 pr-5 pl-5 align-middle items-end'>
                            <img src={Trrove} alt="Trrove.jpg" className='m-1 rounded'/>
                        </div>
                        </a>
                        <a href="javacript.void(0)" className='text-f13 flex flex-row pb-5 items-start red text-gray-500 hover:text-red-600'>
                            <div className='pt-1 pr-2 pl-5'>
                            <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" class="styles_icon__3fCyP"><path d="M5 5V1.002a1 1 0 112 0V5h3.998a1 1 0 110 2H7v3.998a1 1 0 11-2 0V7H1.002a1 1 0 110-2H5z" fill-rule="evenodd" className='fill-current'></path></svg>
                            </div>
                            <div>
                                FOLLOW (210)
                            </div>
                        </a>
                    </div>
                <div className='shadow-sm'>
                <a href="javascript.code(0)" className='flex flex-row justify-between'>
                    <div>
                    <div className='text-f13 pt-4 pb-2 px-5 text-gray-900'>
                        Yought
                    </div>
                    <div className='text-f13 pb-3 px-5 text-gray-500'>
                        Create better Suveys with AI               
                    </div>

                    </div>
                    <div className='py-5 pr-5 pl-5 align-middle items-end'>
                        <img src={Yought} alt="Yought.jpg" className=' rounded'/>
                    </div>
                </a>
                <a href="javacript.void(0)" className='text-f13 flex flex-row pb-5 items-start red text-gray-500 hover:text-red-600'>
                    <div className='pt-1 pr-2 pl-5'>
                    <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" class="styles_icon__3fCyP"><path d="M5 5V1.002a1 1 0 112 0V5h3.998a1 1 0 110 2H7v3.998a1 1 0 11-2 0V7H1.002a1 1 0 110-2H5z" fill-rule="evenodd" className='fill-current'></path></svg>
                    </div>
                    <div>
                        FOLLOW (321)
                    </div>
                </a>
                </div>
                <div>
                <a href="javascript.code(0)" className='flex flex-row'>
                    <div>
                    <div className='text-f13 pt-4 pb-2 px-5 text-gray-900'>
                        Icons8 plugin for Google Docs
                    </div>
                    <div className='text-f13 pb-3 pl-5 text-gray-500'>
                        Add icons, photos, and illustrations to Google docs for free
                    </div>

                    </div>
                    <div className='py-5 pr-5 pl-5 align-middle items-end'>
                        <img src={DocsPlugin} alt="DocsPlugin.jpg" className='m-3 pr-3 rounded'/>
                    </div>
                </a>
                <a href="javacript.void(0)" className='text-f13 flex flex-row items-start red text-gray-500 hover:text-red-600'>
                    <div className='pt-1 pr-2 pl-5'>
                    <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" class="styles_icon__3fCyP"><path d="M5 5V1.002a1 1 0 112 0V5h3.998a1 1 0 110 2H7v3.998a1 1 0 11-2 0V7H1.002a1 1 0 110-2H5z" fill-rule="evenodd" className='fill-current'></path></svg>
                    </div>
                    <div>
                        FOLLOW (28)
                    </div>
                </a>
                </div>
                <div className='text-red-700 text-f13 rounded border border-gray-200 hover:border-red-700 text-center m-5 leading-8 transition-colors duration-200 ease-in-out'>
                    <a href="javacript.void(0)">
                        VIEW ALL
                    </a>
                </div>
                </div> 
                
            </div>
            <h2 className='flex flex-row text-md font-semibold text-left text-gray-900 mb-2'>Hiring Now</h2>
            <div className='flex flex-col bg-white rounded shadow overflow-hidden sm:flex mb-4 shadow'>
                <div>
                    <div>
                        <a href="javascript.code(0)" className='flex flex-row'>
                        <div>
                        <div className='text-f13 pt-4 px-5 text-gray-900'>
                            Geneva
                        </div>
                        <div className='text-f13 pb-3 px-5 text-gray-500'>
                            Senior Product Manager <br />New York, NY
                        </div>

                        </div>
                        <div className='py-5 pr-5 pl-5 align-middle items-end'>
                            <img src={Geneva} alt="Geneva.jpeg" className='m-1 pl-16 rounded'/>
                        </div>
                        </a>
                    </div>
                    <div>
                        <a href="javascript.code(0)" className='flex flex-row'>
                        <div>
                        <div className='text-f13 pt-1 px-5 text-gray-900'>
                            Fabric
                        </div>
                        <div className='text-f13 pb-3 px-5 text-gray-500'>
                            Software Engineer <br />San Francisco, remote
                        </div>

                        </div>
                        <div className='pt-1 pr-5 pl-5 align-middle items-end pl-8'>
                            <img src={Fabric} alt="Geneva.jpeg" className='m-1 pl-16 rounded'/>
                        </div>
                        </a>
                    </div>
                    <div>
                        <a href="javascript.code(0)" className='flex flex-row'>
                        <div>
                        <div className='text-f13 pt-1 px-5 text-gray-900'>
                            Firstlight Media
                        </div>
                        <div className='text-f13 pb-3 px-5 text-gray-500'>
                            Solutions Engineer <br />Toranto Ontario, New York
                        </div>

                        </div>
                        </a>
                    </div>
               
                </div>
                <div className='text-red-700 text-f13 rounded border border-gray-200 hover:border-red-700 text-center mx-5 my-2 leading-8 transition-colors duration-200 ease-in-out'>
                    <a href="javacript.void(0)">
                        VIEW ALL JOBS
                    </a>
                </div>
                <div className='flex flex-row mx-5 mt-3 mb-5 text-f13'>
                    <div >
                        Hiring?
                    </div>
                    <a href='javascript.void(0)' className='pl-2 text-red-700 hover:underline'>
                        Post a job
                    </a>
                </div>
                </div> 
            <h2 className='flex flex-row text-md font-semibold text-left text-gray-900 mb-2'>Newsletter</h2>
            
            <a href='javascript.void(0)'>
                <div className='border-b border-gray-200'>
                    <img src={Newsletter} alt="Newsletter.gif" className='rounded-t w-full'/>
                    <div className='text-gray-900 text-5xl text-center py-4 bg-white shadow-sm'>11 ways to become a Figma Master</div>
                </div>
            </a>
            <div className='bg-white shadow rounded-b'>
                <div className='text-gray-900 font-bold px-6 pt-5 pb-2'>
                Get the best new products in your inbox, every day 👇
                </div>
                <div className='relative w-full mx-6'>
                <input className='rounded border border-gray-200 px-3 py-1 text-f13 outline-none leading-6 w-72' 
                type="email" placeholder='Your email' />
                </div>
                <div className='mx-6 my-2 pb-4'>
                <button className='primary text-f11 inline-flex text-white text-center items-center bg-orange rounded mt-1 mb-1 border mr-2 py-2 px-3 transition-colors duration-200 ease-in-out w-72'>
                    <span className='text-f13 text-center mx-auto'>SUBSCRIBE</span>
                </button>
                </div>
            </div>
            <h2 className='flex flex-row text-md font-semibold text-left text-gray-900 mt-5 mb-2'>Top Discussions</h2>
            <div className='bg-white rounded shadow'>
                <div className='shadow-sm'>
                <div className='p-5 flex flex-row justify-evenly'>
                <a href='javascript.void(0)' className='text-f13 text-gray-900 hover:underline'>
                    What's your master plan to get your first paying user on your current project?
                </a>
                <img src={Discussion1} alt="user1" className='rounded-full w-16'/>
                </div>
                <div className='flex flex-row'>
                <a href="javascript.void(0)">
                <div className='flex flex-row mx-5 mb-5 border border-white hover:bg-gray-300 rounded p-1 w-16'>
                    <img src={Triangle} alt="carrot" className='opacity-60 w-3 ml-2'/>
                    <div className='pl-2 mr-2 text-f12 text-gray-600'>
                        66
                    </div>
                </div>
                </a>
                <a href="javascript.void(0)">
                    <div className='text-gray-600 flex flex-row'>
                    <div className='mt-2'>
                    <svg width="12" height="11" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg" class="styles_commentIcon__2uXLP"><path d="M2.012 7.832C1.21 7.052.727 6.045.727 4.946c0-2.48 2.463-4.491 5.5-4.491 3.038 0 5.5 2.01 5.5 4.491 0 2.48-2.462 4.492-5.5 4.492a6.562 6.562 0 01-2.13-.35c-1.07.62-3.166 1.44-3.166 1.44s.7-1.685 1.081-2.696z" fill="#FFF" fill-rule="evenodd" className='fill-current mt-2'></path></svg>
                    </div>
                    <div className='pl-2 mr-2 text-f12 mt-1'>
                        40
                    </div>
                    </div>
                </a>
                <a href="javascript.void(0)">
                    <div className='text-f12 text-gray-600 mt-1 ml-6'>
                        Join discussion
                    </div>
                </a>
                </div>
                </div>

                <div className='shadow-sm'>
                <div className='p-5 flex flex-row justify-between'>
                <a href='javascript.void(0)' className='text-f13 text-gray-900 hover:underline'>
                    Monday blues - how can you beat <br/>them?
                </a>
                <img src={Discussion2} alt="user2" className='rounded-full w-10'/>
                </div>
                <div className='flex flex-row'>
                <a href="javascript.void(0)">
                <div className='flex flex-row mx-5 mb-5 border border-white hover:bg-gray-300 rounded p-1 w-16'>
                    <img src={Triangle} alt="carrot" className='opacity-60 w-3 ml-2'/>
                    <div className='pl-2 mr-2 text-f12 text-gray-600'>
                        17
                    </div>
                </div>
                </a>
                <a href="javascript.void(0)">
                    <div className='text-gray-600 flex flex-row'>
                    <div className='mt-2'>
                    <svg width="12" height="11" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg" class="styles_commentIcon__2uXLP"><path d="M2.012 7.832C1.21 7.052.727 6.045.727 4.946c0-2.48 2.463-4.491 5.5-4.491 3.038 0 5.5 2.01 5.5 4.491 0 2.48-2.462 4.492-5.5 4.492a6.562 6.562 0 01-2.13-.35c-1.07.62-3.166 1.44-3.166 1.44s.7-1.685 1.081-2.696z" fill="#FFF" fill-rule="evenodd" className='fill-current mt-2'></path></svg>
                    </div>
                    <div className='pl-2 mr-2 text-f12 mt-1'>
                        38
                    </div>
                    </div>
                </a>
                <a href="javascript.void(0)">
                    <div className='text-f12 text-gray-600 mt-1 ml-6'>
                        Join discussion
                    </div>
                </a>
                </div>
                </div>

                <div className='shadow-sm'>
                <div className='p-5 flex flex-row justify-between'>
                <a href='javascript.void(0)' className='text-f13 text-gray-900 hover:underline'>
                    What's the biggest mistake you've made <br/>as a founder?
                </a>
                <img src={Discussion3} alt="user3" className='rounded-full w-10'/>
                </div>
                <div className='flex flex-row'>
                <a href="javascript.void(0)">
                <div className='flex flex-row mx-5 mb-5 border border-white hover:bg-gray-300 rounded p-1 w-16'>
                    <img src={Triangle} alt="carrot" className='opacity-60 w-3 ml-2'/>
                    <div className='pl-2 mr-2 text-f12 text-gray-600'>
                        88
                    </div>
                </div>
                </a>
                <a href="javascript.void(0)">
                    <div className='text-gray-600 flex flex-row'>
                    <div className='mt-2'>
                    <svg width="12" height="11" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg" class="styles_commentIcon__2uXLP"><path d="M2.012 7.832C1.21 7.052.727 6.045.727 4.946c0-2.48 2.463-4.491 5.5-4.491 3.038 0 5.5 2.01 5.5 4.491 0 2.48-2.462 4.492-5.5 4.492a6.562 6.562 0 01-2.13-.35c-1.07.62-3.166 1.44-3.166 1.44s.7-1.685 1.081-2.696z" fill="#FFF" fill-rule="evenodd" className='fill-current mt-2'></path></svg>
                    </div>
                    <div className='pl-2 mr-2 text-f12 mt-1'>
                        64
                    </div>
                    </div>
                </a>
                <a href="javascript.void(0)">
                    <div className='text-f12 text-gray-600 mt-1 ml-6'>
                        Join discussion
                    </div>
                </a>
                </div>
                </div>
                <div className='text-f13 text-red-700 hover:underline mx-5 pb-5 text-center'>
                    <a href="javascript.void(0)">
                        VIEW MORE DISCUSSIONS
                    </a>
                </div>
            </div>
            <div className='text-f11 text-gray-700 py-5'>
            © 2021 PRODUCT HUNT
            </div>
            </div>           
        </>
    )
}

export default Asidebar
