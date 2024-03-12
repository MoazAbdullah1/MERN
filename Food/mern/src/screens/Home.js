import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import Caraosal from "../Components/Caraosal";

export default function () {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <Caraosal />
      </div>

      <div className="m-3">
        <Card />
        <Card />
        <Card />

        <Card />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
