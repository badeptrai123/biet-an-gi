import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.scss";
import RandomWheel from "../../components/RandomWheel/RandomWheel";

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <Navbar />
      </header>
      <main className="home-content">
        <RandomWheel />
      </main>
    </div>
  );
};

export default Home;
