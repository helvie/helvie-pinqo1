import styles from '../../styles/Home.module.css';
import React, { useState } from 'react';

import BottomPageLinks from './BottomPageLinks';
import Copyright from './Copyright';
import LanguagesMenu from './LanguagesMenu';
import SocialNetworks from '../DiverseComponents/SocialNetworks';


//////////////////////////////////////////////////////////////////////////////////////////////////


function Footer() {


    return (

        <>
            <div className={`${styles.footer}`}>

                <div className={styles.footerLeftContainer}>

                    <LanguagesMenu/>
                    <BottomPageLinks/>

                </div>

                <div className={styles.footerRightContainer}>

                    <SocialNetworks/>
                    <Copyright/>

                </div>
            </div>

        </>

    );
}

export default Footer;