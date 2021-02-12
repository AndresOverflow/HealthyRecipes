import React, {Component} from 'react';
import classes from './Footer.css';


class Footer extends Component {

    render () {
        return (
            
            <div className={classes.Footer}>
                <footer className={classes.Footer_List}>
                    <ul className={classes.Nav}>
                        <li className={classes.Nav_Item}> <a href="/" className={classes.Nav_Link}>Home</a></li>
                        <li className={classes.Nav_Item}> <a href="/" className={classes.Nav_Link}>Contact us</a></li>
                        <li className={classes.Nav_Item}> <a href="/" className={classes.Nav_Link}>About us</a></li>
                        <li className={classes.Nav_Item}> <a href="/" className={classes.Nav_Link}>Create Recipe</a></li>
                        <li className={classes.Nav_Item}> <a href="/login" className={classes.Nav_Link}>Log in</a></li>
                        <li className={classes.Nav_Item}> <a href="/sign-up" className={classes.Nav_Link}>Sign up</a></li>
                    </ul>

                        


                </footer>

                <p className={classes.Message}> Keep tune for future updates!</p>
            </div>

        );
    }

}


export default Footer;
