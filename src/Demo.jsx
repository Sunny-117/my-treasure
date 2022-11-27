// import React from 'react'

// export default function Father() {
//     const [value, setValue] = useState('')
//     return (
//         <div>
//             <Son value={value} setValue={setValue} />
//         </div>
//     )
// }

// function Son(props) {
//     props.setValue
// }
import React, { useState } from 'react'

export default function Demo() {
    const [value, setValue] = useState('')
    return (
        <div>
            <input type="text" value={value} onChange={e => {
                setValue(e.target.value)
            }} />
            {value}
        </div>
    )
}
