import styles from '../../styles/Home.module.css';

///////////////////////////////////////////////////////////////////////////////////////////////

const ImagesContainer = (props) => {

    const {
        imageWidth,
        imageHeight,
        imageContainerWidth,
        imageContainerHeight,
        circleImageWidth,
        circleImageHeight,
    } = props.parameters;

    const {
        image,
        alt
    } = props

    const imageStyle = { width: imageWidth, height: imageHeight }
    const containerStyle = { width: imageContainerWidth, height: imageContainerHeight }
    const circleImageStyle = { width: circleImageWidth, height: circleImageHeight }
    
    //°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°

    return (
        <>
            <div className={styles.imageContainer} style={containerStyle}>
                <img src={image} alt={alt} className={styles.backCircleImage} style={circleImageStyle} />
                <img src={image} alt={alt} className={styles.backImage} style={imageStyle} />
                <img src={image} alt={alt} className={styles.middleImage} style={imageStyle} />
                <img src={image} alt={alt} className={styles.frontImage} style={imageStyle} />
            </div>
        </>
    )
}

export default ImagesContainer;