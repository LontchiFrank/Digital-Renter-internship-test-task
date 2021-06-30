import React from "react";

function Tabs({ el }) {
  return (
    <div className="link d-flex flex-row  mb-3">
      <div
        className="caselinks2 rounded-3 d-flex flex-row justify-content-center align-items-center mr-2"
        style={{
          backgroundColor: "#AAC2E7",
          marginRight: "1em",
        }}
      >
        <h3 class="des" style={{ fontSize: "20px", color: "#06248E" }}>
          {el.msg}{" "}
        </h3>
      </div>
      <h5
        className="d-flex justify-content-center align-items-center "
        style={{ fontSize: "16px" }}
      >
        {el.per}{" "}
      </h5>
    </div>
  );
}

export default Tabs;
