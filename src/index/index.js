// Entry point


// ====== IMPORTS ======

// Styling
import css from './styles.css';

// React
import React from 'react';
import { createRoot } from 'react-dom/client';

// Main React App
import { App } from './React/App.js';

// const testImport = require.context('./assets/trees/', true, /.jpg$/);

// ====== RENDER ======

const reactRoot = createRoot(document.querySelector('#root'));

reactRoot.render(<App />);