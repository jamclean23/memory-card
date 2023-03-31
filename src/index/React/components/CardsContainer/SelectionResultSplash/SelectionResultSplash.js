import React, { useEffect, useState } from "react";
import './selectionresultsplash.css';

function SelectionResultSplash (props) {
    const [resultContent, setResultContent] = useState();

    const correctContent = <>
                                <h3 className="selectionResultsSplashHeader correct">Your Answer: {props.correctCard.props.treeImgs.name}</h3>
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
                                <button className="selectionResultsSplashButton" onClick={props.newTurn}>Next</button>
                            </>;

    const incorrectContent = <>
                                <h3 className="selectionResultsSplashHeader incorrect">You Chose: {props.selection.props.treeImgs.name}</h3> 
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
                                <h3 className="selectionResultsSplashHeader correct">Correct Answer: {props.correctCard.props.treeImgs.name}</h3>
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
                                <button className="selectionResultsSplashButton" onClick={props.newTurn}>Next</button>
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