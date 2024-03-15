import styles from '../styles/Home.module.css';

import SocialNetworks from './DiverseComponents/SocialNetworks';
import PagesArrows from './DiverseComponents/PagesArrows';


//////////////////////////////////////////////////////////////////////////////////////////////////


function HomeSection1() {

    return (

        <div className={styles.homeSection1} id="About">


            <div className={styles.homeSection1FirstContainer}>

                {/* -------------------------------- Zone de texte ---------------------------------------- */}

                <div className={styles.homeSection1TextContainer}>

                    <h1>Lorem ipsum dolor sit amet, <span style={{ color: "var(--red)" }}>Ghirs</span></h1>

                    <p className={styles.homeSection1Text}>Community-centered experiences.
                        Immersive worlds.</p>

                    <p className={styles.homeSection1Annotation}>6,000 NFT homes waiting for new owners.
                        It’s our world, let’s make it personal.</p>

                    <button className={styles.classicButton}>Join the adventure</button>

                </div>

                {/* ------------------------------- Zone d'image ------------------------------- */}

                <div className={styles.homeSection1Image}>
                    <img src='images/imageSection1.png' alt='image' className={styles.imageSection1} />
                    <div className={styles.homeSection1ImageFilter}></div>
                </div>

                {/* ---------------------------- Logos réseaux sociaux ----------------------------- */}

                <SocialNetworks />

            </div>

            {/* ---------------------------- Bouton navigation pages ----------------------------- */}

            <PagesArrows
                page={1}
                nbPages={3}
                nextImages={() => { }}
                prevImages={() => { }}
            />

        </div>

    );
}
export default HomeSection1;