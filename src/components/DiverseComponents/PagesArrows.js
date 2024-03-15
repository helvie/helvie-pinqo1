import styles from '../../styles/Home.module.css';
import React from 'react';


//////////////////////////////////////////////////////////////////////////////////////////////////


function PagesArrows(props) {

    const {page, nbPages, nextImages, prevImages} = props;


    return (

        <div className={styles.containerOfArrowsContainer}>

            <div className={styles.arrowsContainer}>

                <div className={styles.arrowsButtonFirstContainer}>
                    {page && <p>{page}/{nbPages}</p>}
                    <div className={`${styles.arrowButton} ${styles.arrowLeftButton}`} onClick={() => prevImages()}><span>&#60;</span></div>
                </div>
                <div className={styles.arrowButton} onClick={() => nextImages()}>&#62;</div>

            </div>
        </div>
    );
}

export default PagesArrows;