import React, { useEffect, useState } from "react";
import './selectionresultsplash.css';

function SelectionResultSplash (props) {
    const [resultContent, setResultContent] = useState();

    const correctContent = <div className="selectionResultSplash">
                                <h3>Correct!</h3>
                                <button onClick={props.newTurn}>Next</button>
                            </div>;

    const incorrectContent = <div className="selectionResultSplash">
                                <h3>Oops!</h3>
                                <p>You chose: </p>
                                <button onClick={props.newTurn}>Next</button>
                            </div>;

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