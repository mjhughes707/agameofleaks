import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Header className="header" />
      <Footer className="footer" />
      <Sidebar className="sidebar" />
    </div>
  );
}

export default App;
