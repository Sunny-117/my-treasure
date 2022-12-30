import React, { useState } from 'react'

function Tags({ infoArr, deleteItem }) {
    return <div>
        {infoArr.map(item => <div>{item.label}<span onClick={() => deleteItem(item)}>x</span></div>)}
    </div>
}

export default function Mentions({
    onChange,
    onSelect,
    defaultValue,
    options,
    ...rest
}) {
    const [value, setValue] = useState(defaultValue)
    const [show, setShow] = useState(false)
    const [ulList, setUlList] = useState(options)
    const [infoArr, setInfoArr] = useState([])
    return (
        <div>
            <input type="text" value={value} onChange={e => {
                const newValue = e.target.value;
                if (newValue.startsWith('@')) {
                    setShow(true)
                    const arr = options.map(ele => {
                        const eleValue = ele.value
                        const str = newValue.substring(1)
                        if (eleValue.includes(str)) {
                            return ele
                        }
                    }).filter(item => item)
                    console.log(arr)
                    setUlList(arr)
                    // 过滤
                } else {
                    setShow(false)
                }
                setValue(newValue)
            }} />
            <Tags infoArr={infoArr} deleteItem={(item) => {
                setInfoArr(infoArr.filter(ele => ele !== item));
            }} />
            {show && <ul>
                {ulList.map(item => {
                    return <li onClick={() => {
                        setInfoArr([...new Set([
                            ...infoArr,
                            item
                        ])])
                    }}
                        key={item.value}>
                        {item.label}
                    </li>
                })}
            </ul>}
        </div>
    )
}
