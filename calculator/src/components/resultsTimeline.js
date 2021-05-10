import React from 'react';

const Result = ({title, value}) => {
    return (
        <>
            <label> {title} </label>
            <input readOnly value={value}/>
        </>
    )
}

export default Result;