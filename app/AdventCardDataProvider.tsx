'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { BaseCardData } from './types';
import data from './data';
import { isCardSolvedById, setCardIsSolvedById } from './utils/localStorageUitls';

type AdventCardContextType = {
    cards: Array<{
        isSolved: boolean
    } & BaseCardData>;
    markCardAsSolved: (id: number) => void;
    isCardSolved: (id: number) => boolean;
}

const AdventCardContext = createContext<AdventCardContextType | undefined>(undefined);

export const useAdventCardContext = () => {
    const context = useContext(AdventCardContext);
    if (context === undefined) {
        throw new Error('useAdventCardContext must be used within an AdventCardDataProvider');
    }
    return context;
};

export const useIsCardSolved = () => {
    const { isCardSolved } = useAdventCardContext();

    return {
        isCardSolved
    }
}

export const useMarkCardAsSolved = () => {
    const { markCardAsSolved } = useAdventCardContext();

    return {
        markCardAsSolved
    }
}

type AdventCardDataProviderProps = {
    children: ReactNode;
}

const AdventCardDataProvider = ({ children }: AdventCardDataProviderProps) => {
    // Initialize cards with solved status from localStorage
    const [cards, setCards] = useState<Array<{
        isSolved: boolean
    } & BaseCardData>>(() => {
        return data.map(card => ({
            ...card,
            isSolved: isCardSolvedById(card.id)
        }));
    });

    const markCardAsSolved = (id: number) => {
        setCardIsSolvedById(id);
        setCards(prevCards => 
            prevCards.map(card => 
                card.id === id ? { ...card, isSolved: true } : card
            )
        );
    };

    const isCardSolved = (id: number): boolean => {
        return cards.find(item => item.id === id)?.isSolved || false;
    };

    const value: AdventCardContextType = {
        cards,
        markCardAsSolved,
        isCardSolved
    };

    return (
        <AdventCardContext.Provider value={value}>
            {children}
        </AdventCardContext.Provider>
    );
};

export default AdventCardDataProvider;