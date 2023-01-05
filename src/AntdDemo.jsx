import React from 'react'
import ResizeObserver from 'rc-resize-observer';
export default function AntdDemo() {
    return (
        <div>
            <ResizeObserver
                onResize={() => {
                    console.log('resized!');
                }}
            >
                <textarea />
            </ResizeObserver>,
        </div>
    )
}
