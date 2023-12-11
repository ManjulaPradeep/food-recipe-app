import React from "react";
import './Footer.css';



const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();    return (
        <div className="footer-wrapper">
            {/* <h3>&copy; MJ Sotf.Inc {(new Date().getFullYear())}</h3> */}
            <h3>Copyrights &copy; {year} MJ Sotf.Inc</h3>

        </div>
    )
}

export default Footer;