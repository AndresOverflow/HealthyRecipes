// Use Aux to wrap all the recipes

import React, {Component} from 'react';
import Recipe from './Recipe/Recipe';
import classes from './Recipes.css';

class Recipes extends Component {


    state = {
        recipes : [{
            title : "Recipe1",
            description : "gfd"
        },
        {
            title : "Recipe2",
            description : "asf"
        }, 
        {
            title : "Recipe3",
            description : "gfd"
        }, 
        {
            title : "Recipe4",
            description : "asf"
        }, 
        {
            title : "Recipe5",
            description : "gfd"
        }, 
        {
            title : "Recipe6",
            description : "asf"
        }]

    };

    render () {

        const recipesToJSX = this.state.recipes.map((recipe,index) => {
            return <Recipe key = {index} title = {recipe.title} description = {recipe.description} />

        });

        return (
            <div className={classes.Recipes}>
                {recipesToJSX}



            </div>
        );
    }
}

export default Recipes;