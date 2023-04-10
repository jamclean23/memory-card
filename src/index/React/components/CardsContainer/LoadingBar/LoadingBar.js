import React from "react";
import './loadingbar.css';
import leafGif from '../../../../assets/icons/leaf.gif';

function LoadingBar () {
    return (<div className='LoadingBar'>
                <p>Loading ... </p>
                <img className='loadingGif' src={leafGif}/>
            </div>);
}

export {
    LoadingBar
}