import React from 'react';

const Circle = (props) => {
    return (
        <div style={{backgroundColor: props.color}}
        className="circle">
            {props.id}
        </div>
    );
};

export default Circle;