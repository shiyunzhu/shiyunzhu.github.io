"use client";

import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

type SolvedCardProps = {
    id: number;
    name: string;
    image: string;
    shortDescription: string;
    onCardClick: () => void;
}

const SolvedCard = ({
    id,
    name,
    image,
    shortDescription,
    onCardClick
}: SolvedCardProps) => {
    return (
        <React.Fragment>
            <CardActionArea onClick={onCardClick}>
                <CardMedia component="img" image={image} title={name} />
                <CardContent>
                    <Typography variant="h2">{id}</Typography>
                    <Typography variant="h4">{name}</Typography>
                    <Typography variant="body1">{shortDescription}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" onClick={onCardClick}>Learn More</Button>
            </CardActions>
        </React.Fragment>
    )
}

export default SolvedCard;