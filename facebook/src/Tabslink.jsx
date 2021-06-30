import React from "react";

function Tabslink({ el }) {
  return (
    <div className="link d-flex flex-row  ">
      <div className="caselinks2 rounded-3 d-flex flex-row justify-content-center align-items-center mr-1">
        <i class={el.icon} style={{ fontSize: "20px", color: "#06248E" }}></i>
      </div>
      <h5
        className="d-flex justify-content-center align-items-center "
        style={{ fontSize: "16px" }}
      >
        {el.tite}{" "}
      </h5>
    </div>
  );
}

export default Tabslink;
