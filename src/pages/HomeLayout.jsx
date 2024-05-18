import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer, Navbar } from "../components";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
