import React from 'react'

function sleep() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(123)
        }, 1000);
    })
}

export default function Demo() {
    return (
        <div style={{
            border: '1px solid',
            width: '500px',
            height: '500px',
        }}
            onClick={async (e) => {
                console.log(e, 'wrapper1')
                const res = await sleep()
                console.log(e, 'wrapper2')
            }}
        >
            <button onClick={(e) => {
                e.stopPropagation()
                console.log(e.target, 'button')
            }}>点击</button>
            <input type="text" name="" id="" />
        </div>
    )
}
