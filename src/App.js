import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import SignUp from './Pages/SignUp';
import Order from './Pages/Order';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/services' element={ <Services/> } />
          <Route path='/about' element={<About/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/order' element={<Order/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
