import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';
import Home from './components/Home';
import App from './App';
import About from './components/About';


const router= createBrowserRouter(createRoutesFromElements(

    <Route path="/" element={<App/>} >
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
    </Route>
    
))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);


reportWebVitals();
