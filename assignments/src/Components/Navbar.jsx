import React from "react";
import styles from "../Css/NavBar.module.css";

export const NavBar = () => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.heading_img}>
                    <span><img src="https://immunifyme.com/img/ImmunifyMelogo.svg" alt="immunifyme logo"/></span>
                </div>
                <div className={styles.heading_div}>
                <ul className={styles.heading_body}>
                    <li className={styles.navLink}>I'am Parent</li>
                    <li className={styles.navLink}>About Us</li>
                    <li className={styles.navLink}>Project & Imports</li>
                    <li className={styles.navLink}>Contact Us</li>
                    <button className={styles.button}>Sign in</button>
                </ul>
                </div>     
            </div>
        </>
    )
}