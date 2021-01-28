import React, {Component} from 'react';
import classes from './MyRecipes.css';


class MyRecipes extends Component {

    render () {
        return (
            <div className = {classes.MyRecipes}>
                <h1> Here you can see your own published recipes!!</h1>
            </div>
        );
    }

}


export default MyRecipes;
