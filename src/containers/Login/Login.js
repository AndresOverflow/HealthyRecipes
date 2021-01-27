import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import classes from './Login.css';
import * as actions from '../../store/actions/index'

class Auth extends Component {

    state = {
        username: '',
        password: '',
        email : ''
    }


    onSubmitHandler = (event) => {
        console.log("user Signed up");
        event.preventDefault();
        this.props.onAuth(this.state.email, this.state.password);
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
                    <button> Sign Up</button>

            </form>
        );

        return (
            <div className={classes.SignUp}>
                <div><h1>Login</h1></div>
                <div>{form}</div>
                <div><Link to="/sign-up"><h1>Not registered yet? Click here to Sign Up</h1></Link></div>
                
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