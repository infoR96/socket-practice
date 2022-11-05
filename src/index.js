import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Test } from './components/Test';

const divRoot = document.querySelector('#root');
const root = ReactDOM.createRoot(divRoot);
root.render(
    <App/> 
);

