import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
import Select from 'react-select';


//////////////////////////////////////////////////////////////////////////////////////////////////


function LanguagesMenu() {

    // Etat local (stockage de la langue sélectionnée)
    const [languageState, setLanguageState] = useState(null);

    // Fonction gestion de changements de langue
    const handleChange = selectedOption => {
        setLanguageState({ selectedOption });
    };

    // Options disponibles dans le menu
    const options = [
        { value: 'en', label: <><img className={styles.flag} src={'images/united-kingdom.png'} alt="UK flag" /> English</> },
        { value: 'fr', label: <><img className={styles.flag} src={'images/france.png'} alt="French flag" /> Français</> },
        { value: 'es', label: <><img className={styles.flag} src={'images/spain.png'} alt="Spain flag" /> Spain</> }
    ];

    useEffect(() => {
        setLanguageState({
            selectedOption: options[0]
        });
    }, []);



    //°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°

    
    return (


        languageState && (<Select
            menuPlacement="top"
            value={languageState.selectedOption}
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
        />)



    );
}

export default LanguagesMenu;