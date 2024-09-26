import React from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';


const Contact = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,

    }); // initialise with default settings

  }, [])

  const { darkMode, toggleDarkmode } = useDarkMode();
  return (
    <div className={`${darkMode ? 'dark:bg-black' : 'light bg-transparent'} pb-20`}>
      <section id='contact' className={`${darkMode ? 'dark bg-gray-800' : 'light bg-red-100'} lg:w-[95%] w-full h-fit rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36 py-20 gap-10`}>
        
      </section>

    </div>
  )
}

export default Contact