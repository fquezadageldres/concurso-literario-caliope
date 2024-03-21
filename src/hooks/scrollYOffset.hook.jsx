import { useState, useEffect } from 'react';

const useScrollBelowThreshold = (threshold) => {
    const [isBelowThreshold, setIsBelowThreshold] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setIsBelowThreshold(position > threshold);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [threshold]);

    return isBelowThreshold;
};

export default useScrollBelowThreshold;
