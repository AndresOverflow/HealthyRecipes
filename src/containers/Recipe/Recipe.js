import React, {Component} from 'react';
import classes from './Recipe.css';

class Recipe extends Component {

    render () {
        return (
            <div className = {classes.Recipe}>
                <h2> {this.props.title} </h2>
                <p> Image :D </p>
                <p> {this.props.description}</p>
            </div>
        );
    }
}

export default Recipe;