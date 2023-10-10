import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from "react-router-dom/dist";

const Signup = (props) => {
    const navigate = useNavigate()

    const { signup } = props
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        e.preventDefault()
        signup(formData, navigate)
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Role"
                name="role"
                type="role"
                value={formData.role}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Repeat Password"
                name="repeatPassword"
                type="repeatPassword"
                value={formData.repeatPassword}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
                Sign Up
            </Button>
        </form>
    );
};

export default Signup;
