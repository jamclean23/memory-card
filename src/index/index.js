// Entry point


// ====== IMPORTS ======

// Styling
import css from './styles.css';

// React
import React from 'react';
import { createRoot } from 'react-dom/client';

// Main React App
import { App } from './React/App.js';

// ====== WINDOW ======

window.oncontextmenu = function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
};

function documentHeight () {
    const doc = document.documentElement;
    doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
}

function documentWidth () {
    const doc = document.documentElement;
    doc.style.setProperty('--doc-width', `${window.innerWidth}px`);
}

function updateWindow() {
    documentHeight();
    documentWidth();
}

updateWindow();

// Event Listeners

window.addEventListener('resize', updateWindow);

// ====== RENDER ======

const reactRoot = createRoot(document.querySelector('#root'));

reactRoot.render(<App />);