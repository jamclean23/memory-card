// Entry point


// ====== IMPORTS ======

// Styling
import css from './styles.css';

// React
import React from 'react';
import { createRoot } from 'react-dom/client';

// Main React App
import { App } from './React/App.js';

// ====== DETECT BROWSER ======

console.log(navigator.platform);
if (/iPhone/.test(navigator.platform) || /iPad/.test(navigator.platform)) {
    window.location.replace("https://jamclean23.github.io/id-that-tree-safari/");
}


// ====== WINDOW ======

// Stop context event
window.oncontextmenu = function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
};

// Get document height and width and assign them as css variables
function documentHeight () {
    const doc = document.documentElement;
    doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
}

function documentWidth () {
    const doc = document.documentElement;
    doc.style.setProperty('--doc-width', `${window.innerWidth}px`);
}

// Update height and width on resize
function updateWindow() {
    documentHeight();
    documentWidth();
}
// Initial window size update
updateWindow();

// Event Listeners
window.addEventListener('resize', updateWindow);

// ====== RENDER ======

const reactRoot = createRoot(document.querySelector('#root'));

reactRoot.render(<App />);