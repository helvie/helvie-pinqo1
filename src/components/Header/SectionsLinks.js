import styles from '../../styles/Home.module.css';
import React from 'react';


//////////////////////////////////////////////////////////////////////////////////////////////////


function SectionsLinks(props) {

    const {isMenuOpen, setSectionSelected, sectionSelected, scrollToSection} = props;

    console.log(isMenuOpen)

    // Nom des sections
    const sections = ["About", "Blog", "Roadmap", "Team", "Rarity", "Contact"]

    // Création des éléments du menu liens vers section à partir de du tableau sections
    const options = sections.map((section) => (

        <li
            key={section}
            className={`${styles.navbarListElement} ${isMenuOpen ? styles.open : ''}`}>
            <a
                href={`#${section}`}
                className={section === sectionSelected ? styles.active : ''}
                onClick={(e) => scrollToSection(e, section, setSectionSelected)}>
                {section}
            </a>
        </li>
    ));


    return (

        <ul className={`${styles.navbarList} ${isMenuOpen ? styles.open : ''}`}>
        {options}
    </ul>

    );
}

export default SectionsLinks;