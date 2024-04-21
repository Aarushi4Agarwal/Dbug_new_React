import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar.jsx";
import Destinations from "./components/Destinations.jsx";
import Search from "./components/Search.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
    </div>
  );
}

export default App;
