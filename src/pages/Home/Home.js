import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import logo from "../../assets/logo.png";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <div className="logo">
          <img src={logo} alt="Website Logo" />
        </div>
        <Navbar />
      </header>
      <main className="home-content">
      </main>
    </div>
  );
};

export default Home;