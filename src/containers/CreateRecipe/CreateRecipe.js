import React, {Component} from 'react';
import axios from '../../axios-orders';
import {connect} from 'react-redux';

import classes from './CreateRecipe.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import firebase from '../../firebase/config';


class CreateRecipe extends Component {
    state = {
            title : '',
            description : '',
            imgFile: null,
            loading : false
        }




    handleChange = (newFile) => {
        this.setState({...this.state, imgFile: newFile})
    }

    handleImageUpload = () => {

        console.log(this.state.file);
        // Create a root reference
        let storageRef = firebase.storage().ref();
        // Create a reference to 'landscape.jpg';
    
    
        // Create the file metadata
        let metadata = {
              contentType: 'image/jpg'
            };
    
            // Upload file and metadata to the object 'images/mountains.jpg'
            let uploadTask = storageRef.child('images/' + this.state.title).put(this.state.imgFile[0], metadata);
    
            // Listen for state changes, errors, and completion of the upload.
            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
              (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                  case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                  case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
                }
              }, 
              (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                  case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                  case 'storage/canceled':
                    // User canceled the upload
                    break;
    
                  // ...
    
                  case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
                }
              }, 
              () => {
                // Upload completed successfully, now we can get the download URL
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                  console.log('File available at', downloadURL);
                });
              }
            );
      }



    postDataHandler = (event) => {
        
        event.preventDefault();
        this.setState({loading: true})

    
        this.handleImageUpload();




        console.log('img submitted');
    

        const data = {
            title : this.state.title,
            description : this.state.description,
            userId: this.props.userId,
        }
        console.log(data);
        axios.post('/recipes.json?auth=' + this.props.token, data)
            .then(response => {
                console.log("console" + response)
                this.setState({loading: false})
                this.props.history.push( '/' )
                console.log('img submitted')})
                //console.log(this.state.imageURL)
            .catch(error => {
                alert("you think you are smarter than me? Log in before trying to create a recipe");
                console.log(error)});
            }

    render () {

        console.log(this.state.imgFile)
        let form = <Spinner/>
        if (!this.state.loading) {
           form = ( 
            <form onSubmit={this.postDataHandler}>
                <label> Title </label>
                <input type= "text" name="title" 
                    value={this.state.title} 
                    onChange={(event) => this.setState({title : event.target.value})}/>
                <label> Description </label>
                <textarea rows="4" name="description" 
                    value={this.state.description}
                    onChange={(event) => this.setState({description : event.target.value})}/>

                <label> Image of the Recipe</label>
                <input type="file" name="image of the recipe" onChange={(e) => {this.handleChange(e.target.files)}} />

                <button> Submit</button>
            </form>

            );
        }


        return (
        <div className = {classes.CreateRecipe}>
            <h1> hello! Create your recipe ;P</h1>

            {form}

        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps) (CreateRecipe);
