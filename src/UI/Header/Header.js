import React, {Component} from 'react';
import classes from './Header.css';


class Header extends Component {

    render () {
        return (
        
            <header className={classes.Header}>

                <h1 className={classes.Header_Title}> Enjoy a healthy life</h1>
                <h3 className= {classes.Header_SubTitle}> Have fun with your friends while cooking the best recipes</h3>
                <button className={classes.Header_Button}> View healty recipes </button>
                
            </header>
        );

    }

}


export default Header;
