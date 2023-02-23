import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <nav className="relative z-10 top-0 flex justify-between items-center h-[70px] w-full mx-auto px-7 text-white bg-black">
            <h1 className="w-full text-3xl font-bold text-[#00DF9A]">REACT.</h1>
            <ul className="hidden md:flex flex gap-10">
                <Link to={'/home'}>Home</Link>
                <Link to={'/about'} >About</Link>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className="w-full text-3xl font-bold text-[#00DF9A] m-4">REACT.</h1>
                <ul className='p-4 uppercase'>
                    <li className="p-4 border-b border-gray-600">Home</li>
                    <li className="p-4 border-b border-gray-600">Company</li>
                    <li className="p-4 border-b border-gray-600">Resources</li>
                    <li className="p-4 border-b border-gray-600">About</li>
                    <li className="p-4">Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;