import React from 'react'

const Square = props => {
    const { data } = props;
    return (
        <div className="square" onClick={() => props.onClick(data)}>
            {data.value}
        </div>
    );
};

export default Square;
