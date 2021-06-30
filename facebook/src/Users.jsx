import React from "react";

function Users({ el }) {
  return (
    <div className="link d-flex flex-row mb-3 ">
      <div className="caselinks2 rounded-3 d-flex flex-row justify-content-center align-items-center mr-1">
        <img
          src={el.img}
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
          {el.msg}{" "}
        </h5>
        <h7>
          <i class={el.icon} style={{ color: el.clr }}></i> {el.per}{" "}
        </h7>
      </div>
    </div>
  );
}

export default Users;
