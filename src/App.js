// import logo from './logo.svg';
import './App.css';
import PropItUp from "./components/PropItUp";

function App() {
  return (
    <div className="App">
      <PropItUp 
        firstName = {"Jane"}
        lastName = {"Doe"}
        age = {45}
        hColor = {"Black"}
      >
      </PropItUp>
      <PropItUp 
        firstName = {"John"}
        lastName = {"Smith"}
        age = {88}
        hColor = {"Brown"}
      >
      </PropItUp>
      <PropItUp 
        firstName = {"Millard"}
        lastName = {"Fillmore"}
        age = {50}
        hColor = {"Brown"}
      >
      </PropItUp>
      <PropItUp 
        firstName = {"Maria"}
        lastName = {"Smith"}
        age = {62}
        hColor = {"Brown"}
      >
      </PropItUp>
    </div>
  );
}

export default App;
