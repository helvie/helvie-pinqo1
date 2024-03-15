import styles from '../styles/Home.module.css';


//////////////////////////////////////////////////////////////////////////////////////////////////


function HomeSection6(props) {

    const mobile = props.width < 1024 ? true : false;

    //°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°

    return (

        <div className={styles.homeSection6} id='Contact'>

            {mobile && <h2 className={`${styles.homeTitle} ${styles.homeSection6Title}`}>
                <span>Contact us</span>
            </h2>}

            <div className={styles.homeSection6Content}>

                <div className={styles.homeSection6Image}>
                    <img src='images/imageSection1.png' alt='image' className={styles.imageSection1} />
                    <div className={styles.homeSection6ImageFilter}></div>
                </div>

                <div className={styles.homeSection6TextContainer}>
                    {!mobile && <h2 className={`${styles.homeTitle} ${styles.homeSection6Title}`}>
                        <span>Contact us</span>
                    </h2>}
                    <p>You’ll find us at all hours on Discord. You can also reach us through the usual channels.</p>
                    <button className={`${styles.classicButton} ${styles.homeSection6Button}`}>Get in touch</button>
                </div>

            </div>
        </div>

    )
}
export default HomeSection6;