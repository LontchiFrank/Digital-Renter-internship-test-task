import React from "react";

function Carx({ picture, logo, msg }) {
  return (
    <div className="cart shadow p-3 mb-5 bg-body rounded d-flex justify-content-center">
      <div className="pix d-flex flex-column ">
        <div className="photo d-flex  justify-content-center align-items-center">
          <img src={picture} alt="" className="same" />
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

export default Carx;
