import React from 'react'

const Square = ({ data, onClick }) => {
    return (
        <div className="square" onClick={() => onClick(data)}>
            {data.value}
        </div>
    );
};

export default Square;
