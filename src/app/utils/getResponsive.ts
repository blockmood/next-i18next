import { useMediaQuery } from 'react-responsive';

export const useIsPad = () => useMediaQuery({ query: '(max-width: 1024px)' });
export const useIsMobile = () => useMediaQuery({ query: '(max-width: 868px)' });
