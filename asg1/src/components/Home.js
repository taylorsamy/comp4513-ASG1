import React from 'react';
import Typed from 'react-typed';

const Home = props => {
    return (
        <div className='bg-white h-full w-full py-16 px-4 flex flex-col'>
            <div className='lg:col-span-2 flex justify-center items-center'>
                <Typed className='md:text-5xl sm:text-4xl text-xl font-bold pl-2'
                    strings={['Horror', 'Romance', 'Comedy']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop />
                    

            </div>
            <div className='flex justify-center items-center'>
                <input className='p-3 flex w-full rounded-md text-black' type="text" />
            </div>
            
        </div>
    )

}

export default Home;