
import React, { useEffect, useState } from 'react';
import { Space, Table, Tag, Button, Modal, message, Form, Input, Drawer, Select } from 'antd';
import { getStudentList, deleteStudent, searchStudent } from '@/api/apiList'

const { Option } = Select;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
const Tettt = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [newData, setNewData] = useState([])

    const [initialVal, setInitialVal] = useState({})
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
    const onGenderChange = (value) => {
        switch (value) {
            case 'male':
                form.setFieldsValue({
                    note: 'Hi, man!',
                });
                return;
            case 'female':
                form.setFieldsValue({
                    note: 'Hi, lady!',
                });
                return;
            case 'other':
                form.setFieldsValue({
                    note: 'Hi there!',
                });
                break;
            default:
        }
    };
    const onFinish = (values) => {
        console.log(values);
    };
    const onReset = () => {
        form.resetFields();
    };
    const onFill = async () => {
        const { data } = await getStudentList(`/api/student/searchStudent?appkey=demo13_1545210570249&sex=-1&search=1231166&page=1&size=1`)
        const dataObj = data.data.searchList[0];
        const obj = {
            note: dataObj.name,
            gender: dataObj.address,
            // age: dataObj.birth
        }
        setInitialVal(obj)
        form.setFieldsValue(obj);
    };
    return (
        <div>
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                <Form.Item
                    name="note"
                    label="Note"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        placeholder="Select a option and change input text above"
                        onChange={onGenderChange}
                        allowClear
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                >
                    {({ getFieldValue }) =>
                        getFieldValue('gender') === 'other' ? (
                            <Form.Item
                                name="customizeGender"
                                label="Customize Gender"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        ) : null
                    }
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                        Reset
                    </Button>
                    <Button type="link" htmlType="button" onClick={onFill}>
                        Fill form
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default Tettt;