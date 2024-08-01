import ColorBox from "./ColorBox";
import "./App.css";


//상태를 정의하고, 이 상태를 변경하고, 상태에 따라서 렌더링이 잘 되도록. 
const domInput = document.querySelector('.selectColor')

function App() {
  return (
    <div className="App">
      <h1>무지개색 상자</h1>
      <div>
        <input className={'selectColor'} />
      </div>
      <ColorBox color={domInput.value} />
    </div>
  );
}

export default App;
