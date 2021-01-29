import axios from '../../axios-orders';
import React, { Component } from  'react';
import classes from './SingleRecipe.css';




class SingleRecipe extends Component {

    state = {
        recipe : {
            title: null,
            description : null
        },
        editable : false,
    }

    componentDidMount() {
        //dispatch of the function that makes the get call
        //alert(window.location.href);
        const arrayOfUrl = window.location.href.split("/");
        const recipeId = arrayOfUrl[arrayOfUrl.length -1];
        console.log(recipeId);

        axios.get("/recipes/" + recipeId + ".json")
            .then(response => {
                console.log(response.data)
                this.setState({
                    title : response.data.title,
                    description : response.data.description
                })
                
            }).catch (error => {
                alert(error)
            });


        console.log("hi");
        // axios.get("")
        //         axios.get("/recipes.json")
        //         .then(response =>{
        //             console.log(response.data);
        //             const newRecipes = [];
        //             let newRecipe = null;
        //             for (let recipeId in response.data) {
        //                 newRecipe = [...response.data[recipeId]];
        //                 console.log(response.data[recipeId].title);
        //                 console.log(response.data[recipeId].description);
        //                 newRecipe = ({
        //                     title : response.data[recipeId].title,
        //                     description: response.data[recipeId].description,
        //                     recipeId : recipeId
        //                 });

        //                 newRecipes.push(newRecipe);
        //             }
        //             this.setState({recipes : newRecipes});
        //             console.log(this.state.recipes);
        //         }).catch(error => {
        //             console.log(error);
        //     });


    }


    render () {
        return (
            <div className={classes.SingleRecipe}>
                <h1> Wooow such a nice recipe that you are looking </h1>
                <hr/>
                <h1 className={classes.Content}> Title : {this.state.title}</h1>
                <hr/>
                <h1 className={classes.Content}> Description : {this.state.description}</h1>
                <hr/>
                
            </div>
        );
    }
}



export default SingleRecipe;
