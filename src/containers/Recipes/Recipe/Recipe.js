import React, {Component} from 'react';
import classes from './Recipe.css';

import french_toasts_image from '../../../assets/images/french_toasts.jpg';

import {Link} from 'react-router-dom';

class Recipe extends Component {

    onRecipeClickedHandler () {
        //console.log("props of recipe :" + this.props);

    }

    render () {

        const url_link = '/single-recipe/' + this.props.recipeId;
        console.log("recipeId: value!  " + this.props.recipeId);
        return (
            <div className = {classes.Recipe}>
                <Link to={url_link}>
                    <div className = {classes.RecipeId}>
                        <h2 className = {classes.Recipe_Name}> {this.props.title} </h2>
                        <p className = {classes.Recipe_Image_Temp}> Image :D </p>
                        <img src={french_toasts_image} alt="french_toast_image" className={classes.Recipe_Image}/>
                        <p className = {classes.Recipe_Description}> {this.props.description}</p>
                    </div>
                </Link>

            </div>
        );
    }
}

export default Recipe;