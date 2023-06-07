import { Button, Form, Input } from 'antd';
import {prefixClassNames} from '../../utils/prefixCls'
import {login} from '../../service'
import {useUserStore} from '../../store'

const Login = () => {
    const setUserInfo = useUserStore(state => state.setUserInfo)
    const onFinish = (value: any) => {
        console.log('onFinish', value)
        login(value).then(res => {
            const { accessToken } = res.data.data
            localStorage.setItem('token', accessToken)
            setUserInfo(res.data.data)
        })
    }

    return <div className={prefixClassNames('login', 'flex items-center justify-center w-full')}>
        <div className={prefixClassNames('login-content', '')}>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 300 }}
                initialValues={{
                    account: 'gtx',
                    password: 'gtx'
                }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Account"
                    name="account"
                    rules={[{ required: true, message: 'Please input your Account!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </div>
}

export default (Login)
