import React from 'react';
import classes from './RecipesContent.css';
import Recipes from '../../containers/Recipes/Recipes'

const recipesContent = (props) => {
  return (
    <div className={classes.Content}>
      <h2> Wellcome to the Healthy LifeStyle Army!</h2>
      <Recipes/>
      
       </div>
  );
}

export default recipesContent;
