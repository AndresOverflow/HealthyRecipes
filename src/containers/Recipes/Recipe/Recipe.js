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
            <Link to={url_link}><div className = {classes.Recipe} >
                <h2> {this.props.title} </h2>
                <p> Image :D </p>
                <p> {this.props.description}</p>
            </div>
            </Link>
        );
    }
}

export default Recipe;