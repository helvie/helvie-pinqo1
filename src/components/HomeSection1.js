import styles from '../styles/Home.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

//////////////////////////////////////////////////////////////////////////////////////////////////


function HomeSection1() {

    return (

        <div className={`${styles.homeSection1} ${styles.section}`} id="About">


            <div className={styles.homeSection1FirstContainer}>

            {/* -------------------------------- Zone de texte ---------------------------------------- */}

                <div className={styles.homeSection1TextContainer}>

                    <h1>Lorem ipsum dolor sit amet, <span style={{ color: "var(--red)" }}>Ghirs</span></h1>
                    
                    <p className={styles.homeSection1Text}>Community-centered experiences.
                        Immersive worlds.</p>
                    
                    <p className={styles.homeSection1Annotation}>6,000 NFT homes waiting for new owners.
                        It’s our world, let’s make it personal.</p>
                    
                    <button className={`${styles.classicButton} ${styles.homeSection1Button}`}>Join the adventure</button>
                
                </div>

                {/* ------------------------------- Zone d'image ------------------------------- */}

                <div className={styles.homeSection1Image}>
                    <img src='images/imageSection1.png' alt='image' className={styles.imageSection1} />
                    <div className={styles.homeSection1ImageFilter}></div>
                </div>



                <div className={styles.homeSection1LogosContainer}>
                    <FontAwesomeIcon
                        icon={faTwitter}
                    />
                    <FontAwesomeIcon
                        icon={faFacebook}
                    />
                    <FontAwesomeIcon
                        icon={faInstagram}
                    />
                    <FontAwesomeIcon
                        icon={faDiscord}
                    />
                </div>

            </div>

            {/* ---------------------------- Bouton navigation pages ----------------------------- */}

            <div className={styles.containerOfArrowsContainer}>

                <div className={styles.arrowsContainer}>

                    {/* nb page + 1er bouton - inversés en mode mobile */}
                    <div className={styles.arrowsButtonFirstContainer}>
                        <p className={styles.arrowsButtonPage}>01/03</p>
                        <div className={`${styles.arrowButton} ${styles.arrowLeftButton}`}>&#60;</div>
                    </div>

                    <div className={styles.arrowButton}>&#62;</div>

                </div>

            </div>

        </div>

    );
}
export default HomeSection1;