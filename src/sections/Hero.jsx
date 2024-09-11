import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import heroimg from '../assets/images/hero1.webp'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { BiZoomIn } from 'react-icons/bi';

const Hero = () => {

    useEffect (() => {
        AOS.init({ 
            offset : 200,
            duration: 1000,
            easing: 'easeOut',
            delay: 100,

        }); // initialise with default settings
      
    }, [])
    const { darkMode, toggleDarkmode } = useDarkMode();
  return (
    <>
        <div className={`${darkMode ? 'dark bg-black' : 'light bg-white'}`}>
            <section id= 'hero' className='w-[95%] h-[600px] m-auto bg-cover bg-center 
            rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7
             z-20' style={{ backgroundImage: `url(${heroimg})` }} >
                <h1 data-aos= "zoom-in" className="text-6xl text-white font-semibold lg:pr-[500px]
                  pr-0 lg:leading-[70px] leading-[60px] ">
                    Find your next home in Nairobi
                </h1>
                <p data-aos="zoom-in" className='text-white text-xl lg:pr-[500px] pr-0'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium fugiat laborum repellat iure sed dolores 
                    maiores in, temporibus dignissimos, commodi, nulla atque!
                    Labore eos sapiente et rerum
                    maiores excepturi laboriosam?
                </p>
            </section>
        </div>

        <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} z-10`}>
            <div data-aos= "zoom-in" id= 'form' className={`${darkMode ? 'dark bg-gray-800'
                 : 'light bg-white'} lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1
                 justify-center items-center gap-6 p-8 rounded-xl -mt-14`}>
                    <div classname= 'w-full'>
                        <h1 className='text-black font-semibold dark:text-white'>LOCATION</h1>
                        <input type='text' placeholder='Enter address, state, city or pincode'
                        className='bg-white p-2 w-full mt-2 border-b-[1px] border-[1px] border-[#c9c7c1]'/>
                    </div>

                    <div className='w-full'>
                        <h1 className='text-black font-semibold dark:text-white'>TYPE</h1>
                        <select name='selectOption' id ='selectOption' className='bg-whitep-2 border-b-[1px] 
                        w-full mt-2 border-[#c9c7c1] text-gray-500 text-md'>
                            <option value='' disabled selected>Selected Property</option>
                            <option value='option1'>Rentals</option>
                            <option value='option2'>Sales</option>
                            <option value='option3'>Commercial</option>
                        </select>
                    </div>

                    <div className='w-full'>
                        <h1 className='text-black font-semibold dark:text-white'>Category</h1>
                        <select name='selectOption' id ='selectOption' className='bg-whitep-2 border-b-[1px] 
                        w-full mt-2 border-[#c9c7c1] text-gray-500 text-md'>
                            <option value='' disabled selected>Property category</option>
                            <option value='option1'>Apartments</option>
                            <option value='option2'>Duples</option>
                            <option value='option3'>Condos</option>
                        </select>
                    </div>

                    <div className='w-full'>
                        <button className='bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white
                        dark:hover:text-black text-lg p-4 w-full text-white font-semibold rounded-xl 
                        cursor-pointer hover:scale-110 transition-transform duration-300' >Submit</button>
                    </div>

            </div>

        </div>
    </>


    
  )
}

export default Hero