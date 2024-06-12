import logo from './logo.svg';
import './App.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './firstsite/compenents/Header';
import Footer from './firstsite/compenents/Footer';
import About from './firstsite/page/About';
import Info from './firstsite/page/Info';
import Services from './firstsite/page/Services';
import Contacte from './firstsite/page/Contacte';
import Signup from './firstsite/page/Signup';
import Signin from './firstsite/page/Signin';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <div className="">
    //   <h1 className="">helmmlo</h1>
    //   <p>hassan</p>
    //   <h1 className=''>je suis DMS</h1>
    //   <p></p>
    // </div>
    


    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/Info' element={<Info/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Contacte' element={<Contacte/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Signin' element={<Signin/>}/>

      </Routes>
      
      <Footer/>
    </BrowserRouter>

    
    
  );
}

export default App;
