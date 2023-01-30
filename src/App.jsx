import "./App.css";
import {
  Presentation,
  Stars,
  Menu,
  Projects,
  Skills,
  Contact,
  Navbar,
} from "./components";

function App() {
  return (
    <>
      <Stars />
      <Menu />
      <Navbar />
      <Presentation />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
