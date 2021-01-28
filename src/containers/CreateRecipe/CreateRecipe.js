import React, {Component} from 'react';
import axios from '../../axios-orders';
import {connect} from 'react-redux';

import classes from './CreateRecipe.css';
import Spinner from '../../components/UI/Spinner/Spinner'


class CreateRecipe extends Component {
    state = {
            title : '',
            description : '',
            loading : false
        }

    postDataHandler = (event) => {
        
        event.preventDefault();
        this.setState({loading: true})
        console.log('submitted');
        const data = {
            title : this.state.title,
            description : this.state.description,
            userId: this.props.userId,
        }
        console.log(data);
        axios.post('/recipes.json?auth=' + this.props.token, data)
            .then(response => {
                console.log("console" + response)
                this.setState({loading: false})
                this.props.history.push( '/' )})
            .catch(error => {
                alert("you think you are smarter than me? Log in before trying to create a recipe");
                console.log(error)});
            }

    render () {

        let form = <Spinner/>
        if (!this.state.loading) {
           form = ( 
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
        }


        return (
        <div className = {classes.CreateRecipe}>
            <h1> hello! Create your recipe ;P</h1>

            {form}

        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps) (CreateRecipe);
