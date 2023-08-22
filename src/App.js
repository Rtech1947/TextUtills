import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import About from './Component/About';
import  React ,{ useState } from 'react';
import Alert from './Component/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode,setMode]= useState('light');
  const [alert,setAlert]= useState(null);
  
  const showAlert=(massage, type)=>{
    setAlert({
      msg: massage,
      type: type
    })
    
    setTimeout(() => {
      setAlert(null);
    }, 800);
  }


  const toggle =()=>{
    if(mode ==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Darkmode has been enabled','success');
      document.title ="textuttils - dark mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Lightmode has been enabled','success');
      document.title ="textuttils - light mode"
    }
  }
  return (
    <>
    <Router>
      {/* <Navbar title ="textutills2" about="About us" /> */}
      <Navbar  mode={mode} toggleMode={toggle}/>
      <Alert alert ={alert}/>  
      <div className='container my-3'>
        <Routes>
            <Route exact path ="/textutills" element={ <TextForm showAlert={showAlert} text = "Enter text to analyze" mode={mode}/>} />
            <Route exact path  ="/about" element={ <About mode ={mode}/>} />
        </Routes>
        
        
      </div>
      </Router>
    </>
  );
}

export default App;
