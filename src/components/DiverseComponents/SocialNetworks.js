import styles from '../../styles/Home.module.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


//////////////////////////////////////////////////////////////////////////////////////////////////


function SocialNetworks() {

    return (

        <ul className={`${styles.socialNetworksContainer} `}>
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faDiscord} />
        </ul>

    );
}

export default SocialNetworks;