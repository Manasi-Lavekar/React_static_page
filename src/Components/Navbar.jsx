// import React from "react";
import search_logo from "../assets/IMAGE.png";
import styles from './Navbar.module.css';


function Navbar(){
    return(
        <nav>
        <div className={styles.nav_components}>
            <div className={styles.search}>
                <div>
                <img src={search_logo} alt="search_logo"/>
                </div>
            </div>
            <div className={styles.first_two}>
                <p>Categories</p>
                <p> Website Builders</p>
            </div>
            <div className={styles.last_one}>
                <p> Todays deals</p>
            </div>
        </div>
        </nav>
    );
}

export default Navbar;