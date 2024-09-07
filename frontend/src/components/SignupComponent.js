

import React, { useState } from 'react';
import axios from 'axios';
import 'login.css'; 

const SignupComponent = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

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
            const response = await axios.post('http://127.0.0.1:5000/signup', formData);
            if (response && response.data) {
                console.log('User registered successfully:', response.data);
                alert('User registered successfully!');
            }
        } catch (error) {
            console.error('Error during signup:', error);
            console.error('Response:', error.response ? error.response.data : 'No response from server');
            alert('Error during signup. Please try again.');
        }
    };

    return (
        <div className="square">
            <i style={{ '--clr': '#00ff0a' }}></i>
            <i style={{ '--clr': '#ff0057' }}></i>
            <i style={{ '--clr': '#fffd44' }}></i>
            <div className="login">
                <h2>Signup</h2>
                <form onSubmit={handleSubmit}>
                    <div className="inputBx">
                        <input type="text" name="username" placeholder="Username" onChange={handleChange} value={formData.username} />
                    </div>
                    <div className="inputBx">
                        <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} />
                    </div>
                    <div className="inputBx">
                        <input type="password" name="password" placeholder="Password" onChange={handleChange} value={formData.password} />
                    </div>
                    <div className="inputBx">
                        <input type="submit" value="Signup" />
                    </div>
                </form>
                <div className="links">
                    <a href="#">Forget Password</a>
                    <a href="/signup">Signup</a>
                </div>
            </div>
        </div>
    );
};

export default SignupComponent;
