"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import data from '../data';
import { CardActionArea } from '@mui/material';
import { setCardIsSolvedById } from '../utils/localStorageUitls';
import {useMarkCardAsSolved} from '../AdventCardDataProvider';
import Alert from '@mui/material/Alert';



type Props = {
    id: number;
    dialogOpen: boolean;
    onCloseDialog: () => void;
    dialogType: 'checkAnswer' | 'solved';
}

type AlertData = {
    message: string;
    severity: 'success' | 'error'
}

const AdventCardDialog = ({id, dialogOpen,onCloseDialog, dialogType}: Props) => {
    const { markCardAsSolved } = useMarkCardAsSolved();
    const [userAnswer, setUserAnswer] = React.useState('');
    const [alertData, setAlertData] = React.useState<AlertData | null>(null);
        
    const cardData = data.find((item) => item.id === id);

    if (!cardData) return null;

    const handleCheckAnswer = () => {
        if (cardData && userAnswer.toLowerCase().trim() === cardData.answer.toLowerCase().trim()) {
            markCardAsSolved(id);
            setAlertData({
                message: 'Congratulations!',
                severity: 'success'
            })
        } else {
            setAlertData({
                message: 'Not quite right, please try again!',
                severity: 'error'
            })
        }
    };

    const handleCloseDialog = () => {
        setUserAnswer('');
        setAlertData(null);
        onCloseDialog();
    }

    const dialogTitle = dialogType === 'checkAnswer' ? 'Check Your Answer' : cardData.name;
    
    return (
        
        <Dialog open={dialogOpen} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
            {alertData && <Alert severity={alertData.severity}>{alertData.message}</Alert>}
            { dialogType === 'checkAnswer' ? 
             (
                <TextField
                    autoFocus
                    margin="dense"
                    label="Enter your answer"
                    fullWidth
                    variant="outlined"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleCheckAnswer();
                        }
                    }}
                />
            ): (
                <Typography>
                    Stuff
                </Typography>
            )}
        </DialogContent>
        <DialogActions>
            {dialogType === 'checkAnswer' ? (
                <>
                <Button onClick={handleCloseDialog}>Cancel</Button>
                <Button onClick={handleCheckAnswer} variant="contained">
                    Check Answer
                </Button>
            </> 
            ) : (
                <Button onClick={handleCloseDialog} color="primary">
                    Close
                </Button>
            )}
        </DialogActions>
    </Dialog>
    )

};

export default AdventCardDialog;