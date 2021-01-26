import React, {Component} from 'react';
import axios from '../../axios-orders';

import classes from './CreateRecipe.css';


class CreateRecipe extends Component {
    state = {
            title : '',
            description : ''
        }

    postDataHandler = (event) => {
        event.preventDefault();
        console.log('submitted');
        const data = {
            title : this.state.title,
            description : this.state.description
        }
        console.log(data);
        axios.post('/recipes.json', data)
            .then(response => {
                console.log(response)})
            .catch(error => {
                console.log(error)});
            }

    render () {

        

        let form = ( 
            <form onSubmit={this.postDataHandler}>
                <label> Title </label>
                <input type= "text" name="title" 
                    value={this.state.title} 
                    onChange={(event) => this.setState({title : event.target.value})}/>
                <label> Description </label>
                <textarea rows="4" name="description" 
                    value={this.state.description}
                    onChange={(event) => this.setState({description : event.target.value})}/>
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
