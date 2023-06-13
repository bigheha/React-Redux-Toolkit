import {useState, useEffect} from 'react';

export default function useWindowWidth() {
    
    const [ width, setWidth ] = useState(0);
    
    useEffect(() => {
        
        function handleWidth() {
            setWidth(window.innerWidth);
        }

        handleWidth();

        window.addEventListener('resize', handleWidth);

        return () => {
            window.removeEventListener('resize', handleWidth);
        }

    }, [])
    return width;
}