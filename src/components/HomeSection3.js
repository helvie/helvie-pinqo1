import styles from '../styles/Home.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

//////////////////////////////////////////////////////////////////////////////////////////////////

function HomeSection3() {

    return (

        <div className={`${styles.homeSection3} ${styles.section}`} id='Roadmap'>

            <div className={styles.homeSection3Circle}>

                <FontAwesomeIcon
                    icon={faPlay}
                />

            </div>

        </div>
    );
}
export default HomeSection3;