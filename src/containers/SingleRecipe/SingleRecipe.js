import axios from '../../axios-orders';
import React, { Component } from  'react';
import classes from './SingleRecipe.css';
import Aux from '../../hoc/Aux';

import { connect } from 'react-redux';
//import * as actions from '../../store/actions/index'




class SingleRecipe extends Component {

    state = {
        recipe : {
            title: null,
            description : null,
            userId : null,
            recipeId : null
        },
        editable : false,
        needActualize : true
    }

    componentDidMount() {
        //dispatch of the function that makes the get call
        //alert(window.location.href);
        const arrayOfUrl = window.location.href.split("/");
        let recipeId = arrayOfUrl[arrayOfUrl.length -1];

        if (recipeId[recipeId.length - 1] === '?') {
            recipeId = recipeId.slice(0, -1);
        }
        //this.setState({recipeId : recipeId})
        

        if (this.state.needActualize) {
        console.log(recipeId + "asdf");
        console.log(recipeId[recipeId.length - 1])

        axios.get("/recipes/" + recipeId + ".json")
            .then(response => {
                console.log(response.data)
                this.setState({recipe :{
                    title : response.data.title,
                    description : response.data.description,
                    userId : response.data.userId,
                    recipeId : recipeId,
                },
                needActualize : false
            })
                
                
            }).catch (error => {
                alert(error)
            });
        }

        console.log("volvemos a actualizar");

    }

    onEditHandler = () => {
        this.setState({editable : true})

    }

    onSubmitChangesHandler = async (event) => {
        event.preventDefault();
        console.log(this.state.recipe.recipeId + " esto era el recipeId");


        const data = {
            title : this.state.recipe.title,
            description : this.state.recipe.description,
            userId: this.state.recipe.userId
        }
            
           debugger;
            await axios.put('/recipes/'+ this.state.recipe.recipeId +'.json?auth=' + this.props.token, data)

        this.setState({editable : false});
            
            
    }
    render () {


        let content = 
            <div className={classes.SingleRecipe}>
                <h1> Wooow such a nice recipe that you are looking </h1>
                <hr/>
                <h1 className={classes.Content}> Title : {this.state.recipe.title}</h1>
                <hr/>
                <h1 className={classes.Content}> Description : {this.state.recipe.description}</h1>
                <hr/>
                {(this.state.recipe.userId === this.props.userId) ?
                 <button onClick={this.onEditHandler}> Edit recipe </button> : null}
            </div>
        if (this.state.editable) {
            content = 
            <div className={classes.SingleRecipe}>
                <form onSubmit={this.onSubmitChangesHandler}>
                    <h1> Edit your recipe!</h1>
                    <hr/>
                    <h1 className={classes.Content}> Title : 
                    <input type="text"
                        value = {this.state.recipe.title}
                        onChange={(event) => this.setState({recipe :{title : event.target.value, 
                        description : this.state.recipe.description,
                        userId : this.state.recipe.userId,
                        recipeId: this.state.recipe.recipeId}})}/></h1>
                    <hr/>
                    <h1 className={classes.Content}> Description :
                    <input type="text"
                        value = {this.state.recipe.description}
                        onChange={(event) => this.setState({recipe :{title : this.state.recipe.title, 
                        description : event.target.value,
                        userId : this.state.recipe.userId,
                        recipeId: this.state.recipe.recipeId}})}/></h1>
                    <hr/>
                    <p>{this.state.recipe.userId}</p>
                    {this.state.needActualize?<h1> true </h1> : <h1> false </h1> }
                    {(this.state.recipe.userId === this.props.userId) ?
                    <button> Submit Changes </button> : null}
                </form>
           </div>
        }




        return (
            <Aux>
                {content}
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        userId : state.auth.userId,
        token: state.auth.token
    };
};

export default connect(mapStateToProps)(SingleRecipe);
