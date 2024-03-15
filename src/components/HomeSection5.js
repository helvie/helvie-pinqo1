import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Thumbnail from './DiverseComponents/Thumbnail';
// Tableau contenant les différentes tailles de vignettes
import { thumbnailsArray } from '../datas/datas';
import PagesArrows from './DiverseComponents/PagesArrows';


//////////////////////////////////////////////////////////////////////////////////////////////////


function HomeSection5(props) {

    // Page en cours
    const [page, setPage] = useState(1);

    // Nombre total de pages
    const [nbPages, setNbPages] = useState(1);

    // Ensemble des vignettes en vue de l'affichage
    const [rarityImages, setRarityImages] = useState([]);

    // Vignettes à afficher en fonction de la page choisie
    const [rarityImagesDisplay, setRarityImagesDisplay] = useState([]);

    // Définition de la taille des vignettes en fonction de la taille des écrans
    const thumbnailParametersSize = props.width < 1024 ? thumbnailsArray.medium : thumbnailsArray.large;


    useEffect(() => {

        const images = [];

        // Création des vignettes en vue de l'affichage
        for (let nbImage = 0; nbImage < 9; nbImage++) {
            images.push(<Thumbnail
                key={nbImage}
                id={nbImage}
                parameters={thumbnailParametersSize}
                image="images/robot.png"
                alt={nbImage} />);
        }
        // Stockage des vignettes 
        setRarityImages(images);

        // Stockage de 3 premières vignettes, par défaut
        setRarityImagesDisplay(images.slice(0, 3));

        // Initialisation et stockage du nombre de pages
        const nbOfPages = Math.ceil(images.length / 3);
        setNbPages(nbOfPages);

    }, []);

    // Fonction d'affichage des vignettes suivantes    
    const nextImages = () => {
        let thisPage;
        let thisIndex;
        thisPage = page < nbPages ? thisPage = page + 1 : thisPage = 1;
        thisIndex = thisPage === 1 ? 0 : (thisPage - 1) * 3;
        setPage(thisPage);
        setRarityImagesDisplay(rarityImages.slice(thisIndex, thisIndex + 3));
    };

    // Fonction d'affichage des vignettes précédentes    
    const prevImages = () => {
        let thisPage;
        let thisIndex;
        thisPage = page > 1 ? thisPage = page - 1 : thisPage = nbPages;
        thisIndex = thisPage === 1 ? 0 : (thisPage - 1) * 3;
        setPage(thisPage);
        setRarityImagesDisplay(rarityImages.slice(thisIndex, thisIndex + 3));
    };


    //°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°


    return (
        <div className={styles.homeSection5} id='Rarity'>

            <h2 className={styles.homeTitle}>
                <span>Rarity</span>
            </h2>

            {/* -------------------------------- Zone vignettes ---------------------------- */}


            <div className={styles.homeSection5ImagesContainer}>
                {rarityImagesDisplay && rarityImagesDisplay}
            </div>

            {/* --------------------------- Sélection page ---------------------------- */}

            <PagesArrows
                page={page}
                nbPages={nbPages}
                nextImages={nextImages}
                prevImages={prevImages}
            />

        </div>
    );
}
export default HomeSection5;