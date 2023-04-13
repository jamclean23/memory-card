import './attributions.css';
import React, { useEffect } from 'react';
import * as attributionData from '../../../../../assets/attributions.json';
import * as uniqid from 'uniqid';

function Attributions (props) {

    const content = (() => {
        let result = [];
        for (const category in attributionData.default) {
            let catJsx = [];
            for (const type in attributionData.default[category]) {
                let dataJsx =[<p className='type' key={uniqid()}><a target='_blank' href={attributionData.default[category][type]}>{type}</a></p>];
                catJsx.push(dataJsx);
            }
            result.push(<section key={uniqid()}><h4>{category}</h4>{catJsx}</section>);
        }
        return result;
    })()

    return (
        <div className='Attributions'>
            <article>
                <h3>Attributions</h3>
                <p>Links to the assets used in this app.</p>
                {content}
            </article>
            <button className='exitAttributions' onClick={props.handleSubMenuBack}>Back</button>
        </div>
    );
}

export {
    Attributions
}