import React from 'react';
import styled from "styled-components";
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
      <h1>Home</h1>
      <h2> Create a recipe </h2>
      <h2> Favourites </h2>
      <h2> My recipes </h2>
      <h2>sign in</h2>
    </Box>
  );
}
