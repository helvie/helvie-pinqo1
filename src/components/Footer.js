import styles from '../styles/Home.module.css';
import React, { useState } from 'react';
import Select from 'react-select';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

//////////////////////////////////////////////////////////////////////////////////////////////////


function Footer() {

    //------------------------------------- MENU LANGUES -----------------------------------------

    // Fonction gestion de changements de langue
    const handleChange = selectedOption => {
        setLangageState({ selectedOption });
    };

    // Options disponibles dans le menu
    const options = [
        { value: 'en', label: <><img className={styles.flag} src={'images/united-kingdom.png'} alt="UK flag" /> English</> },
        { value: 'fr', label: <><img className={styles.flag} src={'images/france.png'} alt="French flag" /> Français</> },
        { value: 'es', label: <><img className={styles.flag} src={'images/spain.png'} alt="Spain flag" /> Spain</> }
    ];

    // Etat local (stockage de la langue sélectionnée)
    const [langageState, setLangageState] = useState({
        selectedOption: options[0]
    });

    //°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°

    return (

        <>
            <div className={`${styles.footer}`}>

                <div className={styles.footerLeftContainer}>

                    {/* ------------------------ MENU DEROULANT LANGUES ------------------------ */}
                    
                    <Select
                        menuPlacement="top"
                        value={langageState.selectedOption}
                        onChange={handleChange}
                        options={options}
                        className={styles.footerSelect}
                        styles={{
                            control: (base) => ({
                                ...base,
                                backgroundColor: 'transparent',
                                borderColor: 'transparent',
                                boxShadow: 'none',
                                '&:hover': { borderColor: 'transparent' },
                            }),

                            indicatorSeparator: () => ({
                                display: 'none',
                            }),
                            singleValue: (base) => ({
                                ...base,
                                color: 'white',
                            }),
                            option: (base, state) => ({
                                ...base,
                                display: 'flex',
                                alignItems: 'center',
                                '&:hover': { backgroundColor: '#222' },
                                backgroundColor: state.isSelected ? 'black' : 'var(--black800)',
                                color: state.isSelected ? 'white' : 'white',
                            }),
                            menu: (base) => ({
                                ...base,
                                backgroundColor: 'transparent',
                            }),
                            dropdownIndicator: (base) => ({
                                ...base,
                                color: 'white',
                            }),
                            container: (base) => ({
                                ...base,
                                maxWidth: '170px',
                            }),
                        }}
                    />

                    {/* ----------------------------- LIENS DE BAS DE PAGE -------------------------------- */}

                    <ul className={styles.footerNav}>

                        <li><a>Privacy Policy</a></li>
                        <li><a> Terms of Use</a></li>
                        <li><a>Content Policy</a></li>
                        <li><a>Code of Ethics</a></li>

                    </ul>
                </div>

                <div className={styles.footerRightContainer}>

                    {/* ------------------------- ICONES RESEAUX SOCIAUX -------------------------- */}

                    <ul className={`${styles.footerIconsContainer} `}>
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faDiscord} />
                    </ul>

                    {/* ------------------------------- COPYRIGHT --------------------------------- */}

                    <p className={styles.footerCopyright}>
                        <FontAwesomeIcon
                            icon={faCopyright} /> 2022 Holocoin
                    </p>

                </div>
            </div>

        </>

    );
}

export default Footer;