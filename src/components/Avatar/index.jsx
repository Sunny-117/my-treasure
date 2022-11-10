import React from 'react'


export default function Avatar({ url, radius }) {

    return (
        <div className='avatar' style={{
        }}>
            <img src={url} style={{
                border: '1px solid',
                borderRadius: radius
            }} />
        </div>
    )
}
