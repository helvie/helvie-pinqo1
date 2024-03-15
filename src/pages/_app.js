import '../styles/globals.css';
import React from 'react';
import { useRouter } from 'next/router';

function App({ Component, pageProps }) {
  return (
    <Component {...pageProps} /> 
    )
}

export default App;