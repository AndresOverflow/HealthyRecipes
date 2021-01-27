import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';


import Spinner from '../../components/UI/Spinner/Spinner';

import classes from './Login.css';
import * as actions from '../../store/actions/index'

class Login extends Component {

    state = {
        password: '',
        email : ''
    }


    onSubmitHandler = (event) => {
        console.log("user Logged in");
        event.preventDefault();
        this.props.onAuth(this.state.email, this.state.password, false);
    }

    render () {

        
        
        let form = (
            <form onSubmit={this.onSubmitHandler}>
            
                <input type="text" placeholder = "password"
                    value = {this.state.password} 
                    onChange={(event) => this.setState({password : event.target.value})}/>
                <input type="text" placeholder = "email"
                    value = {this.state.email} 
                    onChange={(event) => this.setState({email : event.target.value})}/>
                    <button> Log in</button>

            </form>
        );

        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (
                <h2>{this.props.error.message}</h2>
            );
        }


        let renderLoginForm = (
            <div className={classes.SignUp}>
                {errorMessage}
                <div><h1>Login</h1></div>
                <div>{form}</div>
                <div><Link to="/login"><h1>Not registered yet? Click here to SignUp</h1></Link></div>

            </div>
        );








        if (this.props.loading) {
            renderLoginForm = <Spinner/>
        }


        return (
            <div>

                {renderLoginForm}
               
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);