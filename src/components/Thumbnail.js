import styles from '../styles/Home.module.css';
import ImagesContainer from './ImagesContainer';

///////////////////////////////////////////////////////////////////////////////////////////////

const Thumbnail = (props) => {

    return (

        <div className={styles.thumbnailContainer}>

            <ImagesContainer
                parameters={props.parameters}
                image={props.image}
                alt={props.alt}
            />
            <p className={styles.thumbnailText}>Lorem ipsum dolor</p>
            <p className={styles.thumbnailAnnotation}>Lorem ipsum dolor {props.id + 1}</p>
            
        </div>

    )
}

export default Thumbnail;