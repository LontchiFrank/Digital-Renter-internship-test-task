import React from "react";
import "./App.css";
import Balance from "./Balance";
import Fees from "./Fees";
import Transact from "./Transact";
import logo from "./img/Group 1.jpg";
import King from "./img/KingBran.PNG.png";
import Wallet from "./Wallet";
function Crypto() {
  const info = [
    {
      msg: "BTE",
      tite: "Bitcoin",
      per: "37%",
      amt: "-2.5%",
      icon: "fab fa-btc",
      color: "#f19a7a",
      clr: "#E17C05",
    },
    {
      msg: "DAI",
      tite: "Dai",
      per: "23%",
      amt: "+7.2%",
      icon: "fas fa-ruble-sign",
      color: "#FFF4BD",
      clr: "#F9E006",
    },
    {
      msg: "XRP",
      tite: "Ripple",
      per: "20%",
      amt: "-3.1%",
      icon: "fas fa-rupee-sign",
      color: "#BDE3FF",
      clr: "#53BFFC",
    },
    {
      msg: "USDT",
      tite: "Tether",
      per: "17%",
      amt: "+1.8%",
      icon: "fas fa-tenge",
      color: "#C8FFDB",
      clr: "#0CC94C",
    },
  ];
  const list = info.map((el) => <Wallet el={el} />);

  return (
    <div className="container-fluid main-container pt-5 h-100vh">
      <div className="row main-row">
        <div className="col-md-2">
          <div className="logo-small d-flex justify-content-center">
            <img src={logo} alt="" className="img-logo w-20 h-100 " />
          </div>
          <div className="case w-100 h-40 d-flex justify-content-center mb-5 ">
            <div className="caselinks rounded-3 d-flex justify-content-center align-items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                fill="currentColor"
                class="bi bi-house"
                viewBox="0 0 16 16"
                color="white"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                />
              </svg>
            </div>
          </div>
          <div className="case w-100 h-40 d-flex justify-content-center mb-5 ">
            <div className="caselink rounded-3 border border-4 d-flex justify-content-center align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                fill="currentColor"
                class="bi bi-caret-left"
                viewBox="0 0 16 16"
                color="#878686"
              >
                <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                fill="currentColor"
                class="bi bi-caret-right"
                viewBox="0 0 16 16"
                color="#878686"
              >
                <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
              </svg>
            </div>
          </div>
          <div className="case1 w-100 h-40 d-flex justify-content-center ">
            <div className="caselink rounded-3 border border-4 d-flex justify-content-center align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                fill="currentColor"
                class="bi bi-pie-chart"
                viewBox="0 0 16 16"
                color="#878686"
              >
                <path d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793V1.018zm1 0V7.5h6.482A7.001 7.001 0 0 0 8.5 1.018zM14.982 8.5H8.207l-4.79 4.79A7 7 0 0 0 14.982 8.5zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
              </svg>
            </div>
          </div>
          <div className="case w-100 h-40 d-flex justify-content-center ">
            <div className="caselink1 rounded-3 border border-4 d-flex justify-content-center align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                fill="currentColor"
                class="bi bi-plus-lg"
                viewBox="0 0 16 16"
                color="white"
              >
                <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="row first-row pt-5">
            <div className="col-md-7 pt-5">
              <Balance />
            </div>
            <div className="col-md-5 ">
              <div className="row r4 ">
                <h6 className="ml-5 w-100 h-30 mb-3">FEES</h6>
                <Fees percent="0.069%" dis="MAKER" />
              </div>
              <div className="row r5 pt-3">
                <Fees percent="0.075%" dis="TAKER" />
              </div>
            </div>
          </div>
          <div className="row r6 pt-5">
            <div className="row r7 d-flex flex-row ">
              <h6 className=" trans text-uppercase w-50 ">transactions</h6>
              <h6 className="view text-uppercase w-50 d-flex justify-content-center ">
                view all
              </h6>
              <div className="row r8 d-flex flex-row">
                <Transact
                  arrow="bi bi-arrow-up"
                  msg="Sent BTE"
                  Date="12 Nov, 2020"
                  amt="-$1,289.00"
                  color="#f8bca6"
                  clr="#FB7E0A"
                  icon="fas fa-arrow-up"
                />
                <Transact
                  arrow="bi bi-arrow-down"
                  msg="Recieved USDT"
                  Date="12 Nov, 2020"
                  amt="-$1,045.00"
                  color="#dedede"
                  clr="#90908F"
                  icon="fas fa-arrow-down"
                />
                <Transact
                  arrow="bi bi-arrow-up"
                  msg="Sent XRP"
                  Date="12 Nov, 2020"
                  amt="-$2,666.00"
                  color="#f8bca6"
                  clr="#FB7E0A"
                  icon="fas fa-arrow-up"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="col firstcol d-flex flex-row ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              fill="currentColor"
              class="bi bi-search mr-5"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              fill="currentColor"
              class="bi bi-bell mr-5"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              fill="currentColor"
              class="bi bi-gear mr-5 "
              viewBox="0 0 16 16"
            >
              <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
              <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
            </svg>
            <img className="w-10 h-10 rounded-circle" src={King} alt="" />
          </div>
          <div className="col secondcol ">
            <div className="d-flex flex-row">
              <h6 className=" trans text-uppercase w-50 ">wallets</h6>
              <h6 className="view text-uppercase w-50 d-flex justify-content-center ">
                view all
              </h6>
            </div>
            {list}
          </div>
          <div className="col thirdcol">
            <div className="d-flex flex-row">
              <h6 className=" trans text-uppercase w-50 ">security</h6>
              <h6 className="view text-uppercase w-50 d-flex justify-content-center ">
                view all
              </h6>
            </div>
            <div className="box border border-2 mb-3 d-flex flex-row">
              <div className="some d-flex flex-column justify-content-center ml-3">
                <h5> Identity</h5>
                <h7>Disable</h7>
              </div>
              <div className="some1 d-flex  justify-content-center align-items-center">
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
            <div className="box  border border-2 d-flex flex-row">
              <div className="some d-flex flex-column justify-content-center ml-3">
                <h5> Identity</h5>
                <h7>Disable</h7>
              </div>
              <div className="some1 d-flex  justify-content-center align-items-center">
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crypto;
