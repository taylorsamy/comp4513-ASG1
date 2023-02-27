import React from 'react';

const MovieDetailsRatings = (props) => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='grid grid-cols-2'>
                <p>Popularity</p>
                <p>9.97032</p>
            </div>
            <div className='grid grid-cols-2'>
                <p>Average</p>
                <p>6.6</p>
            </div>
            <div className='grid grid-cols-2'>
                <p>Vote Count</p>
                <p>765</p>
            </div>
        </div>
    )
}

export default MovieDetailsRatings