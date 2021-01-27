import React, {Component} from 'react';

import classes from './Auth.css';

class Auth extends Component {

    state = {
        username: '',
        password: '',
        email : ''
    }

    render () {

        
        
        let form = (
            <form>
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

export default Auth;