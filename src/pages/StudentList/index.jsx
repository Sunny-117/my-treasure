import React, { useEffect, useState } from 'react';
import { Space, Table, Tag, Button, Modal, message, Drawer, Checkbox, Form, Input } from 'antd';
import { getStudentList, deleteStudent, searchStudent, submitStudent } from '@/api/apiList'
import { StepForwardOutlined } from '@ant-design/icons';

export default function StudentList({ setName }) {
    const [newData, setNewData] = useState([])
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    // const form = Form.useFormInstance();
    const [form] = Form.useForm();
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
        console.log(newData, 'newData')
    }
    useEffect(() => {
        getList()
    }, [])
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const onFinish = async (values) => {
        console.log(values, 'valuess')
        const { sNo, name, sex, birth, phone, address, email } = values
        console.log(birth, 'birth')
        const { data } = await searchStudent(`/api/student/updateStudent?appkey=demo13_1545210570249&sNo=${sNo}&name=${name}&sex=${sex}&birth=${birth}&phone=${phone}&address=${address}&email=${email}`)
        getList()
        onClose()
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
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
    const handleEdit = async (sno) => {
        showDrawer()
        const { data } = await searchStudent(`/api/student/searchStudent?appkey=demo13_1545210570249&sex=-1&search=${sno}&page=1&size=1`)
        console.log(data.data.searchList[0], 'data')
        let temp = data.data.searchList[0];
        const obj = {}
        obj.name = temp.name;
        obj.age = temp.birth;
        obj.address = temp.address;
        obj.email = temp.email;
        obj.phone = temp.phone;
        obj.sex = temp.sex;
        obj.sNo = temp.sNo;
        obj.birth = temp.birth;
        form.setFieldsValue(obj)
        console.log(obj, 'obj')
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
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Sex',
            dataIndex: 'sex',
            key: 'sex',
        },
        {
            title: 'SNo',
            dataIndex: 'sNo',
            key: 'sNo',
        },
        {
            title: 'Birth',
            dataIndex: 'birth',
            key: 'birth',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => {
                console.log(record, 'record');
                return <Space size="middle">
                    <Button onClick={handleCheck}>查看</Button>
                    <Button onClick={() => { handleEdit(record.sNo) }}>编辑</Button>
                    <Button onClick={() => { handleDelete(record.sNo) }}>删除</Button>
                </Space>
            },
        },
    ];
    return <div>
        <Table
            loading={loading}
            columns={columns}
            dataSource={newData} />
        <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
            <Form
                form={form}
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label='name'
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="age"
                    name="age"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="address"
                    name="address"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="phone"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="sex"
                    name="sex"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="sNo"
                    name="sNo"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="birth"
                    name="birth"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Drawer>
    </div>
}