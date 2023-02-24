import React from 'react';
import Navbar from './Navbar';

const MovieDetails = (props) => {
    const img = 'https://image.tmdb.org/t/p/w342/55WJCdayHwoXJwRv3prpqscHt2q.jpg'
    const tmdbLink = 'https://www.themoviedb.org/movie/25';
    const imdbLink = 'https://www.imdb.com/title/tt0418763'
    return (
        <div>
            <Navbar />
            <div className='bg-black grid grid-cols-2  place-items-center min-h-[calc(100vh-70px)]'>
                <div className='flex-none'>
                    <img className='shadow-2xl shadow-gray-800' src={img} alt="poster" />
                </div>
                <div className='flex flex-1 flex-col w-80px gap-10 text-white'>
                    <div className='flex flex-row items-center gap-60'>
                        <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Jarhead</p>
                        <p className='md:text-2xl'>6.6</p>
                    </div>
                    <div className='grid grid-cols-2 content-evenly '>
                        <p>2005</p>
                        <p>125 mins</p>
                    </div>
                    <div className='grid grid-cols-2  '>
                        <p>Overview</p>
                        <p>Details</p>
                    </div>
                    <div className='flex w-auto flex-row justify-between '>
                        <p>Jarhead is a film about a US Marine Anthony SwoffordÃ¢â¬Å¡ÃâÃÂ´s experience in the Gulf War.
                            After putting up with an arduous boot camp, Swafford and his unit are sent to the Persian Gulf where they are earger to fight but are forced to stay back from the action.
                            Meanwhile Swofford gets news of his girlfriend is cheating on him.
                            Desperately he wants to kill someone and finally put his training to use.</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-row gap-10'>
                            <p>Genre</p>
                            <p>Drama, War</p>
                        </div>
                        <div className='flex flex-row gap-10'>
                            <p>Genre</p>
                            <p>Drama, War</p>
                        </div>
                        <div className='flex flex-row gap-10'>
                            <a href={tmdbLink} target="_blank" rel="noreferrer">TMDB Link</a>
                            <p>TMDB link : {tmdbLink}</p>
                            <p>IMDB link : {imdbLink}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;