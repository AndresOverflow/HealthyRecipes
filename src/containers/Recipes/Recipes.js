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
                for (let recipeData in response.data) {
                    newRecipe = [...response.data[recipeData]];
                    console.log(response.data[recipeData].title);
                    console.log(response.data[recipeData].description);
                    newRecipe = ({
                        title : response.data[recipeData].title,
                        description: response.data[recipeData].description
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
            return <Recipe key = {index} title = {recipe.title} description = {recipe.description} />
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