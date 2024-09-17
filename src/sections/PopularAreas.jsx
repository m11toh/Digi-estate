import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import area1 from '../assets/images/area1.jpg'
import area2 from '../assets/images/area2.jpg'
import area3 from '../assets/images/area3.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'



const PopularAreas = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 100,

    }); // initialise with default settings

  }, [])

  const { darkMode, toggleDarkmode } = useDarkMode();


  return (
    <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'}`}>
      <section className={`${darkMode ? 'dark bg-gray-800' : 'light bg-red-100'} lg:w-[90%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-center lg:px-20 px-6 py-20 gap-20`}>
        <div id='top' className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8'> 

        </div>
        <div>
          <img data-aos="fade-in" src={area1} alt="area1" className='rounded-xl' />
        </div>


      </section>

    </div>
  )
}

export default PopularAreas