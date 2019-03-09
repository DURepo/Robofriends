import React from 'react'

const Card = ({id, name, email} ) => {
    
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5'>
            <img alt='phto' src={`https://robohash.org/${id}?200X200`}/>
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    )

}

export default Card