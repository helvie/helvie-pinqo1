import styles from '../../styles/Home.module.css';
import React from 'react';


//////////////////////////////////////////////////////////////////////////////////////////////////


function OrganismLogo() {

    return (

        <div className={styles.logoContainer}><img className={styles.imageLogo} src='images/vector.png' alt='Logo' />
            <div className={styles.navbarOrganismTitle}>HOLOCOIN</div>
        </div>

    );
}

export default OrganismLogo;