import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  AddTeam,
  Navigation,
  Home,
  ShowTeam,
  ShowProg,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AddTeam" element={<AddTeam />} />
      <Route path="/ShowTeam" element={<ShowTeam />} />
      <Route path="/ShowProg" element={<ShowProg />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);


