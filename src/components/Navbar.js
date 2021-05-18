import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-white fixed left-0 right-0 z-10 pb-5 px-5 pt-5 shadow'>
            <div className='container mx-auto flex justify-between md:flex-shrink-0'>
                <div className='flex'>
                    <a className='mr-5' href="javascript.void(0)">
                        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fill-rule="evenodd">
                                <path d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20" fill="#DA552F"></path>
                                <path d="M22.667 20H17v-6h5.667a3 3 0 010 6m0-10H13v20h4v-6h5.667a7 7 0 100-14" fill="#FFF"></path>
                            </g>
                        </svg>
                    </a>
                    <div className='relative w-full'>
                        <input className='rounded border border-white px-3 py-1 text-f13 pl-10 outline-none leading-8 w-48 md:w-80 transition-colors duration-200 ease-in-out bg-gray-100 focus:bg-white focus:border-red-500 md:scale-0' 
                        type="text" placeholder='Search Product Hunt' 
                        onFocus={(e) => e.target.placeholder = 'Discover your next favorite thing'}
                        onBlur={(e) => e.target.placeholder = 'Search Product Hunt'}/>
                        <div className='absolute inset-15'>
                            <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" class="styles_searchIcon__1g65n">
                                <path d="M9.383 10.347a5.796 5.796 0 11.965-.964L15 14.036l-.964.964-4.653-4.653zm-3.588-.12a4.432 4.432 0 100-8.863 4.432 4.432 0 000 8.863z" fill="#BBB" fill-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                    <nav className='flex items-center py-1 pl-5 text-base'>
                        <a href="javascript.void(0)" className='mr-0 md:mr-5 text-base text-gray-500 hover:text-gray-700 w-0 lg:w-max invisible lg:visible'>Discussions</a>
                        <a href="javascript.void(0)" className='mr-0 md:mr-5 text-base text-gray-500 hover:text-gray-700 w-0 lg:w-max invisible lg:visible '>Deals</a>
                        <a href="javascript.void(0)" className='mr-0 md:mr-5 text-base text-gray-500 hover:text-gray-700 w-0 lg:w-max invisible lg:visible '>Jobs</a>
                        <a href="javascript.void(0)" className='mr-0 md:mr-5 text-base text-gray-500 hover:text-gray-700 w-0 lg:w-max invisible lg:visible '>Ship</a>
                        <a href="#" className='mr-0 md:mr-5 text-base py-3 text-gray-500 hover:text-gray-800' id='dropdown-btn'>
                        <svg width="20" height="4" viewBox="0 0 20 4" xmlns="http://www.w3.org/2000/svg"><path d="M2 4A2 2 0 102.001.001 2 2 0 002 4zm8 0a2 2 0 10.001-3.999A2 2 0 0010 4zm8 0a2 2 0 10.001-3.999A2 2 0 0018 4z" fill-rule="evenodd" className='fill-current'></path></svg>
                        </a>
                             
                    </nav>
                </div>
                <div className='flex pt-0'>
                    <button className='text-f11 inline-flex items-center bg-white border border-gray-200 mr-2 py-2 px-3 hover:bg-gray-200 rounded mt-1 mb-1 transition-colors duration-200 ease-in-out'>
                        <span className='f13'>LOG IN</span>
                    </button>
                    <button className='primary text-f11 inline-flex text-white items-center bg-orange rounded mt-1 mb-1 border mr-2 py-2 px-3 transition-colors duration-200 ease-in-out'>
                        <span className='f13'>SIGN UP</span>
                    </button>
                </div>
            </div>
            <div className='bg-transparent hidden flex-col rounded mt-1 text-f12 text-center items-center' id='dropdown'>
               <a href="javascript.void(0)" className='px-2 py-1 hover:underline lg:hidden'>DISCUSSIONS</a>
               <a href="javascript.void(0)" className='px-2 py-1 hover:underline lg:hidden'>DEALS</a>
               <a href="javascript.void(0)" className='px-2 py-1 hover:underline lg:hidden'>JOBS</a>
               <a href="javascript.void(0)" className='px-2 py-1 hover:underline'>COLLECTIONS</a>
               <a href="javascript.void(0)" className='px-2 py-1 hover:underline'>POST A JOB</a>
               <a href="javascript.void(0)" className='px-2 py-1 hover:underline'>ABOUT</a>
            </div> 
        </div>
        
    )
}

window.addEventListener('DOMContentLoaded', () => {
  const dropdownBtn = document.querySelector('#dropdown-btn')
  const dropdown = document.querySelector('#dropdown')

  dropdownBtn.addEventListener('click', () => {
    if(dropdown.classList.contains('hidden')){
      dropdown.classList.remove('hidden');
      dropdown.classList.add('flex');
    }
    else{
      dropdown.classList.remove('flex');
      dropdown.classList.add('hidden');
    }
  })
})

export default Navbar

