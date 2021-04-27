import './custom-button.styles.scss';

function ButtonComponent({children, isGoogoleSignIn, ...otherProps}) {
    return (
         <button className={`${isGoogoleSignIn ? 'google-sign-in': ''} custom-button`} {...otherProps}>
               {children}  
          </button>
    );
  }
  
  export default ButtonComponent;