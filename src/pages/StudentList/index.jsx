import React, { useEffect, useState } from 'react';
import { Space, Table, Tag, Button, Modal, message } from 'antd';
import { getStudentList, deleteStudent } from '@/api/apiList'
import { StepForwardOutlined } from '@ant-design/icons';

export default function StudentList() {
    const [newData, setNewData] = useState([])
    const [loading, setLoading] = useState(false)
    async function getList() {
        setLoading(true)
        const { data } = await getStudentList('/api/student/findAll?appkey=demo13_1545210570249')
        setLoading(false)
        const newArr = [];
        for (const item of data.data) {
            const obj = {}
            obj.name = item.name;
            obj.age = item.birth;
            obj.address = item.address;
            obj.key = item.id;
            obj.sNo = item.sNo;
            newArr.push(obj)
        }
        setNewData(newArr)
    }
    useEffect(() => {
        getList()
    }, [])
    const handleCheck = () => {

    }
    const handleDelete = async (id) => {
        Modal.confirm({
            content: `确定删除id为${id}的学生`,
            cancelText: '取消',
            okText: '确认',
            icon: <StepForwardOutlined />,
            onOk: async () => {
                try {
                    const { data } = await deleteStudent(`http://open.duyiedu.com/api/student/delBySno?appkey=demo13_1545210570249&sNo=${id}`)
                    if (data) {
                        message.success('删除成功～')
                        // 刷新 - 重新请求
                        getList()
                    }
                } catch (error) {
                    message.error('删除失败')
                }
            }
        })

    }
    const handleEdit = () => {

    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => {
                console.log(record, 'record');
                return <Space size="middle">
                    <Button onClick={handleCheck}>查看</Button>
                    <Button onCick={handleEdit}>编辑</Button>
                    <Button onClick={() => { handleDelete(record.sNo) }}>删除</Button>
                </Space>
            },
        },
    ];
    return <Table
        loading={loading}
        columns={columns}
        dataSource={newData} />
}