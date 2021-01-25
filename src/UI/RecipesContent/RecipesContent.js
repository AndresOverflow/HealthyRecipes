import React from 'react';
import classes from './RecipesContent.css';
import Recipe from '../../containers/Recipe/Recipe';

const recipesContent = (props) => {
  return (
    <div className={classes.Content}>
      <h2> Wellcome to the Healthy LifeStyle Army!</h2>
      <Recipe title="asdf" description=" asdf"/>
      <Recipe title="asdf" description=" asdf"/>
      <Recipe title="asdf" description=" asdf"/>
      <Recipe title="asdf" description=" asdf"/>
      <Recipe title="asdf" description=" asdf"/>
      <Recipe title="asdf" description=" asdf"/>
    </div>
  );
}

export default recipesContent;
