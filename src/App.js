import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import Navbar from './components/homepage/navbar/Navbar'
import Jumbotron from './components/homepage/jumbotrons/Jumbotron';
import LoginModal from './components/homepage/loginModal/LoginModal';
// import Search from './components/homepage/search/search'

function App() {
  return (
    <div>
      <Navbar/>
      <Jumbotron/>
      <LoginModal/>
      {/* <Search/> */}
    </div>
  );
}

export default App;
