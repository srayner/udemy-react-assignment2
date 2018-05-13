import React from 'react';

const char = (props) => {
    
    const style = {
        display  : 'inline-block',
        padding  : '16px',
        textAlign: 'center',
        margin   : '16px',
        border   : '1px solid black',
        width    : '18px'
    }

    return (
        <div onClick={props.removeHandler} style={style}>{props.char}</div>
    )

}

export default char;