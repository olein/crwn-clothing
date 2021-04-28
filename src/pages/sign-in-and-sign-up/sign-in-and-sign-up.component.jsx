import './sign-in-and-sign-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

function SignInAndSignUpPage() {
    return (
         <div className="sing-in-and-sign-up">
                 <SignIn />
                 <SignUp />
          </div>
    );
  }
  
  export default SignInAndSignUpPage;