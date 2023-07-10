import './App.css';
import Navbar from './components/Navbar';
//import About from './components/About';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
}  from "react-router-dom";


function App() {
  const[mode,setMode]=useState("grey")
  const[nmode,setNmode]=useState("Dark")
  const[alert,setAlert]=useState(null)
  const showAlert = (message, type) => {
    setAlert( {
      msg: message,
      type: type
    })
  setTimeout(() => {
    setAlert(null)
    
  },1500);
  };
  const toggleMode =()=>{
    if(mode ==="grey")
    {
      setMode("black")
      document.body.style.backgroundColor='#072b60'
      showAlert("Dark Mode is Enabled","success")
      setNmode("Light")
     // setInterval(()=>{
      //  document.title="TextUtils is amazing"
      //},2000)
      //document.title="TextUtils-Dark"
     
    }else
    {
      setMode('grey')
      document.body.style.backgroundColor='white'
      showAlert("Light Mode is Enabled","success")
      setNmode("Dark")
      //document.title="TextUtils-Light"
    }
 
  }
 
  return (
   
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} nmode={nmode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about"element={<About />}>
            </Route>
            <Route exact path="/"
              element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
   
}

export default App;
