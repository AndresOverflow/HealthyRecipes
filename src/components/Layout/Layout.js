import React, { Component } from 'react';
import Recipe from '../../containers/Recipe/Recipe';
import classes from './Layout.css';
import NavigationBar from '../../UI/NavigationBar/NavigationBar';
import SideBar from '../../UI/SideBar/SideBar';
import RecipesContent from '../../UI/RecipesContent/RecipesContent';
import Aux from '../../hoc/Aux';



class Layout extends Component {

  render() {
      
    return (
      <Aux>
          <NavigationBar/>

        <main className = {classes.MainContent}>
            <SideBar/>
            <RecipesContent/>


        </main> 
      </Aux>
    ); 

  }
}

export default Layout;

