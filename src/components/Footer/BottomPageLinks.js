import styles from '../../styles/Home.module.css';
import React from 'react';


//////////////////////////////////////////////////////////////////////////////////////////////////


function LanguagesMenu() {

    return (

        <ul className={styles.footerNav}>

            <li><a>Privacy Policy</a></li>
            <li><a> Terms of Use</a></li>
            <li><a>Content Policy</a></li>
            <li><a>Code of Ethics</a></li>

        </ul>

    );
}

export default LanguagesMenu;