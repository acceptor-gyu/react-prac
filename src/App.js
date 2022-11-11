// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

/**
 * color-org/src/App.js
 */

import { useState } from "react";
import ColorList from "./components/ColorList";
import colorData from "./data/color-data.json"

function App() {
  const [colors, setColors] = useState(colorData);
  
  const removeColor = id => {
    const newColors = colors.filter( color => color.id !== id );
    setColors(newColors);
  };

  const rateColor = (id, rating) => {
    const newColors = colors.map( color => color.id === id ? {...color, rating} : color );
    setColors(newColors);
  }

  return (
    <ColorList
      colors={colors}
      onRemoveColor={ removeColor }
      onRateColor={ rateColor }
      // onRemoveColor={ id => {
      //   // 삭제할 데이터는 filter() 처리, 데이터는 존재함
      //   const newColors = colors.filter( color => color.ud !== id);
      //   // 필터링 한 후, 현재의 상태 colors를 newColors로 업데이터 > colors 상태가 변경되면 App()은 다시 렌더링 됨
      //   setColors(newColors);
      // }}
    />
    
    );
}

export default App;