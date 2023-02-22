import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import * as THREE from "three";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App className="h-[100%]"/>
    </React.StrictMode>
  </BrowserRouter>
);

