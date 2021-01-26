import React from 'react';
import './App.css'
import NavigationBar from "./UI/NavigationBar/NavigationBar";
import RecipesContent from "./UI/RecipesContent/RecipesContent";
import styled from "styled-components";
import Discounts from "./UI/SideBar/Discounts";
import CreateRecipe from './containers/CreateRecipe/CreateRecipe';
import Favourites from './containers/Favourites/Favourites';

export const TABLET_LANDSCAPE_BREAKPOINT = '56.25em'

const App = styled.div`
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

export default () => (
  <App>
    <NavigationBar/>
    <Discounts/>
    <RecipesContent/>
    <CreateRecipe/>
    <Favourites />
  </App>
);
