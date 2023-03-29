import React, { useEffect, useState } from "react";
import './modal.css';

function Modal (props) {

    const [currentImg, setCurrentImg] = useState('');

    const imgElement = <img className={'imgZoomed ' + props.catName + ' ' + props.treeClass} alt='Overview Img' src={props.treeImg}/>;

    useEffect(() => {
        console.log(props.treeImg);
        setCurrentImg(imgElement);
    }, []);

    return (
        <div className="cardsModal">
            <button className="xBtn" onClick={props.handleModalXClick}></button>
                <div className="modalImgWrapper">
                    {currentImg}
                </div>
        </div>
    );
}

export {
    Modal
}