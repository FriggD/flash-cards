import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg p-8 shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Welcome Back</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 border-2 border-[#8E9AAF] rounded focus:border-[#6B4E71] focus:outline-none text-base"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="p-3 border-2 border-[#8E9AAF] rounded focus:border-[#6B4E71] focus:outline-none text-base"
          />
          <button 
            type="submit"
            className="bg-[#6B4E71] text-white p-3 rounded text-base cursor-pointer transition-colors hover:bg-[#9B6B9D]"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <button 
            onClick={() => navigate('/register')}
            className="text-[#6B4E71] hover:text-[#9B6B9D] underline"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;