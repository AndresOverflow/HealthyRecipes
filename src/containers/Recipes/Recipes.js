// Use Aux to wrap all the recipes

import React, {Component} from 'react';


import Recipe from './Recipe/Recipe';
import classes from './Recipes.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-orders';

class Recipes extends Component {


    state = {
        recipes : null

    };


    componentDidMount() {
        console.log("hi");
        axios.get("/recipes.json")
            .then(response =>{
                console.log(response.data);
                const newRecipes = [];
                let newRecipe = null;
                for (let recipeId in response.data) {
                    newRecipe = [...response.data[recipeId]];
                    console.log(response.data[recipeId].title);
                    console.log(response.data[recipeId].description);
                    newRecipe = ({
                        title : response.data[recipeId].title,
                        description: response.data[recipeId].description,
                        recipeId : recipeId
                    });

                    newRecipes.push(newRecipe);
                }
                this.setState({recipes : newRecipes});
                console.log(this.state.recipes);
            }).catch(error => {
                console.log(error);
            });
    }

    render () {

        let recipesToJSX = <Spinner/>;

        if (this.state.recipes) {
            recipesToJSX = this.state.recipes.map((recipe,index) => {
            return <Recipe key = {index} 
            title = {recipe.title} 
            description = {recipe.description} 
            recipeId={recipe.recipeId} />
        });


        }
                return (
            <div className={classes.Recipes}>
                {recipesToJSX}



            </div>
        );
    }
}

export default Recipes;