import React from 'react';

const Header = ({result}) => {
    return (
        <div>
            {(result === -1) ? (<h1 className={"animate-pulse text-blue-700 uppercase"}> Titanic </h1>)
                : (
                    (result === 1)
                        ? (<h1 className={"text-blue-500"}>
                            Congratulations, You survived Titanic!
                        </h1>)
                        : (
                            <h1 className={"text-red-500"}>Sadly, you couldn't survive Titanic.</h1>
                        )
                )
            }

        </div>


    );
};

export default Header;