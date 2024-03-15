import styles from '../styles/Home.module.css';
import Thumbnail from './Thumbnail';
// Tableau contenant les différentes tailles de vignettes
import { thumbnailsArray } from '@/utils/datas';

//////////////////////////////////////////////////////////////////////////////////////////////////

function HomeSection2() {

    return (

        <div className={`${styles.homeSection2} ${styles.section}`} id="Blog">

            <div className={styles.homeSection2Content}>

                <h2 className={`${styles.homeTitle} ${styles.homeTitleAboveThumbnail}`}><span>About</span></h2>

                <Thumbnail parameters={thumbnailsArray.small} image="images/robot.png"
                    alt="robot" />

                <div className={styles.homeSection2Text}>

                    <h2 className={`${styles.homeTitle} ${styles.homeTitleBehindThumbnail}`}><span>About</span></h2>
                    
                    <div className={styles.homeSection2TextContainer}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus in urna nec suspendisse quis mus commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus in urna nec suspendisse quis mus commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus in urna nec suspendisse quis mus commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus in urna nec suspendisse quis mus commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus in urna nec suspendisse quis mus commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <button className={`${styles.classicButton} ${styles.homeSection2Button}`}>Join Discord</button>
                </div>

            </div>

        </div>
    );
}
export default HomeSection2;