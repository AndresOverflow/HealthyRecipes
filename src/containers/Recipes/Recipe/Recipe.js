import React, {Component} from 'react';
import classes from './Recipe.css';

import french_toasts_image from '../../../assets/images/french_toasts.jpg';
import hour_glass from '../../../assets/svg/hour-glass.svg';
import star_full from '../../../assets/svg/star-full.svg';

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
                        <figure className={classes.Recipe_Figure}>
                            <img src={french_toasts_image} alt="french_toast_image" className={classes.Recipe_Image}/>
                        </figure>
                        <div className={classes.Recipe_BlurBackground}> </div>
                        <h3 className = {classes.Recipe_Description}> {this.props.description}</h3>
                        <div className={classes.Recipe_Characteristics}>
                            <div className={classes.Recipe_Time}>
                                <img src={hour_glass} alt="hour glass" className={classes.Recipe_Time_SVG}/>
                                <p className={classes.Recipe_Time_Text}> 4.5 hours</p>
                            </div>
                            <div className={classes.Recipe_Star}>
                                <img src={star_full} alt="star full" className={classes.Recipe_Star_SVG}/>
                                <p className={classes.Recipe_Star_Text}> 4</p>
                            </div>
                        </div>

                        
                    </div>
                </Link>

            </div>
        );
    }
}

export default Recipe;

/*
<div className={classes.Recipe_Characteristics}>
                            <div className={classes.Recipe_Time}>
                                <img src={hour_glass} alt="hour glass" className={classes.Recipe_Time_SVG}/>
                                <p className={classes.Recipe_Time_Text}> 4.5 hours</p>
                            </div>
                            <div className={classes.Recipe_Star}>
                                <img src={star_full} alt="star full" className={classes.Recipe_Star_SVG}/>
                                <p className={classes.Recipe_Star_Text}> 4</p>
                            </div>

                        </div>

*/