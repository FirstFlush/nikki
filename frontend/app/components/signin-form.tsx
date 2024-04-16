"use client";
import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
import { TextField, Typography, Button } from '@mui/material';
import { SignInFormData } from '../../services/formTypes';
import { login } from '../../services/apiServices';


const SignInForm:React.FC = () => {

    // const [routerReady, setRouterReady] = useState(false);
    // const router = useRouter();

    const initialFormData: SignInFormData = {
        email: '',
        password: ''
    }

    const [formData, setFormData] = useState<SignInFormData>(initialFormData)
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            const response = await login(formData);
            setFormData(initialFormData);
            setSubmitted(true)
            console.log('all good')
            // router.push('/')
        } catch (err) {
            setError('Failed to login. Please try again later.')
            setSubmitted(false)
        }

    }
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div>
            <form onSubmit={handleSubmit} method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '20px', width:'100%' }}>
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
            </form>
        </div>
    )

}

export default SignInForm;