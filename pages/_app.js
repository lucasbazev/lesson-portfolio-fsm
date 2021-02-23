import React from 'react';
import '../css/styles.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
        @font-face {
        src: url("https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap");
        }
        * {
        font-family: "Inter", sans-serif;
        }
        `}
      </style>
    </>
  )
}

export default App;