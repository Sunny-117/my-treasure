

import { Button, Checkbox, Form, Input, message } from 'antd';
import React, { useState } from 'react';
import instance from '@/api/index';
import { useNavigate } from 'react-router';


const Login = () => {
    const navigate = useNavigate()
    const onFinish = async (values) => {
        const { username, password } = values;
        console.log(values, 'n')
        const { data } = await instance.post('/api/user/reg', {
            "loginId": username,
            "nickname": username,
            "loginPwd": password
        })
        if (data) {
            message.success('注册成功')
            navigate('/login')
        }



    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
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
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>




            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    登陆
                </Button>
            </Form.Item>
        </Form>
    );
};
export default Login;