import React from 'react';
import {Button, Radio} from "antd";

const RadioButtons = ({val, handleClassChange}) => {
    return (
        <div className={"flex flex-row flex-1"}>
            <button className={`transition-colors  ${(val === 1) ? 'bg-green-300' : "bg-white"}`} onClick={() => {
                console.log(`bg-red-300 ${(val === 1) ? 'bg-green-300' : "bg-white"}`)
                handleClassChange(1)
            }}>1st Class
            </button>

            <button className={`transition-colors  ${(val === 2) ? 'bg-green-300' : "bg-white"}`} onClick={() => {
                handleClassChange(2)
            }}>2nd Class
            </button>

            <button className={`transition-colors  ${(val === 3) ? 'bg-green-300' : "bg-white"}`} onClick={() => {
                handleClassChange(3)
            }}>3rd Class
            </button>
        </div>
    );
};

export default RadioButtons;