import { Form, Input, Button } from 'antd';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();

  const onFinish = (values) => {

    console.log('Success:', values);
    router.push('/main'); 
  };

  return (
    <Form
      name="login_form"
      onFinish={onFinish}
      style={{ maxWidth: '300px', margin: '0 auto', marginTop: '100px' }}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
