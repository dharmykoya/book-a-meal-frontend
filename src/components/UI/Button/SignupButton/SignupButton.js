import React from 'react';
import classes from './SignupButton.css';


const signupButton = (props) => (
  <button className={classes.Button} disabled={!props.disabled}>{props.children}</button>
);


export default signupButton;