import React from "react";
import Cards from "./Cards";
import Carx from "./Carx";
import Family from "./img/Family.jpg";
import Ape from "./img/Ape.jpg";
import city from "./img/city.jpg";
import boy from "./img/boy.jpg";
import work from "./img/work.png";
import master from "./img/master.jpg";
import girl from "./img/girl.jpg";
import "./App.css";
function Part() {
  return (
    <div className="row part d-flex justify-content-center align-items-center pt-3">
      <Cards logo={girl} msg="Hexa Bertania" />
      <Carx picture={Family} logo={boy} msg="William Afferd" />
      <Carx picture={Ape} logo={work} msg="Pentania Gloria" />
      <Carx picture={city} logo={master} msg="Jessica S." />
    </div>
  );
}

export default Part;
