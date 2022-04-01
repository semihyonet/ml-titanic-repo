import React from 'react';


const GenderButtons = ({val,handleClassChange}) => {
    return(
    <div className={"flex flex-row flex-1"}>
        <button className={`transition-colors  ${(val === 1)?'bg-green-300':"bg-white"}`} onClick={() => {handleClassChange(1)}}>Male</button>
        <button className={`transition-colors  ${(val === 0)?'bg-green-300':"bg-white"}`} onClick={() => {handleClassChange(0)}}>Female</button>
    </div>
    );
};

export default GenderButtons;