import React, {Component} from 'react';
import classes from './Discount.css'

class Discount extends Component {

    render() {

        return (
            <div className = {classes.Discount}>
                <p>{this.props.content}</p>
                

            </div>
        );
    }
}

export default Discount;