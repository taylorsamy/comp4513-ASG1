import React from 'react';

import Typed from 'react-typed';
import Navbar from './Navbar';


const Home = (props) => {
    
    return (

        <div className="w-full h-[100vh] bg-heroIMG bg-cover">
            
            <Navbar />
            
            <div className='relative w-full mx-auto grid md:grid-cols-2 min-h-[calc(100vh-70px)]'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex flex-row md:pl-5'>
                        <p className='md:text-5xl sm:text-4xl text-xl font-bold'>We have </p>
                        <Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-2 pl-2'
                            strings={['Romance', 'Comedy', 'Horror']}
                            typeSpeed={120}
                            backSpeed={140}
                            loop />
                    </div>
                    <p className='md:text-3xl sm:text-2xl py-5 text-xl font-light md:pl-4 pl-2'>You name it, we have it.</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    {/* https://tailwindcomponents.com/component/search-input-1 */}
                    
                    <input className='bg-transparent border-b-2 border-black py-2 mr-3 px-2 leading-tight outline-none hover:border-teal-500 duration-300' type="text" placeholder='Enter movie name here' />
                    <button>All movies</button>

                    
                </div>
            </div>

            <div className='text-center mt-[-40px]'>
                <p className='italic text-gray-500'>Background Animation: Vanta.JS</p>
            </div>
        </div>

    );

}

export default Home;