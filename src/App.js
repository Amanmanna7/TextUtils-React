import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

/* eslint-disable */

function App() {
  const [alert, setAlert] = useState(null);
  const [theme, setTheme] = useState({
    textColor: "white",
    buttonColor: "blue",
    buttonTextColor: "white",
    navBarColor: "#2d3236",
    bgColor: "#495057",
    id: 1
  });



  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const [text, setText] = useState('');

  return (
    < >
      <Router>
        <Navbar title="TextUtils" theme={theme} setTheme={setTheme} document={document} />
        <Alert alert={alert} />
        <div className='container'>
        {/* <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} theme={theme} /> */}
          <Routes>
              <Route exact path="/about" element={<About theme={theme} title="TextUtils"/> } />
              <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} theme={theme} text={text} setText={setText}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}


export default App;
