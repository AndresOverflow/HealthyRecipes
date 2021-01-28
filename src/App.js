import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css'
import NavigationBar from "./UI/NavigationBar/NavigationBar";
import RecipesContent from "./UI/RecipesContent/RecipesContent";
import styled from "styled-components";
import Discounts from "./UI/SideBar/Discounts";
import CreateRecipe from './containers/CreateRecipe/CreateRecipe';
import Favourites from './containers/Favourites/Favourites';
import SignUp from './containers/SignUp/SignUp';
import Login from './containers/Login/Login';
import Logout from './containers/Logout/Logout';
import * as actions from './store/actions/index';

export const TABLET_LANDSCAPE_BREAKPOINT = '56.25em'

const AppBox = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: max-content max-content 1fr;
  grid-template-columns: 1fr;
  @media (min-width: ${TABLET_LANDSCAPE_BREAKPOINT}) {
    align-content: start;
    grid-template-columns: 20rem 1fr;
    grid-template-rows: max-content 1fr;
  }
`



class App extends Component {

  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render () {
    return (
      <AppBox>
        <Route path = "/" component = {NavigationBar}/>
        <Route path = "/" exact component={Discounts} />
        <Route path = "/" exact component={RecipesContent} />
        <Route path = "/create-recipe" component = {CreateRecipe} />
        <Route path = "/favourite-recipes" component = {Favourites} />
        <Route path = "/sign-up" component = {SignUp} />
        <Route path = "/login" component = {Login} />
        <Route path = "/logout" component = {Logout} />
      </AppBox>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(null, mapDispatchToProps)(App);