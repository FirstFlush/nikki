"use client";
import React, { useState } from 'react';
import { TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { subscribeEmail } from '../../services/apiServices';


export default function SubscribeForm() {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setError('')
        try {
            await subscribeEmail(email);
            setEmail('');
            setSubmitted(true)
    
        } catch (err) {
            setError('Failed to subscribe. Please try again later.')
            setSubmitted(false)
        }
    };

    return (
        <div>
            {submitted ? (
                <Typography variant="body1" sx={{ marginTop: 2, textAlign: 'center' }}>
                    Thanks for subscribing!
                </Typography>
            ) : error ? (
                <Typography variant="body2" sx={{ marginTop: 2, textAlign: 'center', color: 'error.main' }}>
                    {error}
                </Typography>
            ) : (
            <form onSubmit={handleSubmit} method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '20px', width:'100%' }} >
                <TextField
                    label="Email Address"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    // color="secondary"
                />
                <Button type="submit" variant="outlined" color="primary">
                    <Typography variant="button">Subscribe</Typography>
                </Button>
                
            </form>
            )}
        </div>
    )





}