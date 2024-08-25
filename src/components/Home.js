// import './App.css';
// import About from './components/About';
// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// import Alert from './components/Alert';
import Navbar from './Navbar';
import TextForm from './TextForm';
import Alert from './Alert';
import React, {useState} from 'react';
// import {BrowserRouter, Routes, Route} from 'react-router-dom'

function HomePage() {
  const [mode, setMode] = useState('light');// Weather dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      // setTimeout(()=>{
      //   document.title = 'TextUtils is amazing';
      // }, 2000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
      // setTimeout(()=>{
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    {/* <Navbar/> */}
    <Alert alert={alert}/>
    <div className="container">
    <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default HomePage;
