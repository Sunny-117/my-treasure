import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

export default function MallAdminApp() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const onReset = () => {
        form.resetFields();
    };

    return (
        <div>
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
                    label="邮箱"
                    name="邮箱"
                    rules={[
                        {
                            required: true,
                            message: '邮箱格式不对',
                            validator: (rule, value, callback) => {
                                const emailReg = /^[\w-]+@[\w.-]+.com$/;
                                if (!emailReg.test(value)) {
                                    throw new Error('');
                                }
                            }
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="密码"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                            validator: () => {
                                return false;
                            }
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
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                        Reset
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}