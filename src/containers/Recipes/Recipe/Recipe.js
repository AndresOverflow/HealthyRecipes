import React, {Component} from 'react';
import classes from './Recipe.css';

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
                        <p className = {classes.Recipe_Image}> Image :D </p>
                        <p className = {classes.Recipe_Description}> {this.props.description}</p>
                    </div>
                </Link>

            </div>
        );
    }
}

export default Recipe;