import React from 'react';
import classes from './NavigationBar.css'

const navigationBar = (props) => {

    return (
        <div className = {classes.Content}>
            Home, Favourites, Build a Recipe, Login/Logout
        </div>
    );
}

export default navigationBar;