import React, { Component } from 'react';
import { connect } from 'react-redux';
//import {Redirect} from 'react-router-dom';
import * as actions from '../../store/actions/index';


class Logout extends Component {
    componentDidMount() {
        this.props.onLogout();
    }

    onClickHandler = () => {
        //<Redirect to="/" />;
        
        this.props.history.push( '/' );
    }

    render () {
        
        return ( 
            <div>
                <h1> Hire me {"<3"} </h1>
                <button onClick={this.onClickHandler}>Go to home page</button>
                <h1> Go Go Go</h1>
            </div>
        )
    };
}


const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    };
};

export default connect(null, mapDispatchToProps) (Logout);