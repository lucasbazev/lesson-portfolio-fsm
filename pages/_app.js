import React from 'react';
import '../css/styles.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;700&display=swap')`}
      </style>  
    </>
  )
}

export default App;