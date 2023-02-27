import React from 'react';

const MovieDetailsExtra = (props) => {
    return(
        <div className='flex flex-col gap-5'>
            <div className='grid grid-cols-2'>
                <p>Tagline</p>
                <p className='italic'>"Welcome to the suck."</p>
            </div>
            <div className='grid grid-cols-2'>
                <p>Revenue</p>
                <p>$96,889,998</p>
            </div>
            <div className='grid grid-cols-2'>
                <p>Release Date</p>
                <p>2005-11-04</p>
            </div>
        </div>
    )
}

export default MovieDetailsExtra;