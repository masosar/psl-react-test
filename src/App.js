import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Users from "./components/Users";
import "./styles/styles.css";

function App() {
  return (
    <div className="page-container">
      <Header />
      <Users />
      <Footer />
    </div>
  );
}

export default App;
