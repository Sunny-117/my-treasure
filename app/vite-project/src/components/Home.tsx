import React from 'react'
import CardComp from './Card'
import EchartsComp from './Echarts'

export default function Home() {
    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: "space-around",
                marginTop: '30px'
            }}>
                <CardComp />
                <CardComp />
                <CardComp />
            </div>
            <div>
                <EchartsComp />
            </div>
        </div>
    )
}
