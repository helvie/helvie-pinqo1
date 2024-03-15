import styles from '../styles/Home.module.css';
import Thumbnail from './Thumbnail';
// Tableau contenant les différentes tailles de vignettes
import { thumbnailsArray } from '@/utils/datas';

//////////////////////////////////////////////////////////////////////////////////////////////////

function HomeSection4(props) {

    // ------ Création des vignettes, taille adaptée en fonction de la taille de l'écran --------

    const thumbnailParametersSize = props.width < 1024 ? thumbnailsArray.medium : thumbnailsArray.small;

    const team = [];

    for (let nbImage = 0; nbImage < 4; nbImage++) {
        team.push(<Thumbnail key={nbImage} parameters={thumbnailParametersSize} image="images/robot.png"
            alt="robot" />);
    }

    //°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°

    return (

        <div className={`${styles.homeSection4} ${styles.section}`} id="Team">

            <h2 className={styles.homeTitle}><span>Team</span></h2>

            <div className={styles.homeSection4ImagesContainer}>
                {team}
            </div>

        </div>

    );
}
export default HomeSection4;