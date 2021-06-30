import React from "react";
import master from "./img/master.jpg";
import ui from "./img/ui.png";
import minimal from "./img/minimal.jpg";
import soft from "./img/soft.jpg";
function Part2() {
  return (
    <div className="row part2 d-flex flex-column pt-3">
      <div className="linkIn d-flex flex-row mb-3 ">
        <div className="caselinks2 rounded-3 d-flex  mr-1">
          <img
            src={master}
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
          <h5 className="d-flex " style={{ fontSize: "16px" }}>
            Hexa Bertania
          </h5>
          <h7>5 minutes ago </h7>
          <h6 className="pt-3">Quickly design UI elementss in 15mins</h6>
        </div>
      </div>
      <div className="cont d-flex  " style={{ paddingTop: "2em" }}>
        <div className="loaf">
          <img src={ui} alt="" className="hit" />
        </div>
        <div className="loaf">
          <img src={minimal} alt="" className="hit" />
        </div>
        <div className="loaf">
          <img src={soft} alt="" className="hit" />
        </div>
      </div>
      <div className="isoke d-flex flex-row ">
        <i
          class="far fa-thumbs-up d-flex flex-row"
          style={{ marginRight: "6em" }}
        >
          {" "}
          <h6 style={{ marginLeft: "0.5em", fontFamily: "sans-serif" }}>400</h6>
        </i>
        <i
          class="far fa-comment-alt d-flex flex-row"
          style={{ marginRight: "6em" }}
        >
          {" "}
          <h6 style={{ marginLeft: "0.5em", fontFamily: "sans-serif" }}>500</h6>
        </i>
        <i class="fas fa-share d-flex flex-row">
          {" "}
          <h6 style={{ marginLeft: "0.5em", fontFamily: "sans-serif" }}>
            100k
          </h6>
        </i>
      </div>
    </div>
  );
}

export default Part2;
