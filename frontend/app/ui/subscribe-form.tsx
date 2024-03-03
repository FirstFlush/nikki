"use client";
import React, { useState } from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';



export default function SubscribeForm() {
    const [email, setEmail] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(email);   
    };

    return (
        <form onSubmit={handleSubmit} method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '20px', width:'100%' }} >
            <TextField
                label="Email Address"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary">
                Subscribe
            </Button>
        </form>

    )





}