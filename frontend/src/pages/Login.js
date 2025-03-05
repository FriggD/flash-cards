import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PageContainer,
  Card,
  Form,
  Input,
  Button,
  Title,
  Link,
} from '../components/StyledComponents';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement login logic
    navigate('/home');
  };

  return (
    <PageContainer>
      <Card>
        <Title>Welcome Back</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Button type="submit">Login</Button>
        </Form>
        <p style={{ marginTop: '1rem', textAlign: 'center' }}>
          Don't have an account?{' '}
          <Link onClick={() => navigate('/register')}>Register</Link>
        </p>
      </Card>
    </PageContainer>
  );
}

export default Login;