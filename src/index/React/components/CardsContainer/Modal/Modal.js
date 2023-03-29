import React from "react";
import './modal.css';

function Modal (props) {
    return (
        <div className="cardsModal">
            <button className="xBtn" onClick={props.handleModalXClick}></button>
        </div>
    );
}

export {
    Modal
}