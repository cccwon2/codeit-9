import ColorBox from "./ColorBox";
import "./App.css";
import { useState } from "react";

//상태를 정의하고, 이 상태를 변경하고, 상태에 따라서 렌더링이 잘 되도

function App() {
  const [color, setColor] = useState('#ffffff');

  let changeColor = (e) => setColor(e.currentTarget.value);

  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input onChange={changeColor} />
      </div>
      <ColorBox color={color} />
    </div>
  );
}

export default App;
