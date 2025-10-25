"use client";

import * as React from 'react';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import data from '../data';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Snowfall from 'react-snowfall';

type AlertData = {
    message: string;
    severity: 'success' | 'error'
}

const CheckAnswerComponent = () => {
    const router = useRouter();
    const [eventNumberString, setEventNumberString] = useState('');
    const [userAnswer, setUserAnswer] = useState('');
    const [alertData, setAlertData] = useState<AlertData | null>(null);
    const [isCorrect, setIsCorrect] = useState(false);



    const eventNumber = Number(eventNumberString);
    

    const handleCheckAnswer = useCallback(() => {
        const cardData = data.find((item) => item.id === eventNumber);

        if (cardData && userAnswer.toLowerCase().trim() === cardData.answer.toLowerCase().trim()) {
            setIsCorrect(true);
            setAlertData({
                message: 'Congratulations! You got it right!',
                severity: 'success'
            });
        } else {
            setIsCorrect(false);
            setAlertData({
                message: 'Not quite right, please try again!',
                severity: 'error'
            });
        }
    }, [eventNumber, userAnswer]);

    const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleCheckAnswer();
        }
    }, [handleCheckAnswer]);

    const handleEventNumberChange = useCallback((event: SelectChangeEvent) => {
        setEventNumberString(event.target.value as string);
        setAlertData(null); // Clear any previous alerts when changing event
        setIsCorrect(false); // Reset correct state when changing event
    }, []);

    const handleGoToPage = useCallback(() => {
        const cardData = data.find((item) => item.id === eventNumber);
        if (cardData) {
            setUserAnswer('')
            setEventNumberString('')
            setAlertData(null)
            router.push(`/${cardData.slug}`);
        }
    }, [eventNumber, router]);

    return (
        <Box sx={{ maxWidth: 400, mx: 'auto', backgroundColor: '#aaa9a5', padding: 2, borderRadius: '8px' }}>
            <Snowfall 
                color="#fff"  
                style={{
                    position: 'fixed',
                    width: '100vw',
                    height: '100vh',
            }} />  
            {alertData && (
                <Alert severity={alertData.severity} sx={{ mb: 2 }}>
                    {alertData.message}
                </Alert>
            )}
            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="event-number-label">Event Number</InputLabel>
                <Select
                    labelId="event-number-label"
                    id="event-number-select"
                    required
                    value={eventNumberString}
                    label="Event Number"
                    onChange={handleEventNumberChange}
                    sx={{backgroundColor: '#fff'}}
                >
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="6">6</MenuItem>
                    <MenuItem value="7">7</MenuItem>
                    <MenuItem value="8">8</MenuItem>
                    <MenuItem value="9">9</MenuItem>
                    <MenuItem value="10">10</MenuItem>
                    <MenuItem value="11">11</MenuItem>
                    <MenuItem value="12">12</MenuItem>
                </Select>
            </FormControl>
            <TextField
                required
                fullWidth
                label="Enter your answer"
                variant="outlined"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyPress={handleKeyPress}
                sx={{ mb: 2, backgroundColor: '#fff' }}
            />
            
            {isCorrect && eventNumber ? (
                <Button 
                    onClick={handleGoToPage} 
                    variant="contained" 
                    fullWidth
                    color="success"
                >
                    Go to {data.find(item => item.id === eventNumber)?.name}
                </Button>
            ) : (
                <Button 
                    onClick={handleCheckAnswer} 
                    variant="contained" 
                    fullWidth
                    disabled={!userAnswer.trim() || !eventNumber}
                >
                    Check Answer
                </Button>
            )}
        </Box>
    );
};

// Use dynamic import to prevent hydration issues and cascading renders
const CheckAnswer = dynamic(() => Promise.resolve(CheckAnswerComponent), {
    ssr: false,
    loading: () => (
        <Box sx={{ maxWidth: 400, mx: 'auto', p: 2 }}>
            Loading...
        </Box>
    )
});

export default CheckAnswer;