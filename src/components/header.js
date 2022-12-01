import React from "react";
import '../styles/styles.scss';
import logo from '../images/logo.png';
import {NavLink} from 'react-router-dom';
const isActiveNav = ({ isActive }) => {
    return isActive ? "active" : "default";
};
function header(){

    function toggleBurger() {
        document.querySelector(".header__burger").classList.toggle("active")
        document.querySelector(".header__menu").classList.toggle("active")
        document.body.classList.toggle("lock")
    }
    function closeBurger(){
        if(document.querySelector(".header__burger").classList.contains("active")){
            document.body.classList.remove("lock")
            document.querySelector(".header__burger").classList.remove("active")
            document.querySelector(".header__menu").classList.remove("active")
        }
    }

    return(
        <div className="header">
            <div className="header__container _container">
                <img className="header__logo" src= {logo}/>
                <div className="header__burger" onClick={toggleBurger}>
                    <span></span>
                </div>
                <div className="header__menu">
                    <ul className="menu__list">
                        <li className="menu__item">
                            <NavLink end to="/" className={isActiveNav} onClick={closeBurger}>
                                Main
                            </NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to="/services" className={isActiveNav} onClick={closeBurger}>
                                Services
                            </NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to="/contacts" className={isActiveNav} onClick={closeBurger}>
                                Contacts
                            </NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to="/reviews" className={isActiveNav} onClick={closeBurger}>
                                Reviews
                            </NavLink>
                        </li>
                    </ul>     
                </div>
            </div>
        </div>
    )
}

export default header;