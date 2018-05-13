import React from 'react';

const validation = (props) => {
    
    let output = 'Text long enough';
    if (props.textLength < 5) {
        output = 'Text too short'
    }
    
    return (
        <p>{output}</p>
    )
}

export default validation;