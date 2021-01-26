import React from 'react';

import classes from './Spinner.css';

const Spinner = (props) => {
    return (
        <div className={classes.loader}> Loading...</div>
    );
}

export default Spinner;