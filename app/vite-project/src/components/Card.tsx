import { Card } from 'antd'
import React from 'react'

export default function CardComp() {
    return (
        <div>
            <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>


        </div>
    )
}
