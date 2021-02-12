import React, {Component} from 'react';
import classes from './Header.css';
import salad_image from '../../assets/images/salad.jpg'
import healthy_cooking_image from '../../assets/images/healthy_cooking.jpg'
import toast_image from '../../assets/images/toast.jpg'





class Header extends Component {

    render () {
        return (
        
            <header className={classes.Header}>

                <h1 className={classes.Header_Title}> Enjoy a healthy life</h1>
                <h3 className= {classes.Header_SubTitle}> Have fun with your friends while cooking the best recipes</h3>
                <img src={salad_image} alt="salad" className={classes.Image_2}/>
                <img src={toast_image} alt="toast" className={classes.Image_3}/>
                <img src={healthy_cooking_image} alt="healthy food" className={classes.Image_1}/>
                <button className={classes.Header_Button}> View healty recipes </button>

            </header>
        );

    }

}


export default Header;
