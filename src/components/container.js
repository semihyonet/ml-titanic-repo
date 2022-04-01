import React from 'react';

const Container = ({children}) => {
    return (
        <div className={"bg-white p-6 w-fit mt-2"}>
            {children}
        </div>
    );
};

export default Container;