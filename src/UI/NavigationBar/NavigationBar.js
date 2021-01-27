import React from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';

import {TABLET_LANDSCAPE_BREAKPOINT} from "../../App";

const Box = styled.div`
  width : 100%;
  height: 5rem;
  border-bottom: 1px solid lightgray;
  padding: 1rem;
  background-color: lightblue;

  @media (min-width: ${TABLET_LANDSCAPE_BREAKPOINT}) {
    grid-column: 1 / span 2;
  }
  
  display: grid;
  grid-column: 1 / span 2;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  align-content: center;
  justify-content: space-between;
`

export default (props) => {
  return (
    <Box>
      <Link to="/"><h1>Home</h1> </Link>
      <Link to="/create-recipe"><h2>Create Recipe</h2> </Link>
      <Link to="/favourite-recipes"><h2>Favourite Recipes</h2> </Link>
      <Link to="/my-recipes"><h2>My Recipes</h2> </Link>
      <Link to="/login"><h2>Login</h2></Link>
      <Link to="/sign-up"><h2>Sign up</h2> </Link>

    </Box>
  );
}
