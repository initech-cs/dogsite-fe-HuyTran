import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./App.css";
import Navbar from "./components/homepage/navbar/Navbar";
import KennelDetail from "./components/homepage/jumbotrons/Jumbotron";
import LoginModal from "./components/homepage/loginModal/LoginModal";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Breeds from "./components/breedpage/Breeds";
import BreedDetail from "./components/breeddetailpage/BreedDetail";
import Kennels from "./components/kennelspage/Kennels";
import Purebred from "./components/Purebred/Purebred";
import UserProfile from "./components/userProfile/UserProfile";
import CreateKennelModal from "./components/createKennelModal/CreateKennelModal";

function App() {
  return (
    <Router>
      <Navbar />
      
      <LoginModal />
      <CreateKennelModal/>
      {/* <Search/> */}
      <Switch>
        <Route path="/users/:userId" exact={true}><UserProfile/></Route>
        <Route path="/purebreds" exact={true}><Purebred /></Route>
        <Route path="/kennels" exact={true}><Kennels /></Route>
        <Route path="/kennels/:kennelId/purebreds"><Purebred/></Route>
        <Route path="/kennels/:kennelId"><KennelDetail /></Route>
        <Route path="/"><Breeds /></Route>
      </Switch>
    </Router>
  );
}

export default App;
