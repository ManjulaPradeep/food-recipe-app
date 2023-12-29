// import React from "react";
// import { Link } from "react-router-dom";
import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {

    // const [click, setClick] = useState(false);

    // const handleClick = () => setClick(!click);

    return (
        // <div>
        //     <nav className="navbar">
        //         <div className="nav-container">
        //             <NavLink exact to="/" className="nav-logo">
        //                 CodeBucks
        //                 <i className="fas fa-code"></i>
        //             </NavLink>

        //             <ul className={click ? "nav-menu active" : "nav-menu"}>
        //                 <li className="nav-item">
        //                     <NavLink
        //                         exact
        //                         to="/"
        //                         activeClassName="active"
        //                         className="nav-links"
        //                         onClick={handleClick}
        //                     >
        //                         Home
        //                     </NavLink>
        //                 </li>
        //                 <li className="nav-item">
        //                     <NavLink
        //                         exact
        //                         to="/About"
        //                         activeClassName="active"
        //                         className="nav-links"
        //                         onClick={handleClick}
        //                     >
        //                         About
        //                     </NavLink>
        //                 </li>
        //                 <li className="nav-item">
        //                     <NavLink
        //                         exact
        //                         to="/blog"
        //                         activeClassName="active"
        //                         className="nav-links"
        //                         onClick={handleClick}
        //                     >
        //                         Blog
        //                     </NavLink>
        //                 </li>
        //                 <li className="nav-item">
        //                     <NavLink
        //                         exact
        //                         to="/contact"
        //                         activeClassName="active"
        //                         className="nav-links"
        //                         onClick={handleClick}
        //                     >
        //                         Contact Us
        //                     </NavLink>
        //                 </li>
        //             </ul>
        //             {/* <div className="nav-icon" onClick={handleClick}>
        //                 <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        //             </div> */}
        //         </div>
        //     </nav>
        // </div>

        <div>
            {/* above div's id ="abc" */}
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/MealPage"}>Meals</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/About"}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/Contact"}>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/MealPage2"}>MealPage2</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;