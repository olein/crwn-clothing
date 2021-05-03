import './custom-button.styles.scss';

function ButtonComponent({children, isGoogoleSignIn, inverted, ...otherProps}) {
    return (
         <button className={`${inverted ? 'inverted': ''} ${isGoogoleSignIn ? 'google-sign-in': ''} 
         custom-button`} {...otherProps}>
               {children}  
          </button>
    );
  }
  
  export default ButtonComponent;