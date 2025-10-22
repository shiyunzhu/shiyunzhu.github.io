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


type UnsolvedCardProps = {
    id: number;
    christmasImage: string;
    onCardClick: () => void;
}


const UnsolvedCard = ({
    id,
    christmasImage,
    onCardClick,
}: UnsolvedCardProps) => {

    return (
        <React.Fragment>
            <CardActionArea onClick={onCardClick}>
                <CardMedia component="img" image={christmasImage} title="Christmas Image" />
                <CardContent>
                    <Typography variant="h2">{id}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small"  onClick={onCardClick}>Check Answer</Button>
            </CardActions>

            
        </React.Fragment>
    )
}

export default UnsolvedCard;