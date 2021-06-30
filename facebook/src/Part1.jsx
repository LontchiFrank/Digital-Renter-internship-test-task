import React from "react";
import girl from "./img/girl.jpg";
function Part1() {
  return (
    <div className="row part1  pt-3">
      <div className="linkIn d-flex flex-row mb-3 ">
        <div className="caselinks2 rounded-3 d-flex  mr-1">
          <img
            src={girl}
            alt=""
            className=" w-10 h-10 rounded-circle pr-3"
            style={{
              width: "100%",
              height: "100%",
              paddingRight: "0.5em",
            }}
          />
        </div>
        <div className="txt d-flex flex-column ">
          <h5
            className="d-flex justify-content-center align-items-center "
            style={{ fontSize: "16px" }}
          >
            Hexa Bertania
          </h5>
          <h7>
            <i class="fas fa-chevron-down"></i> Public{" "}
          </h7>
        </div>
      </div>
      <div className="mind d-flex justify-content-center align-items-center">
        <div className="formular">
          <h4>What's On Your Mind ?</h4>
        </div>
      </div>
      <div className="live d-flex pl-5">
        <i
          class="fas fa-video d-flex flex-row "
          style={{ width: "30%", fontSize: "25px", color: "red" }}
        >
          <h5
            style={{
              marginLeft: "0.5em",
              color: "black",
              fontFamily: "sans-serif",
            }}
          >
            Live Video
          </h5>{" "}
        </i>
        <i
          class="far fa-images d-flex flex-row"
          style={{ width: "30%", fontSize: "25px", color: "green" }}
        >
          <h5
            style={{
              marginLeft: "0.5em",
              color: "black",
              fontFamily: "sans-serif",
            }}
          >
            {" "}
            Photo/Video
          </h5>{" "}
        </i>
        <i
          class="fas fa-smile-beam d-flex flex-row"
          style={{ width: "30%", fontSize: "25px" }}
        >
          <h5
            style={{
              marginLeft: "0.5em",
              color: "black",
              fontFamily: "sans-serif",
            }}
          >
            Feeding/Activity
          </h5>{" "}
        </i>
      </div>
    </div>
  );
}

export default Part1;
