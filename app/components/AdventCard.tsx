"use client";

import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import data from '../data';
import SolvedCard from './SolvedCard'
import UnsolvedCard from './UnsolvedCard';
import { useIsCardSolved } from '../AdventCardDataProvider';
import AdventCardDialog from './AdventCardDialog';


type AdventCardProps = {
    id: number;
}

const AdventCard = ({
    id,
}: AdventCardProps) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const {isCardSolved} = useIsCardSolved();
    const cardData = data.find((item) => item.id === id);

    if (!cardData) {
        return null;
    }

    const isSolved = isCardSolved(id);

    const handleCloseDialog = () => {
        setDialogOpen(false);
    }

    const onCardClick = () => {
        setDialogOpen(true);
    }

    const dialogType = isSolved ? 'solved' : 'checkAnswer';

    return (
        <Box>
            <Card variant='elevation'>
                {isSolved ? (
                    <SolvedCard id={id} name={cardData.name} image={cardData.image} shortDescription={cardData.shortDescription} onCardClick={onCardClick} />
                ) : (
                    <UnsolvedCard id={id} christmasImage={cardData.christmasImage} onCardClick={onCardClick}/>
                )
                }
            </Card>
            <AdventCardDialog dialogType={dialogType} id={id} dialogOpen={dialogOpen} onCloseDialog={handleCloseDialog}/>
        </Box>
    );
};

export default AdventCard;