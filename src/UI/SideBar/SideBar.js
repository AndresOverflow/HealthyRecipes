import React from 'react';
import classes from './SideBar.css';
import Discount from '../../containers/Discounts/Discounts'

const sideBar = (props) => {
    return (

        <div className = {classes.SideBar}>

            <p> <b>  There should be some discounts. I will offer you some chuck norris jokes instead </b> </p>
            <Discount/>
        </div>
    );
}

export default sideBar;