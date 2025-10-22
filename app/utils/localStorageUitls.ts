const LOCAL_STORAGE_KEY = 'CHRISTMAS_2025';

const isCardSolvedById = (id: number): boolean => {
    if (typeof window === 'undefined') {
        return false; // Return false during SSR
    }
    
    try {
        const solvedCards = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (!solvedCards) {
            return false;
        }
        
        const solvedCardsArray = JSON.parse(solvedCards);
        return Array.isArray(solvedCardsArray) && solvedCardsArray.includes(id);
    } catch (error) {
        console.error('Error reading from localStorage:', error);
        return false;
    }
}

const setCardIsSolvedById = (id: number): void => {
    if (typeof window === 'undefined') {
        return; // Do nothing during SSR
    }
    
    try {
        const solvedCards = localStorage.getItem(LOCAL_STORAGE_KEY);
        let solvedCardsArray: number[] = [];
        
        if (solvedCards) {
            solvedCardsArray = JSON.parse(solvedCards);
        }
        
        if (!Array.isArray(solvedCardsArray)) {
            solvedCardsArray = [];
        }
        
        if (!solvedCardsArray.includes(id)) {
            solvedCardsArray.push(id);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(solvedCardsArray));
        }
    } catch (error) {
        console.error('Error writing to localStorage:', error);
    }
}

export {
    isCardSolvedById,
    setCardIsSolvedById
}