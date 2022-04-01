import React from "react"
import {Slider, InputNumber} from 'antd';

const IntegerStep = ({val, setChange}) => {


    return (
        <div className={" flex flex-row flex-1 m-4"}>
            <Slider
                className={"flex-1"}
                min={0}
                max={20}
                onChange={setChange}
                value={typeof val === 'number' ? val : 0}
            />

            <InputNumber
                min={0}
                max={20}
                style={{margin: '0 16px'}}
                value={val}
                onChange={setChange}
            />
        </div>
    );
}

export default IntegerStep;