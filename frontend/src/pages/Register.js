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

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // TODO: Implement registration logic
    navigate('/login');
  };

  return (
    <PageContainer>
      <Card>
        <Title>Create Account</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
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
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <Button type="submit">Register</Button>
        </Form>
        <p style={{ marginTop: '1rem', textAlign: 'center' }}>
          Already have an account?{' '}
          <Link onClick={() => navigate('/login')}>Login</Link>
        </p>
      </Card>
    </PageContainer>
  );
}

export default Register;