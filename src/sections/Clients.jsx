import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import aboutimg from '../assets/images/about.jpg'
import { FaStar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { client } from '../components/export';

const Clients = () => {

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
    <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'}`} >
      <section id='testimonials' className='lg:w-[95%] w-full h-fit m-auto bg-cover bg-center rounded-xl justify-center flex flex-col items-start lg:px-20 px-6 py-20 gap-20'>
        <div className='flex flex-col justify-center items-start gap-4'>
          <h1 data-aos="zoom-in" className='text-red-500 dark:text-white font-bold'>OUR CLIENTS</h1>
          <h1 data-aos="zoom-in" className='text-black text-[40px] font-semibold leading-10 mt-4 dark:text-white '>What Our clients <br /> are Saying about us</h1>
        </div>
        <div id='clients-box' className='grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8 w-full'>
          {
            client.map((item, index)=>(
              <div data-aos='zoom-in' data-aos-delay='200' key={index} className='bg-white dark:bg-gray-900 hover:bg-red-100 cursor-pointer p-12 flex flex-col justify-center items-center gap-6 rounded-xl w-full'>

                <div className='flex justify-center    items-center w-full gap-4'>
                  <img src={item.image} alt='' className='w-[70px] transform hover:scale-150 transition-transform duration-300'/>

                  <div className='flex flex-col justify-center items-start gap-1'>
                    <h1 className='text-xl text-black font-semibold dark:text-white'> {item.name}</h1> 
                    <h1 className='text-slate-600 dark:text-white'>{item.text}</h1>
                  </div>

                </div>
                <p className='text-md text-justify text-slate-600 dark:text-white'>
                  {item.feedback}
                </p>
                <div className='flex justify-start items-start gap-2 w-full'>
                  <FaStar className='size-5 text-red-300'/>
                  <FaStar className='size-5 text-red-300'/>
                  <FaStar className='size-5 text-red-300'/>
                  <FaStar className='size-5 text-red-300'/>
                  <FaStar className='size-5 text-red-300'/>
                </div>

              </div>
            ))

            
          }

        </div>
      </section>
    </div>
  )
}

export default Clients