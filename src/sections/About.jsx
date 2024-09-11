import React, { useEffect } from 'react'
import aboutimg from '../assets/images/about.jpg'
import { useDarkMode } from '../components/DarkModeContext'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {

  useEffect(() => {
    AOS.init({ 
        offset : 200,
        duration: 1000,
        easing: 'easeOut',
        delay: 100,

    }); // initialise with default settings
  
}, [])
const { darkMode, toggleDarkmode } = useDarkMode();

  return (
    <section id='about' className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'}
    w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}>
      <div>
       <img data-aos="zoom-in" src={aboutimg} alt="about image" className='rounded-2xl lg:w-[500px] lg:h-[600px]' />
      </div>

      <div className=' flex flex-col justify-center items-start gap-8'>

        <h1 data-aos="zoom-in" className='text-red-500 dark:text-white font-bold ' >WHO WE ARE</h1>
        <h2 data-aos="zoom-in" data-aos-delay="200" className='text-black text-[40px] font-semibold
        leading-10 dark:text-white'>
          We are a leading real estate company specializing in Nairobi and the surrounding areas.</h2>

        <p data-aos="zoom-in" data-aos-delay="400" className='text-gray-600 dark:text-white
        text-xl text-justify'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolore 
          earum explicabo necessitatibus assumenda? Quibusdam provident praesentium necessitatibus
          non voluptatem, quam vero eveniet nesciunt ipsa, illo, tempore tenetur exercitationem quae?</p>

        <div className='flex flex-row justify-center items-center gap-4'>
          <button className='bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white
          text-lg p-4 text-white cursor-pointer transform hover:scale-110 transition-transform 
          duration-300 font-semibold py-2 px-8 rounded-xl'>LEARN MORE</button> 
        </div>

      </div>
     

      
    </section>
  )
}

export default About