import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../common/navBar";

function Payments() {
    return (
        <div >
            <NavBar />
            Payments
            <h5>Balance : $00</h5>
            <div><button><NavLink to='/payments/withdraw'>Withdraw</NavLink></button></div>
            <div><button><NavLink to='/payments/deposit'>Deposit</NavLink></button></div>
        </div>
    );
}

export default Payments;
