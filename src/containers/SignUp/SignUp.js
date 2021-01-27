import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import classes from './SignUp.css';

import Spinner from '../../components/UI/Spinner/Spinner';

import * as actions from '../../store/actions/index';

class SignUp extends Component {

    state = {
        username: '',
        password: '',
        email : ''
    }


    onSubmitHandler = (event) => {
        console.log("user Signed up");
        event.preventDefault();
        this.props.onAuth(this.state.email, this.state.password, true);
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

        
        

        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (
                <h2>{this.props.error.message}</h2>
            );
        }



        let renderSignUpForm = (
            <div className={classes.SignUp}>
                {errorMessage}
                <div><h3>Register to be able to add recipes</h3></div>
                <div>{form}</div>
                <div><Link to="/login"><h1>Already registered? Click here to Log In</h1></Link></div>

            </div>
        )

        if (this.props.loading) {
            renderSignUpForm = <Spinner/>
        }

        return (
            <div>

                {renderSignUpForm}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error : state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);