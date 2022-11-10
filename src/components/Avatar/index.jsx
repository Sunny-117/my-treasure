import React from 'react'


export default function Avatar({ url }) {

    return (
        <div className='avatar'>
            <img src={url} />
        </div>
    )
}
