import React from 'react'
import './App.css';
function Balance() {
    return (
        <div className="balance  ">
                <div className="data">
                    <div className="row r1">
                        <h5 className='text-uppercase' style={{color:'#dede'}}>Balance Detail</h5>
                        <h2 className='fs-1 fw-bold h-10 w-100 m-0 'style={{color:'white'}}>$ 2,136,045.00</h2>
                        <h5 className='fw-light' style={{color:'#ccc'}}>3.34105027 BTC</h5>
                    </div>
                    <div className="row r2">
                        <div className="col-md-6">
                            <h4 className='fw-bold' style={{color:'white'}}>$3,256.00</h4>
                            <h5 className='fw-light'style={{color:'#ccc'}}>Income</h5>
                        </div>
                        <div className="col-md-6">
                        <h4 className='fw-bold'style={{color:'white'}}>$1,289.00</h4>
                            <h5 className='fw-light'style={{color:'#ccc'}}>Expense</h5>
                        </div>
                    </div>
                    <div className="row r3">
                        <div className="col-md-6  d-flex justify-content-center p-2">
                        <button type="button" className="bton1 h-95 w-100 ">
                            <h5>RECIEVE</h5>
                            </button>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center p-2">
                        <button type="button" className=" bton h-95 w-100 "> <h5>SEND</h5></button>
                        </div>
                    </div>

                </div>
        </div>
    )
}

export default Balance
