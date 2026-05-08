
// npm install -D tailwindcss@3 postcss autoprefixer
// npx tailwindcss init -p

// -D : 개발용
// npx: 설치하지 않고 실행만

// tailwind.config.js
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

import TWCSample from './components/TWCSample'
import './App.css'

function App() {

  return (
    <>
      <TWCSample />
    </>
  )
}

export default App
