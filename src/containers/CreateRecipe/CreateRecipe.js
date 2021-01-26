import React, {Component} from 'react';
import classes from './CreateRecipe.css';


class CreateRecipe extends Component {
    render () {

        let form = ( 
            <form>
                <input type= "text" name="title"></input>
                <input type= "text" name="description"></input>
                <button> Submit</button>
            </form>

        );



        return (
        <div className = {classes.CreateRecipe}>
            <h1> hello! Create your recipe ;P</h1>

            {form}

        </div>
        );
    }
}

export default CreateRecipe;
