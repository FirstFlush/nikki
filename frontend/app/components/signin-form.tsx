'use client';
import React, { useState } from 'react';
import { TextField, Typography, Button } from '@mui/material';
import { SignInFormData } from '../../services/formTypes';
import { login } from '../../services/apiServices';
import { useAuth } from '../auth/auth-context';

const SignInForm = () => {
    const initialFormData: SignInFormData = {
        email: '',
        password: ''
    };

    const [formData, setFormData] = useState<SignInFormData>(initialFormData);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const { setAuth } = useAuth();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await login(formData);
            localStorage.setItem('accessToken', response.access);
            localStorage.setItem('refreshToken', response.refresh);

            // Update authentication state immediately after successful login
            setAuth({ token: response.access });
            
            setFormData(initialFormData);
            setSubmitted(true);
            console.log('all good');
        } catch (err) {
            setError('Failed to login. Please try again later.');
            setSubmitted(false);
        }
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // If submitted and no error, display a message indicating the user is logged in
    if (submitted && !error) {
        return <Typography variant="body1">You are logged in!</Typography>;
    }

    return (
        <form onSubmit={handleSubmit} method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
            <TextField
                label="Email address"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <TextField 
                type="password"
                label="Password"
                variant="outlined"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <Button type="submit" variant="outlined" color="primary">
                <Typography variant="button">Sign in</Typography>
            </Button>
            {error && <Typography color="error">{error}</Typography>}
        </form>
    );
};

export default SignInForm;