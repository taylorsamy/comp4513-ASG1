
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./logos/TMDB.png";
// import { Squash as Hamburger } from 'hamburger-react'

const Navbar = (props) => {
    const [isOpen, setOpen] = useState(false);

    const location = useLocation();

    const [isHome, setHome] = useState(false);
    const [isDefault, setDefault] = useState(false);
    const [isMovieDetails, setMovieDetails] = useState(false);

    

    function getListOfLinks() {
        if (isOpen) {
            return "absolute bg-[#0f7ca7] w-full left-0 top-[45px] h-[calc(100vh-45px)] z-50";
        } else {
            return "hidden sm:block";
        }
    }

    useEffect(() => {
        location.pathname === "/" ? setHome(true) : setHome(false);
        location.pathname === "/default" ? setDefault(true) : setDefault(false);
        location.pathname === "/movieDetails" ? setMovieDetails(true) : setMovieDetails(false);

        function handleResize() {
            setOpen(false);
        }
        window.addEventListener('resize', handleResize)
    }, [location]);



    return (
        <nav className="realtive top-0 z-10 w-full bg-[#0f7ca7] h-[50px] px-4 flex justify-between align-middle">
            <div className="block sm:hidden">
                {/* <Hamburger color="#FFFFFF" rounded toggled={isOpen} toggle={setOpen} /> */}
            </div>
            <div className={"z-10 h-[50px] " + getListOfLinks()}>
                <ul className="h-[50px] p-3">
                    <Link to="/">
                        <li className={"block mt-4 sm:inline-block sm:mt-0 text-white hover:text-[rgb(2,48,72)] mx-2 " + (isHome ? "underline font-semibold" : "")}>
                            Home
                        </li>
                    </Link>
                    <Link to="/default">
                        <li className={"block mt-4 sm:inline-block sm:mt-0 text-white hover:text-[rgb(2,48,72)] mx-2 " + (isDefault ? "underline font-semibold" : "")}>
                            Search
                        </li>
                    </Link>
                    <Link to="/movieDetails">
                        <li className={"block mt-4 sm:inline-block sm:mt-0 text-white hover:text-[rgb(2,48,72)] mx-2 " + (isMovieDetails ? "underline font-semibold" : "")}>
                            MovieDetails
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="h-[50px] p-3 flex">
                <p className="pr-4 font-bold text-white">Web III Assignment 1</p>
                <img className="w-auto h-6" src={logo} alt="logo" />
            </div>
        </nav>
    );
}

export default Navbar;