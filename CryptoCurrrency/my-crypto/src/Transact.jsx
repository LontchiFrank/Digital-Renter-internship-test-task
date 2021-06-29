import React from "react";
import "./App.css";
function Transact({ msg, Date, amt, clr, color, icon }) {
  return (
    <div className="row sol d-flex flex-row ">
      <div className="cases w-100 h-40  d-flex flex-row ">
        <div
          className="caselinks2 rounded-3 d-flex justify-content-center align-items-center mr-1"
          style={{ backgroundColor: color }}
        >
          <i class={icon} style={{ color: clr }}></i>
        </div>
        <div className="take w-100 h-40 d-flex justify-content-between ">
          <div className="hold d-flex flex-column">
            <h5>{msg} </h5>
            <h7> {Date}</h7>
          </div>
          <div className=" res d-flex justify-content-end">
            <h4 style={{ color: color }}> {amt} </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transact;
