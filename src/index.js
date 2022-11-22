import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BandNamesApp } from './BandNamesApp';

const divRoot = document.querySelector('#root');
const root = ReactDOM.createRoot(divRoot);
root.render(
    <BandNamesApp/> 
);

