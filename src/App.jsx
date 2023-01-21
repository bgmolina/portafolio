import "./App.css";
import { Presentation, Stars } from "./components";
import { menu } from "./img";

function App() {
  return (
    <>
      <Stars />
      <img id="idMenu" src={menu} className="absolute pl-5 pt-5" />
      <Presentation />
    </>
  );
}

export default App;
