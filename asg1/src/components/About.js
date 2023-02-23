import React from 'react';
import Navbar from './Navbar.js';
import Spline from '../animated-components/Spline.js';
import Spline2 from '../animated-components/Spline2.js';
import VantaWaves from "../animated-components/VantaWaves.js"

const About = (props) => {
    return (
        <div className="w-full h-[100vh]">
            <Navbar />

            <div className="absolute top-0 w-full h-100vh -z-10">
                <VantaWaves
                    shininess={10}
                    waveHeight={30}
                    waveSpeed={0.5}
                    color={0xdddddd}
                    styles={'fixed h-[100vh]'}
                />
            </div>
            <div className='relative w-full mx-auto grid md:grid-cols-2 '>
                <div className='flex flex-row items-center justify-center'>
                    <Spline className='bg-black' />
                    <div className='flex flex-col items-center justify-center'>
                        <p>User 1</p>
                        <p>Skills</p>
                    </div>
                </div>

                <div className='flex flex-row items-center justify-center'>
                    <div className='flex flex-col items-center justify-center'>
                        <p>User 1</p>
                        <p>Skills</p>
                    </div>
                    <Spline2 />
                    
                </div>

            </div>


        </div>
    )

}

export default About