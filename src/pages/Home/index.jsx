import React from 'react'
import './index.less'
import Avatar from '@/components/Avatar/index'
import ChatInput from '@/components/ChatInput/index'
export default function Home() {
    return (
        <div className='home'>
            <div className='chat'>
                <Avatar size={'100px'} radius={'50%'} url={'data:image/jpeg;base64,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'} />
            </div>
            <div className="chat-input">
                <ChatInput />
            </div>
        </div>
    )
}
