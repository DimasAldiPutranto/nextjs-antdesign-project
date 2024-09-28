import { From, Input, Button, message }  from 'antd';
import { useRouter } from 'next/router';

const Login = () => {
    const router = useRouter();

    const onFinish = (values) => {
        console.log('Success:', values);
        router.push('/main');
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <From
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
        <From.Item
            label="Username"
            name="username"
            rules={[
            {
                required: true,
                message: 'Please input your username!',}]}
    >
        <Input />
    </From.Item>

    <From.Item
     label="Password"
     name="password"
     rules={[{ required: true,
        message: 'Please input your Password',
     }]}
     >
     <Input.Password />
     </From.Item>

     <From.Item wrapperCol={{ offset: 8,
        span: 16
      }}>
        <Button type="primary" htmlType="submit">
            Submit
            </Button>
      </From.Item>
      </From>
    );
};

export default Login;