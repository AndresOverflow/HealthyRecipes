import React, {Component} from 'react';
import classes from './Recipe.css';

import french_toasts_image from '../../../assets/images/french_toasts.jpg';
import salad_image from '../../../assets/images/salad.jpg';
import hour_glass from '../../../assets/svg/hour-glass.svg';
import star_full from '../../../assets/svg/star-full.svg';

import firebase from '../../../firebase/config';

import {Link} from 'react-router-dom';

class Recipe extends Component {

    state = {
        recipe_url : ""
    }

    onRecipeClickedHandler () {
        //console.log("props of recipe :" + this.props);

    }

    render () {

        const url_link = '/single-recipe/' + this.props.recipeId;
        console.log("recipeId: value!  " + this.props.recipeId);

        
        let storageRef = firebase.storage().ref()
        let spaceRef = storageRef.child('images/'+this.props.title)
        storageRef.child('images/' + this.props.title).getDownloadURL().then((url) => {
          console.log(url)
          if(this.state.recipe_url === "") {
            this.setState({recipe_url : url})
          }
        
        })

        return (
            
            <div className = {classes.Recipe}>
                <Link className = {classes.Recipe_Link}to={url_link}>
                    <div className= {classes.RecipeId}>
                        <h2 className = {classes.Recipe_Name}> {this.props.title} </h2>
                        <div class = {classes.Recipe_Image_Container}>
                            <div className= {classes.Recipe_Image}>
                                <img className={classes.Recipe_Image_IMG} src={this.state.recipe_url} alt="french_toast_image"/> 
                            </div>
                            <div className = {classes.Recipe_Description}>
                                <p className={classes.Recipe_Description_Text}> {this.props.description}</p>
                            </div>

                        </div>
                    </div>
                    
                    
                    
                </Link>

            </div>
        );
    }
}

export default Recipe;

/*
<a class="project-image-container" href="https://github.com/AndresOverflow/Compiler" target="_blank">
                <div class="project-image">
                  <img class="image" src="/img/compiler_img.png" alt="Image of the project">
                </div>
                <div class="project-techs">
                  <div class="project-techs__text">

                    <div class="project-techs__text__title">
                      Skills:
                    </div>
                    <ul>
                      <il> Java</il>
                      <br>
                      <il> 68k Assembly</il>
                      <br>
                    </ul>

                  </div>
                </div>

              </a>
*/
/*
<div className = {classes.RecipeId}>
                        <h2 className = {classes.Recipe_Name}> {this.props.title} </h2>

                        <h3 className = {classes.Recipe_Description}> {this.props.description} </h3>
                        <figure className={classes.Recipe_Figure}>
                            <img src={french_toasts_image} alt="french_toast_image" className={classes.Recipe_Image}/>
                        </figure>
                        <div className={classes.Recipe_BlurBackground}> </div>
                        <div className={classes.Recipe_Characteristics}>
                            <div className={classes.Recipe_Time}>
                                <img src={hour_glass} alt="hour glass" className={classes.Recipe_Time_SVG}/>
                                <p className={classes.Recipe_Time_Text}> 4.5 hours</p>
                            </div>
                            <div className={classes.Recipe_Star}>
                                <img src={star_full} alt="star full" className={classes.Recipe_Star_SVG}/>
                                <p className={classes.Recipe_Star_Text}> 4</p>
                            </div>
                        </div>

                        
                    </div>
*/
/*
<div className={classes.Recipe_Characteristics}>
                            <div className={classes.Recipe_Time}>
                                <img src={hour_glass} alt="hour glass" className={classes.Recipe_Time_SVG}/>
                                <p className={classes.Recipe_Time_Text}> 4.5 hours</p>
                            </div>
                            <div className={classes.Recipe_Star}>
                                <img src={star_full} alt="star full" className={classes.Recipe_Star_SVG}/>
                                <p className={classes.Recipe_Star_Text}> 4</p>
                            </div>

                        </div>

*/