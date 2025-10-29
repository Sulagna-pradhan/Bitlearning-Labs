import { useContext } from 'react';
import { ThemeContextProvider } from '../../lib/contexts/ThemeProvider';

const useTheme = () => {
  const themeContext = useContext(ThemeContextProvider);
  if (!themeContext) {
    throw new Error('useTheme must be called inside ThemeProvider');
  }

  return themeContext;
};

export default useTheme;
