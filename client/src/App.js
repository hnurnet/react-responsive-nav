
import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Search from "./components/Search";
import List from "./components/List";
import Navbar from "./pages/Navbar";
import "./Styles/main.css"

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes> 
        <Route path="/" element={<Home />}/>
        <Route path="/courses" element={<Courses />}>
          <Route path="list" element={<List />} />
          <Route path="search" element={<Search />} />
          </Route>
      </Routes>
    </Router>
     
    </>
  );
}

export default App;
