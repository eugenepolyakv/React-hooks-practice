import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import FirstComponent from './components/FirstFuncComponent.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SecondFuncComponents from './components/SecondFuncComponents.jsx';
import ThirdFuncComponent from './components/ThirdFuncComponent.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<ThirdFuncComponent />}></Route>
            <Route path="firstComponent" element={<FirstComponent />}></Route>
        </Routes>
    </BrowserRouter>
);
