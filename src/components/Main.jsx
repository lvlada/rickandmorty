import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./main.css";
import Cards from "./Cards/Cards";
import Header from "../components/Header";

const Main = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h1>Characters</h1>
        <Cards />
      </div>
    </>
  );
};

export default Main;
