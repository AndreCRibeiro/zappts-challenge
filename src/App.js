import React from 'react';

import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import GlobalStyles from './styles/global';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <>
      <Routes />
      <GlobalStyles />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
