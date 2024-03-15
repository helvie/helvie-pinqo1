import styles from '../styles/Home.module.css';
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

//////////////////////////////////////////////////////////////////////////////////////////////////


function Header() {

    //------------------------------------ MENU MOBILE ------------------------------------------

    // Stockage de l'état du menu en taille mobile (ouvert/fermé)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Fonction du changement de l'état du menu en taille mobile
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    //------------------------ MENU DES LIENS VERS LES SECTIONS ----------------------------------

    // Stockage de la section en focus
    const [sectionSelected, setSectionSelected] = useState("About");

    // Nom des sections
    const sections = ["About", "Blog", "Roadmap", "Team", "Rarity", "Contact"]

    // Création des éléments du menu liens vers section à partir de du tableau sections
    const options = sections.map((section) => (

        <li key={section} className={`${styles.navbarListElement} ${isMenuOpen ? styles.open : ''}`}>
            <a
                href={`#${section}`}
                className={section === sectionSelected ? styles.active : ''}
                onClick={(e) => scrollToSection(e, section)}>
                {section}
            </a>
        </li>
    ));

    // Fonction pour mettre le focus sur une section
    const scrollToSection = (e, targetId) => {
        e.preventDefault();

        // Récuperation de l'id de l'élément à mettre en focus
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Ajustement du focus en fonction de la taille du header
            const screenWidth = window.innerWidth;
            const headerOffset = screenWidth < 1024 ? 400 : 110;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            // Déplacement à hauteur de la section en focus
            window.scrollTo({
                top: offsetPosition,
                // Défilement en douceur
                behavior: 'smooth'
            });
        }
        // Stockage de la section en focus (pour styliser le lien)
        setSectionSelected(targetId)
    };


    //°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°

    return (

        <>

            <div className={`${styles.navbar}`}>
                <div className={styles.headerLeftContainer}>

                    {/* --------------------------- Logo organisme ------------------------------*/}
                    
                    <div className={styles.logoContainer}><img  className={styles.imageLogo} src='images/vector.png' alt='Logo' />
                        <div className={styles.navbarOrganismTitle}>HOLOCOIN</div>
                    </div>

                    {/* -- Liens vers section - visibles sur ordi - ou sur mobile si mode ouvert -- */}
                    
                    <ul className={`${styles.navbarList} ${isMenuOpen ? styles.open : ''}`}>
                        {options}
                    </ul>
                </div>

                {/* ------------------------------- Bouton achat ---------------------------------*/}
                
                <button className={`${styles.classicButton} ${styles.navbarButton}`}>Buy Holocoin</button>
                
                {/* --------------------------Icone menu pour mobile -----------------------------*/}
                
                <div className={styles.menuToggle} onClick={toggleMenu}>
                    <FontAwesomeIcon className={styles.menuIcon} icon={faBars} />
                </div>
            </div>

        </>

    );
}


export default Header;