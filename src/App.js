import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// eslint-disable-next-line no-unused-vars
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

//let name="samarth";
function App() {
  const [mode, setMode] = useState('light');
  const [textMode, setTextMode] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState('');
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setTextMode('Enable Light Mode')
      document.body.style.backgroundColor = "#fadbac"
      showAlert("Dark Mode has been enabled", "Success");
      document.title = 'TextUtils - Dark Mode';
      
    }
    else {
      setMode('light')
      setTextMode('Enable Dark Mode')
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode has been enabled", "Success");
      document.title = 'TextUtils - Light Mode';
    }
    // setInterval(() => {
    //   document.title = 'TextUtils-Home'
    // }, 2000);
    // setInterval(() => {
    //   document.title = "Install TextUtils Now"
    // },1500);
  }
  return (
    <>
      {/* <Navbar title="Samarth Patel" aboutText="About  Us"/> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} textMode={textMode} />
        <Alert alert={alert} />
        <div className="container mb-3">
        <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
            </Route>
        </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
