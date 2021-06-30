import React from "react";
import logo from "./img/facebook.png";
import Tabslink from "./Tabslink";
import Tabs from "./Tabs";
import man from "./img/images.jpg";
import girl from "./img/girl.jpg";
import beard from "./img/beard.png";
import boy from "./img/boy.jpg";
import master from "./img/master.jpg";
import work from "./img/work.png";
import "./App.css";
import Agenda from "./Agenda";
import Users from "./Users";
import Part from "./Part";
import Part1 from "./Part1";
import Part2 from "./Part2";
function Face() {
  const info = [
    {
      tite: "Covid-19 Information",

      amt: "-2.5%",
      icon: "fas fa-th-large",
      color: "#f19a7a",
      clr: "#E17C05",
    },
    {
      msg: "UR",
      tite: "Friends",

      amt: "+7.2%",
      icon: "fas fa-user-friends",
      color: "#FFF4BD",
      clr: "#F9E006",
    },
    {
      tite: "Groups",
      per: "UX Illustrator",
      amt: "-3.1%",
      icon: "fas fa-users",
      color: "#BDE3FF",
      clr: "#53BFFC",
    },
    {
      tite: "Maketplace",
      icon: "fas fa-store-alt",
      color: "#C8FFDB",
      clr: "#0CC94C",
    },
    {
      tite: "Watch",
      icon: "fas fa-tv",
      color: "#C8FFDB",
      clr: "#0CC94C",
    },
  ];
  const item = [
    {
      msg: "UD",
      per: "UI/UX Designer",
    },
    {
      msg: "UR",
      per: "UX Research",
    },
    {
      msg: "UI",
      per: "UX Illustrator",
    },
  ];
  const agenda = [
    {
      msg: "Designing Thinking",
      per: "Creative Town Hall",
      clr: "Details",
    },
    {
      msg: "Design Challenge",
      per: "Sun City",
      clr: "Details",
    },
    {
      msg: "Innovation Product 4.0",
      per: "Ciputra World",
      clr: "Details",
    },
  ];
  const user = [
    {
      img: beard,
      msg: "Innovation Product 4.0",
      icon: "fas fa-circle",
      per: "online",
      clr: "#07D340",
    },
    {
      img: boy,
      msg: "Innovation Product 4.0",
      per: "9:30",
      icon: "far fa-clock",
    },
    {
      img: work,
      msg: "Innovation Product 4.0",
      per: "9:30",
      icon: "far fa-clock",
    },
    {
      img: master,
      msg: "Innovation Product 4.0",
      per: "9:30",
      icon: "far fa-clock",
    },
  ];
  const person = user.map((el) => <Users el={el} />);
  const list = info.map((el) => <Tabslink el={el} />);
  const tabs = item.map((el) => <Tabs el={el} />);
  const cal = agenda.map((el) => <Agenda el={el} />);
  return (
    <div className="container-fluid object-container">
      <div className="row big-row">
        <div className="col-md-2 d-flex flex-column p-5 pt-5 py-3">
          <div className="logo-small d-flex ml-3 ">
            <img
              src={logo}
              alt=""
              className="img-logo w-20 h-100 rounded-circle "
            />
            <div className="search mr-3 ">
              <form class="container-fluid">
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon1">
                    <i class="fas fa-search"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search..."
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="bton d-flex justify-content-center">
            <button type="button" class="btn btn-primary rounded-3 w-100">
              Create New
            </button>
          </div>
          {list}
          <div className="link p-3 border-bottom pb-5">
            <h5 className="d-flex " style={{ color: "#297BF6" }}>
              See More
            </h5>
          </div>
          <div className="link p-3 ">
            <h3
              className="d-flex "
              style={{ fontSize: "20px", fontWeight: "bold" }}
            >
              Your shortcuts
            </h3>
          </div>
          {tabs}
        </div>
        <div className="col-md-7">
          <div className="plan">
            <div className="row sec2 d-flex justify-content-center">
              <div
                className="square d-flex justify-content-center align-items-center"
                style={{ borderBottom: "3px solid #0d6efd" }}
              >
                <i
                  class="fas fa-home"
                  style={{ fontSize: "25px", color: "##0d6efd" }}
                ></i>
              </div>
              <div className="square d-flex justify-content-center align-items-center">
                <i
                  class="fas fa-store-alt"
                  style={{ fontSize: "25px", color: "#C0C0C0" }}
                ></i>
              </div>
              <div className="square d-flex justify-content-center align-items-center">
                <i
                  class="fas fa-tv"
                  style={{ fontSize: "25px", color: "#C0C0C0" }}
                ></i>
              </div>
              <div className="square d-flex justify-content-center align-items-center">
                <i
                  class="fas fa-users"
                  style={{ fontSize: "25px", color: "#C0C0C0" }}
                ></i>
              </div>
              <div className="square d-flex justify-content-center align-items-center">
                <i
                  class="fas fa-gamepad"
                  style={{ fontSize: "25px", color: "#C0C0C0" }}
                ></i>
              </div>
            </div>
            <div className=" row sec3 d-flex justify-content-center">
              <Part />
              <Part1 />
              <Part2 />
            </div>
          </div>
        </div>
        <div className="col-md-3 pt-5">
          <div className="col firstcol d-flex flex-row ">
            <div
              className="ico mr-5"
              style={{ width: "50px", height: "50px", marginRight: "1.3em" }}
            >
              <i
                class="fab fa-facebook-messenger"
                style={{ fontSize: "35px" }}
              ></i>
            </div>
            <div
              className="ico mr-5"
              style={{ width: "50px", height: "50px", marginRight: "1.3em" }}
            >
              <i class="fas fa-bell" style={{ fontSize: "35px" }}></i>
            </div>
            <div
              className="logo-small d-flex pl-5 border-start  "
              style={{ paddingLeft: "0.5em" }}
            >
              <img
                src={man}
                alt=""
                className="img-logo w-10 h-10 rounded-circle pr-3"
                style={{ paddingRight: "0.5em" }}
              />
              <h6 className="d-flex justify-content-center pt-2">
                Hexa Pentania
              </h6>
              <i
                class="fas fa-chevron-down pt-2"
                style={{ paddingLeft: "0.5em" }}
              ></i>
            </div>
          </div>
          <div className="event d-flex justify-content-between">
            <h4>Events</h4>
            <h6 className="pt-2" style={{ color: "blue" }}>
              See All
            </h6>
          </div>
          {cal}
          <div className="event d-flex justify-content-between">
            <h4>Friend Requests</h4>
            <h6 className="pt-2" style={{ color: "blue" }}>
              See All
            </h6>
          </div>
          <div className="second d-flex justify-content-center">
            <div className="sec rounded-3">
              <div className="r1">
                <h7
                  className="d-flex justify-content-end"
                  style={{ paddingRight: "1em" }}
                >
                  2 week
                </h7>
              </div>
              <div className="r2 d-flex">
                <div className="c1 -flex justify-content-center">
                  <div
                    className="hols d-flex justify-content-center"
                    style={{
                      width: "90%",
                      height: "80px",
                      paddingLeft: "0.5em",
                    }}
                  >
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
                </div>
                <div className="c2  d-flex flex-column pl-3 pt-3 ">
                  <h5>Hexa Pentania</h5>
                  <h6 className="mb-4">1 Mutual Friend</h6>
                  <div className="r3">
                    <button type="button" class="btn btn-primary">
                      Primary
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary "
                      style={{ marginLeft: "1em" }}
                    >
                      Secondary
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="event d-flex justify-content-between">
            <h4>Contacts</h4>
          </div>
          {person}
        </div>
      </div>
    </div>
  );
}

export default Face;
