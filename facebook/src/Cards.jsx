import React from "react";

function Cards({ logo, msg }) {
  return (
    <div className="cart shadow p-3 mb-5 bg-body rounded d-flex justify-content-center">
      <div className="pix d-flex flex-column ">
        <div className="photo d-flex flex-column  justify-content-center align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3rem"
            height="3rem"
            fill="currentColor"
            class="bi bi-file-earmark-plus"
            viewBox="0 0 16 16"
            style={{ color: "#C7C7C7" }}
          >
            <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z" />
            <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
          </svg>
          <h6 style={{ color: "#C7C7C7" }}>Create Story</h6>
        </div>
        <div className="mace d-flex  justify-content-center align-items-center">
          <div className="manup d-flex flex-row ">
            <div className="caselinks3 rounded-3 d-flex flex-row justify-content-center ">
              <img
                src={logo}
                alt=""
                className=" w-10 h-10 rounded-circle pr-3"
                style={{
                  width: "100%",
                  height: "100%",
                  paddingRight: "0.5em",
                }}
              />
              <div className="divid">
                <h7
                  className="d-flex justify-content-center "
                  style={{ fontSize: "16px", width: "100%", height: "100%" }}
                >
                  {msg}{" "}
                </h7>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
