import React, {useEffect} from 'react';
import './styles/styles.scss';
import Header from './components/header';
import Main from './components/main';
import Reviews from './components/reviews';
import Contacts from './components/contacts';
import Services from './components/services';
import Footer from './components/footer';
import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import Line from './components/line';

function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop/>
            <Header/>
            <Line/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
                <Route path='/reviews' element={<Reviews/>}/>
            </Routes>
            <Footer/>
       </BrowserRouter>
    )
}

export default App