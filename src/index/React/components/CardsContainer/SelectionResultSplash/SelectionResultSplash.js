import React, { useEffect, useState } from "react";
import './selectionresultsplash.css';

function SelectionResultSplash (props) {
    const [resultContent, setResultContent] = useState();

    const correctContent = <div className="selectionResultSplash">
                                <h3>Correct!</h3>
                                <button onClick={props.newTurn}>Next</button>
                            </div>;

    const incorrectContent = <>
                                <div className="selectionResultSplash">
                                    <h3>Oops!</h3>
                                </div>
                                <p>You Chose: {props.selection.props.treeImgs.name}</p>
                                <div className={'Card ' + props.selection.props.treeImgs.catName}>
                                    <div className='imgsWrapper'>
                                        <div className='imgFrame overviewFrame'>
                                            <img className='overviewImg treeImg' src={props.selection.props.treeImgs.overview}/>
                                        </div>
                                        <div className='imgFrame coneFruitFrame'>
                                            <img className='coneFruitImg treeImg' src={props.selection.props.treeImgs.conefruit}/>
                                        </div>
                                        <div className='imgFrame needleLeafFrame'>
                                            <img className='needleLeafImg treeImg' src={props.selection.props.treeImgs.needleleaf}/>    
                                        </div>
                                    </div>
                                </div>                                
                                <p>Correct Answer: {props.correctCard.props.treeImgs.name}</p>
                                <div className={'Card ' + props.correctCard.props.treeImgs.catName}>
                                    <div className='imgsWrapper'>
                                        <div className='imgFrame overviewFrame'>
                                            <img className='overviewImg treeImg' src={props.correctCard.props.treeImgs.overview}/>
                                        </div>
                                        <div className='imgFrame coneFruitFrame'>
                                            <img className='coneFruitImg treeImg' src={props.correctCard.props.treeImgs.conefruit}/>
                                        </div>
                                        <div className='imgFrame needleLeafFrame'>
                                            <img className='needleLeafImg treeImg' src={props.correctCard.props.treeImgs.needleleaf}/>    
                                        </div>
                                    </div>
                                </div>
                                <button onClick={props.newTurn}>Next</button>
                            </>

    useEffect(() => {
        if (props.result === 'correct') {
            setResultContent(correctContent);
        } else {
            setResultContent(incorrectContent);
        }
    }, []);

    return (<>
                {resultContent}
            </>
    );
}

export {
    SelectionResultSplash
}