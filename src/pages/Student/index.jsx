import React, { useState } from 'react'
import AddStudentList from '../AddStudentList'
import StudentList from '../StudentList'
import { Tabs } from 'antd';
function Student() {
    const [tabsArr, setTabsArr] = useState([
        {
            name: 'demo1',
            id: 1,
            dom: <StudentList />
        },
        {
            name: 'demo2',
            id: 2,
            dom: <StudentList />
        },
        // {
        //     name: 'button',
        //     id: 999,
        //     dom: <button>点击</button>
        // }
    ])
    return (
        <div>
            <button onClick={() => {
                tabsArr.push({
                    name: `${Math.random()}`,
                    id: Math.random(),
                    dom: <StudentList />
                })
                setTabsArr(tabsArr.slice())
            }}>增加</button>
            {/* <AddStudentList /> */}
            <Tabs defaultActiveKey="1">
                {tabsArr.map(item => {
                    return <Tabs.TabPane tab={item.name} key={item.id}>
                        {item.dom}
                    </Tabs.TabPane>
                })}
            </Tabs>

        </div>
    )
}

export default Student