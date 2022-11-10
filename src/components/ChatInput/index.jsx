import React, { useState } from 'react'
import './index.less'
export default function ChatInput() {
    const [value, setValue] = useState('')
    return (
        <div className='chat-input'>
            <input type="text" value={value} onChange={e => {
                setValue(e.target.value)
            }} />
        </div>
    )
}
