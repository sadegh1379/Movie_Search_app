import React from 'react';
import Spinner from './Spinner.gif';

function SpinnerShow() {
    return (
        <React.Fragment>
            <img src={Spinner} alt="loading..."/>
        </React.Fragment>
    )
}

export default SpinnerShow;
