import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App';
import reportWebVitals from './reportWebVitals';
import Bachtest from './helloword/reacttest';

import Hassantest from './helloword/Hassantest';
// import TestForm from './firstform/TestForm';
import {TestForm, SecondeForm} from './firstform/TestForm';
import FirstSite from './firstsite/compenents/Header';
import Body from './firstsite/Centent';
import SLIDhassan from './firstsite/SLIDhassan';
import Footer from './firstsite/compenents/Footer';

// import './tailwind.css';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <FirstSite /> */}
     {/* <SLIDhassan/> */}
     {/* <Body /> */}
     {/* <Footer/> */}

     <App/>
    
    
    
    <Hassantest nam="hassan"/>
    <Hassantest nam="hanan"/>
    <Hassantest nam="YOUNESS"/>
    
    <Bachtest />
    <TestForm valeur="Hassan"/>
    <SecondeForm valeurs="18"/>
   
    



    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// Utilisation de fetch pour récupérer des données d'une API
fetch('http://127.0.0.1:8000/api/find')
  .then((reponse) => reponse.json())
  .then((data) => {
    // Utilisez les données récupérées comme vous le souhaitez
    console.log(data);
  })
  .catch(error => {
    // Gère les erreurs de requête ou de traitement des données
    console.error('Erreur:', error);
  });
