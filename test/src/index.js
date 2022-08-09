import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginEx from './login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Professer from './professer';
import Studentmain from './Studentmain';
const root = ReactDOM.createRoot(document.getElementById('root'));
/*
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginEx/>}/>
      <Route path='/professor' element={<Professer/>}/>
      <Route path='/student' element={<Studentmain/>}/>
    </Routes>
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
