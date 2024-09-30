
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Input, Button, Form } from 'antd';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      router.push('/main');
    } else {
      alert('Login gagal! Username atau password salah.');
    }
  };

  return (
    <div style={{ marginTop: '50px', textAlign: 'center' }}>
      <h2>Silahkan Login</h2>
      <Form onFinish={handleLogin} style={{ maxWidth: '300px', margin: 'auto' }}>
        <Form.Item label="Username">
          <Input 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Enter username"
          />
        </Form.Item>
        <Form.Item label="Password">
          <Input.Password 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter password" 
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
