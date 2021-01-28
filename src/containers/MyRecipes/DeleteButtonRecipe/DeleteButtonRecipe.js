import React, {Component} from 'react';
import axios from '../../../axios-orders';


class DeleteButtonRecipe extends Component {



    onDeleteHandler = (title, index) => {
        alert(this.props.userId);
        const queryParams = '&orderBy="userId"&equalTo="' + this.props.userId + '"'; // not really necessary
        console.log("this recipeID about to get deleted" + this.props.recipeId + queryParams);
        axios.delete('/recipes/' + this.props.recipeId +'.json?auth='+ this.props.token)
            .then(response => {
                console.log(response);
                this.props.onDeletedRecipe(index);
            })
            .catch(error => {
                alert(error);
            })

    }
    onDel = (title) => {
        alert(title);
    }

    render () {
        return (
            <button onClick={() => this.onDeleteHandler(this.props.title, this.props.index)}> Delete Recipe</button>


        );
    }
}


export default DeleteButtonRecipe;