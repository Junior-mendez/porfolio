import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Footer from './Footer';
import Home from './Home'
import Projects from './Projects'
import Blog from './Blog';
import { HashRouter,Routes,Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
   <HashRouter>
   <Header></Header>
   <Routes>
    <Route path="/"  element={<Home />}/>
    <Route path="/porfolio"  element={<Home />}/>
    <Route path="/projects"  element={<Projects />}/>
    <Route path="/blog"  element={<Blog />}/>
    </Routes>
    <Footer></Footer>
   </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
