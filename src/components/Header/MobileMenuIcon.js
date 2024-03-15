import styles from '../../styles/Home.module.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


//////////////////////////////////////////////////////////////////////////////////////////////////


function MobileMenuIcon(props) {

    const toggleMenu = props.toggleMenu;

    return (

        <div className={styles.menuToggle} onClick={()=>toggleMenu()}>
            <FontAwesomeIcon className={styles.menuIcon} icon={faBars} />
        </div>

    );
}

export default MobileMenuIcon;