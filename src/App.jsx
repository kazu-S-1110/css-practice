import "./App.css";
import { Loader } from "./components/Loader/Loader";
import { SlideButton } from "./components/SlideButton/SlideButton";

function App() {
  return (
    <div className="App">
      {/* <Transform /> */}
      <SlideButton />
      {/* <ReactSelect /> */}
      <Loader />
    </div>
  );
}

export default App;
