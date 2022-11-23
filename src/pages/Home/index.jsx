import React, { useState } from 'react'
import './index.less'
import { AUTH_TOKEN } from '@/utils/const.js'
import instance from '@/api/index';
export default function Home() {
    const [chatList, setChatList] = useState([])
    const [content, setContent] = useState('')
    const sentMessage = async () => {
        // const { data } = await instance.post('/api/chat', {
        //     content,
        // }, {
        //     headers: {
        //         "Authorization": AUTH_TOKEN
        //     }
        // })
        // console.log(data)
        const res = await fetch('https://study.duyiedu.com/api/chat', {
            headers: {
                "Authorization": AUTH_TOKEN
            },
            method: 'POST',
            body: JSON.stringify(),
        })
        console.log(res)
    }
    return (
        <div>
            <div className="content">
                聊天内容
            </div>
            <div className='home'>
                我：<input type="text" value={content} onChange={e => {
                    setContent(e.target.value)
                }} />
            </div>
            <div className="submit">
                <button onClick={sentMessage}>发送</button>
            </div>
        </div>
    )
}
