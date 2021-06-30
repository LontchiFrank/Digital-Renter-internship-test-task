import React from "react";

function Agenda({ el }) {
  return (
    <div className="link d-flex flex-row" style={{ marginBottom: "2em" }}>
      <div
        className="caselinks1 rounded-3 d-flex justify-content-center align-items-center mr-1"
        style={{
          backgroundColor: el.color,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3rem"
          height="3rem"
          fill="currentColor"
          class="bi bi-calendar-date "
          viewBox="0 0 16 16"
          style={{ marginRight: "1em" }}
        >
          <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z" />
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
        </svg>
      </div>
      <div className="take w-100 h-40 d-flex justify-content-between ">
        <div className="hold d-flex flex-column">
          <h6 style={{ fontWeight: "bold" }}> {el.msg}</h6>
          <h7>
            <i
              class="fas fa-map-marker-alt"
              style={{ marginRight: "0.5em" }}
            ></i>
            {el.per}{" "}
          </h7>
          <h8 style={{ fontSize: "12px", color: "blue" }}>{el.clr} </h8>
        </div>
        <div className=" res d-flex flex-column justify-content-end"></div>
      </div>
    </div>
  );
}

export default Agenda;
