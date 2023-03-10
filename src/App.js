import React from "react";
import { BrowserRouter as Router, Outlet, Route ,Routes} from "react-router-dom";
import Home from "./HomePage";
import Tags from "./Tags";
import "./App.css"

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<Home/>} />
      
      <Route path="/tags" exact element={<Tags/>} />
      </Routes>
    </Router>
  );
};

export default App;
