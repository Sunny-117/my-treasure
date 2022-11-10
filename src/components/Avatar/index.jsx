import React from 'react'


export default function Avatar({ url, radius }) {
    console.log(radius)

    return (
        <div className='avatar' style={{
            borderRadius: radius
        }}>
            <img src={url} />
        </div>
    )
}
