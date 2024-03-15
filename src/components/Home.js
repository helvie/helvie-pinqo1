import React, { useState, useEffect } from 'react';
import Header from './Header.js';
import HomeSection1 from './HomeSection1.js';
import HomeSection2 from './HomeSection2.js';
import HomeSection3 from './HomeSection3.js';
import HomeSection4 from './HomeSection4.js';
import HomeSection5 from './HomeSection5.js';
import HomeSection6 from './HomeSection6.js';
import Footer from './Footer.js';

//////////////////////////////////////////////////////////////////////////////////////////////////


function Home() {

    // récupération et stockage de la taille de l'écran
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }, []); 


    //°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°

    return (

        <main>

            <Header />
            <HomeSection1 />
            <HomeSection2 />
            <HomeSection3 />
            {windowSize && <HomeSection4 width={windowSize.width} height={windowSize.height}/>}
            {windowSize && <HomeSection5 width={windowSize.width} height={windowSize.height}/>}
            {windowSize && <HomeSection6 width={windowSize.width} height={windowSize.height}/>}
            <Footer/>

        </main>

    );
}

export default Home;