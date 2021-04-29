import './sign-in.styles.scss';
import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';
import { browserHistory } from 'react-router';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email:'',
          password:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
            auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email:'',
                password:''
            })
            browserHistory.push("/shop");
        } catch(error) {
            console.log(error);
        }
        
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

  render(){
    const {email, password} = this.state;
    return (       
        <div className="sign-in">
               <h2>I already have an account</h2>
               <span>Sign In with your email and password</span>
               <form onSubmit={this.handleSubmit}>
                   <FormInput 
                   name="email" 
                   type="email" 
                   value={email} 
                   required 
                   handleChange={this.handleChange}
                   label="email"/>
                   <FormInput name="password" type="password" value={password} label="password" required handleChange={this.handleChange}/>
                   <div className="buttons">
                   <CustomButton type="submit" onSubmit={this.handleSubmit}>
                       SIGN IN
                       </CustomButton>
                       <CustomButton onClick={signInWithGoogle} isGoogoleSignIn>
                       SIGN IN WITH GOOGLE
                       </CustomButton>
                   </div>
                   
               </form>
           </div>
   );
  }
    
}

export default SignIn;