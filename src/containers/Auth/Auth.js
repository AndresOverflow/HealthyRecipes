import React, {Component} from 'react';
import { connect } from 'react-redux';

import classes from './Auth.css';
import * as actions from '../../store/actions/index'

class Auth extends Component {

    state = {
        username: '',
        password: '',
        email : ''
    }


    onSubmitHandler = (event) => {
        event.prevent
        alert('Sing Up Done!');
    }

    render () {

        
        
        let form = (
            <form onSubmit={this.onSubmitHandler}>
                <input type="text" placeholder = "username " 
                    value = {this.state.username}  
                    onChange={(event) => this.setState({username : event.target.value}) }/>
                <input type="text" placeholder = "password"
                    value = {this.state.password} 
                    onChange={(event) => this.setState({password : event.target.value})}/>
                <input type="text" placeholder = "email"
                    value = {this.state.email} 
                    onChange={(event) => this.setState({email : event.target.value})}/>

            </form>
        );

        return (
            <div className={classes.Auth}>
                <div><h3>Register to be able to add recipes</h3></div>
                <div>{form}</div>
                <button> Sign Up</button>

            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password))
    };
};

export default connect(null, mapDispatchToProps)(Auth);