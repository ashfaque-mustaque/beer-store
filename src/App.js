import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {

  const [Mode, setMode] = useState('light'); // Set 'light' as the initial state
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#102456';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#f0f0f0';
      showAlert("Light mode has been enabled", "success");
    }
  };
  console.log(Mode)
  return (
    <div className={`App ${Mode === 'dark' ? 'dark-mode' : ''}`}>
      <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Alert alert={alert} />
        <Home />
      </div>
      <Footer Mode={Mode}/>
    </div>
  );
}

export default App;
