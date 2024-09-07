import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post('http://127.0.0.1:5000/signup', formData);
      if (response && response.data) {
        console.log('User registered successfully:', response.data);
        alert('User registered successfully!');
        navigate('/create');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      console.error('Response:', error.response ? error.response.data : 'No response from server');
      alert('Error during signup. Please try again.');
    }
  };

  return (
    <div className="login-container1">
      <div className="login">
        
        <form className="login-form1" onSubmit={handleSubmit}>
          <div className="inputBx">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="inputBx">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="inputBx">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="inputBx">
            <input
              type="submit"
              value="Signup"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
