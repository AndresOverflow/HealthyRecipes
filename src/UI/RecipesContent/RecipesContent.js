import React from 'react';
import classes from './RecipesContent.css';
import Recipes from '../../containers/Recipes/Recipes'

const recipesContent = (props) => {
  return (
    <div className={classes.RecipesContent}>
        <div className={classes.Recipes_Content_Title}>
          <h2 className={classes.Recipes_Content_Title_Text}> Wellcome to the Healthy LifeStyle Army!</h2>
        </div>
        <Recipes/>
    </div>
  );
}

export default recipesContent;
