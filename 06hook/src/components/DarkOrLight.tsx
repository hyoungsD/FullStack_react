import { useState } from 'react'
import ThemeContext from './ThemeContext';
import MiddleContext from './MiddleContext';

// 컴포넌트가 많을 때 계속 Props로 전달하려면 복잡하니
// Context를 만들어서.. 범위 내에서 필요할 때 Props를 사용할 수 있게 한다

// 1. createContext로 Context를 만든다 .................. ThemeContext.tsx
// 2. Provider로 value를 전달하고 사용 범위를 감싼다.......... DarkOrLight.tsx
// 3. 하위 컴포넌트에서 useContext로 value를 꺼내 쓴다........ MainContext.tsx



type Theme = 'light' | 'dark';

export default function DarkOrLight() {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = (): void => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  return (
    <div>
      <h2>DarkOrLight(useContext/Provider)</h2>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <MiddleContext />
      </ThemeContext.Provider>
    </div>
  )
}
