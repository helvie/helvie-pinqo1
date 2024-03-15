import styles from '../../styles/Home.module.css';
import React, { useState } from 'react';

import OrganismLogo from './OrganismLogo';
import ShoppingButton from './ShoppingButton';
import MobileMenuIcon from './MobileMenuIcon';
import SectionsLinks from './SectionsLinks';
import scrollToSection from '../../utils/scrollToSection'


//////////////////////////////////////////////////////////////////////////////////////////////////


function Header() {

    // Stockage de l'état du menu en taille mobile (ouvert/fermé)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Fonction du changement de l'état du menu en taille mobile
    const toggleMenu = () => {
        console.log("cliqué")
        setIsMenuOpen(!isMenuOpen);
    };

    // Stockage de la section en focus
    const [sectionSelected, setSectionSelected] = useState("About");


    //°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°


    return (

            <div className={`${styles.navbar}`}>
                <div className={styles.headerLeftContainer}>

                    <OrganismLogo />

                    {/* -- Liens vers section - visibles sur ordi - ou sur mobile si mode ouvert -- */}
                    <SectionsLinks
                        scrollToSection={scrollToSection}
                        isMenuOpen={isMenuOpen}
                        setSectionSelected={setSectionSelected}
                        sectionSelected={sectionSelected}
                    />

                </div>

                <ShoppingButton />
                <MobileMenuIcon toggleMenu={toggleMenu} />

            </div>

    );
}


export default Header;