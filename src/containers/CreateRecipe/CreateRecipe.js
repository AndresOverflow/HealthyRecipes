import React, {Component} from 'react';
import axios from 'axios';

import classes from './CreateRecipe.css';


class CreateRecipe extends Component {
    state = {
            title : '',
            description : ''
        }

    postDataHandler = () => {
        const data = {
            title : this.state.title,
            description : this.state.description
        }
        axios.post("https://jsonplaceholder.typicode.com/posts", data)
            .then(response =>{
                console.log(response);
            });

    }

    render () {

        

        let form = ( 
            <form>
                <label> Title </label>
                <input type= "text" name="title" 
                    value={this.state.title} 
                    onChange={(event) => this.setState({title : event.target.value})}/>
                <label> Description </label>
                <textarea rows="4" name="description" 
                    value={this.state.description}
                    onChange={(event) => this.setState({description : event.target.value})}/>
                <button onClick={this.postDataHandler}> Submit</button>
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
