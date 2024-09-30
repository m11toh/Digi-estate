import React from 'react'
import { FaInstagram, FaTwitter, FaYoutube, FaBuilding, FaFacebookF, FaMobile, FaFax, FaMoon, FaArrowUp, FaSun } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { IoMdMail } from 'react-icons/io'
import prop7 from '../assets/images/prop7.jpg'
import prop8 from '../assets/images/prop8.jpg'
import { useDarkMode } from './DarkModeContext'

const Footer = () => {

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <footer className={`${darkMode ? 'dark: bg-black' : 'light bg-gray-800'} w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10`}>
        <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className='text-white text-2xl font-semibold'>About Us </h1>
          <p className='text-slate-200 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque et ratione laudantium saepe non perferendis aspernatur consectetur? Dolor, exercitationem aut excepturi, necessitatibus veritatis eligendi nihil, fuga architecto eveniet autem sequi.</p>
          <div id='social-icons' className=' justify-start items-center gap-4 flex mt-4'>
            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
              <FaFacebookF className='size-6'/>
            </div>
            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
              <FaInstagram className='size-6'/>
            </div>
            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
              <FaYoutube className='size-6'/>
            </div>
            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
              <FaTwitter className='size-6'/>
            </div>
          </div>
          <h1 className='text-white mt-8 '>Copyright Real Estate, All Rights reserved </h1>
        </div>

        <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className='text-white text-2xl font-semibold'> Contact Us</h1>
          <div className='flex justify-center items-center gap-3'>
            <FaBuilding  className='size-5 text-white '/>
            <p className=' text-slate-200'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure </p>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <FaMobile  className='size-5 text-white '/>
            <p className=' text-slate-200'> + 984 2904 0290</p>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <FaFax  className='size-5 text-white '/>
            <p className=' text-slate-200'> 79363 93849 </p>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <IoMdMail  className='size-5 text-white '/>
            <p className=' text-slate-200'> realEst@gmail.com</p>
          </div>
        </div>

        <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className='text-white font-semibold text-2xl'>Latest Properties</h1>
          <div className=' flex justify-center items-center gap-4'>
              <img src={prop7} alt='' className='w-[120px] transform hover:scale-150 cursor-pointer transition-transform duration-300'/>
              <div>
                <h1 className='text-lg text-white '>Villa with amazing view</h1>
                <p className=' text-slate-400'>$287.89</p>
              </div>
          </div>
          <div className=' flex justify-center items-center gap-4'>
              <img src={prop8} alt='' className='w-[120px] transform hover:scale-150 cursor-pointer transition-transform duration-300'/>
              <div>
                <h1 className='text-lg text-white '>Smart view from the beach</h1>
                <p className=' text-slate-400'>$587.89</p>
              </div>
          </div>
        </div>
      </footer>

      <div id='icon-box' className='fixed bg-red-600 rounded-full hover:bg-black cursor-pointer lg:bottom-12 bottom-6 right-6 '>
        <Link to='hero' spy={true} offset={-100} smooth={true} duration={500}>
          <FaArrowUp className='size-8  text-white'/>
        </Link>
      </div>

      <div className=''>
        <button onClick={toggleDarkMode} className='flex rounded-full items-center p-4 bg-orange-500 fixed lg:top-52 right-6 top-6'>
          {darkMode ? <FaMoon size={25} className='text-black' /> : <FaSun size={25} className='text-black' />}
        </button>
      </div>
    </>
    

  )
}

export default Footer