import './sign-up.styles.scss';
import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName:'',
          email:'',
          password:'',
          confirmPassword:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName,email, password, confirmPassword} = this.state;

        if(password!==confirmPassword) {
            alert("Password dont match");
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            createUserProfileDocument(user, {displayName});

            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
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
    const {displayName,email, password, confirmPassword} = this.state;
    return (       
        <div className="sign-up">
               <h2 className="sign-up">I do not have an account</h2>
               <span>Sign Up with your email and password</span>
               <form className="sign-up" onSubmit={this.handleSubmit}>
                   <FormInput 
                   name="displayName"
                   type="text"
                   value={displayName}
                   handleChange={this.handleChange}
                   label="Display name"
                   required
                   >
                   </FormInput>
                   <FormInput 
                   name="email" 
                   type="email" 
                   value={email} 
                   required 
                   handleChange={this.handleChange}
                   label="email"/>
                   <FormInput name="password" type="password" value={password} label="password" required handleChange={this.handleChange}/>
                   <div className="buttons">
                   <FormInput name="confirmPassword" type="password" value={confirmPassword} label="Confirm password" required handleChange={this.handleChange}/>
                   <div className="buttons">
                   <CustomButton type="submit" onSubmit={this.handleSubmit}>
                       SIGN UP
                       </CustomButton>
                       
                   </div>
                   </div>
                   
               </form>
           </div>
   );
  }
    
}

export default SignUp;