import React, {Component} from 'react';


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
                console.log(error)
                alert("log");
            });
    }

    render () {

        let recipesToJSX = <Spinner/>;

        if (this.state.recipes) {
            recipesToJSX = this.state.recipes.map((recipe,index) => {
                
            return (
                <Aux>
                    <Recipe key = {index} title = {recipe.title} description = {recipe.description} />
                    <button> delete recipe</button>
 
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
        userId : state.auth.userId
    }
}
export default connect(mapStateToProps) (MyRecipes);
