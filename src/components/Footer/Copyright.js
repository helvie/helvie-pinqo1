import styles from '../../styles/Home.module.css';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';


//////////////////////////////////////////////////////////////////////////////////////////////////


function Copyright() {

    return (

        <p className={styles.footerCopyright}>
            <FontAwesomeIcon
                icon={faCopyright} /> 2022 Holocoin
        </p>

    );
}

export default Copyright;