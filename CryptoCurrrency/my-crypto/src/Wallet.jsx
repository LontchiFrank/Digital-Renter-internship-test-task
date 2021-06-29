import React from "react";
import "./App.css";
function Wallet({ el }) {
  return (
    <div className="second">
      <div className="cases w-100 h-40  d-flex flex-row ">
        <div
          className="caselinks1 rounded-3 d-flex justify-content-center align-items-center mr-1"
          style={{
            backgroundColor: el.color,
          }}
        >
          <i class={el.icon} style={{ color: el.clr, fontSize: "25px" }}></i>
        </div>
        <div className="take w-100 h-40 d-flex justify-content-between ">
          <div className="hold d-flex flex-column">
            <h5> {el.msg}</h5>
            <h7>{el.tite} </h7>
          </div>
          <div className=" res d-flex flex-column justify-content-end">
            <h4>{el.per} </h4>
            <h7>{el.amt} </h7>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
