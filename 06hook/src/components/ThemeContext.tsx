import { createContext } from 'react'


type Theme = 'light' | 'dark';
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
}


const ThemeContext = createContext<ThemeContextType>({
  // 초기값
  theme: 'light',
  toggleTheme: () => {
    console.log();
  }
});

export default ThemeContext;
