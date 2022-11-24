import "./Landing.css";
import Animations from "./Animations";
import React, { useEffect, useCallback } from "react";
import { Contentfull } from "../Contentfull";

const Landing = () => {
  const getLanding = useCallback(async () => {
    try {
      var response = Contentfull();
      await response.getEntry(process.env.REACT_APP_GETENTRY).then((entry) => {
        cleanData(entry.fields);
      });
      //console.log(response);
    } catch (error) {
      console.log(error);
    }
  });

  function cleanData(params) {
    console.log(params);
    document.getElementById("hero-title").innerText = "";
    document.getElementById("logo").src = params.logo.fields.file.url;
    document.getElementById("hero-title").innerText = params.h1;
    document.getElementById("first-card").src = params.doctor.fields.file.url;
    document.getElementById("second-card").src = params.nurse.fields.file.url;
    document.getElementById("third-card").src =
      params.doctorholds.fields.file.url;
    document.getElementById("forth-card").src = params.surgery.fields.file.url;
  }

  useEffect(() => {
    getLanding();
  }, [getLanding]);
  Animations();
  return (
    <div id="content">
      <nav id="navbar">
        <img id="logo" alt="Imperial logo"></img>
        <a href="/">Productos</a>
        <a href="/">Ingresar</a>
        <a href="/">Pagos</a>
      </nav>
      <div></div>
      <section className="content-hero">
        <h1 id="hero-title">hola</h1>
        <div className="column-container">
          <article className="first-card-container card-small">
            <img id="first-card"></img>
          </article>
          <article className="second-card-container card-big">
            <img id="second-card"></img>
          </article>
        </div>
        <div className="column-container">
          <article className="third-card-container card-big">
            <img id="third-card"></img>
          </article>
          <article className="forth-card-container card-small">
            <img id="forth-card"></img>
          </article>
        </div>
      </section>
    </div>
  );
};
export default Landing;
