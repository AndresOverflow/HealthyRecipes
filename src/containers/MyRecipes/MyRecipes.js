import React, {Component} from 'react';

import DeleteButtonRecipe from './DeleteButtonRecipe/DeleteButtonRecipe';
import Recipe from '../Recipes/Recipe/Recipe';
import classes from './MyRecipes.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-orders';
import Aux from '../../hoc/Aux';
import { connect } from 'react-redux';


class MyRecipes extends Component {


    state = {
        recipes : null

    };


    componentDidMount() {
        
        const queryParams = '?orderBy="userId"&equalTo="' + this.props.userId + '"';

        axios.get("/recipes.json" + queryParams)
            .then(response =>{
                console.log(response.data);
                const newRecipes = [];
                let newRecipe = null;
                for (let recipeId in response.data) {
                    newRecipe = [...response.data[recipeId]];
                    console.log(response.data[recipeId].title);
                    console.log(response.data[recipeId].description);
                    newRecipe = ({
                        recipeId : recipeId,
                        title : response.data[recipeId].title,
                        description: response.data[recipeId].description
                    });

                    newRecipes.push(newRecipe);
                }
                this.setState({recipes : newRecipes});
                console.log(this.state.recipes);
            }).catch(error => {
                console.log(error)
                alert("log");
            });
    }

    onDeletedRecipe = (index) => {
        const newRecipes = [...this.state.recipes];
        console.log(newRecipes);
        console.log(this.state.recipes)
        console.log("new recipes " + newRecipes);
        newRecipes.splice(index, 1);
        console.log("new recipes " + newRecipes);

        this.setState({recipes: newRecipes});


    }

    render () {

        let recipesToJSX = <Spinner/>;

        if (this.state.recipes) {
            recipesToJSX = this.state.recipes.map((recipe,index) => {
                
            return (
                <Aux key={index}>
                    <Recipe title = {recipe.title} description = {recipe.description} />
                    <DeleteButtonRecipe title = {recipe.title}
                        recipeId = {recipe.recipeId}
                        userId = {this.props.userId}
                        token = {this.props.token}
                        index = {index}
                        onDeletedRecipe = {this.onDeletedRecipe}/>
                </Aux>

                    )

            
        });


        }
                return (
            <div className={classes.Recipes}>
                {recipesToJSX}



            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userId : state.auth.userId,
        token : state.auth.token
    }
}
export default connect(mapStateToProps) (MyRecipes);
