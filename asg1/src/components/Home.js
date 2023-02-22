import React, { useState, useEffect, useRef } from 'react';
import CELLS from 'vanta/dist/vanta.cells.min.js';
import Typed from 'react-typed';
import Navbar from './Navbar';
import * as THREE from "three";

const Home = (props) => {
    const [vantaEffect, setVantaEffect] = useState(null);
    const myRef = useRef(null);
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(CELLS({
                el: myRef.current,
                THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                color2: 0x1f89ac,
                size: 4.90,
                width: "100vw",
                height: "100vh",
                speed: 0.00
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        }
    }, [vantaEffect])

    return (
        
        <div className="w-full h-[100vh]">
            <Navbar />
            <script src="https://github.com/mrdoob/three.js/blob/03cc77fd1675c22d5765407ef5878a617cf6049d/build/three.min.js" />
            <div ref={myRef} className="h-[100%]">
                Test
            </div>

        </div>
    );

}

export default Home;