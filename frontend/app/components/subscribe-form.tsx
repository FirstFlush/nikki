"use client";
import React, { useState } from 'react';
import { TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { subscribe } from '../../services/apiServices';
import { SubscirbeFormData } from '../../services/formTypes';


export default function SubscribeForm() {

    const initialFormData: SubscirbeFormData = {
        name: '',
        email: '',
        phone: '',
        comments: ''
      };


    const [formData, setFormData] = useState<SubscirbeFormData>(initialFormData)
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setError('')
        try {
            await subscribe(formData);
            setFormData(initialFormData);
            setSubmitted(true)
        } catch (err) {
            setError('Failed to subscribe. Please try again later.')
            setSubmitted(false)
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }


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
                    label="Name"
                    variant="outlined"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Email address"
                    variant="outlined"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Phone number"
                    variant="outlined"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Additional comments"
                    variant="outlined"
                    name="comments"
                    multiline
                    rows={4}
                    value={formData.comments}
                    onChange={handleChange}
                    placeholder="Let us know what you'd like to see from the Nikki Racing project."
                />
                <Button type="submit" variant="outlined" color="primary">
                    <Typography variant="button">Subscribe</Typography>
                </Button>
                
            </form>
            )}
        </div>
    )





}