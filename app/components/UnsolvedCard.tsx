"use client";

import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


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