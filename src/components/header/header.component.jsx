import './header.styles.scss';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


function Header({currentUser, hidden}) {
  return (
       <div className="header">
           <Link className="logo-container" to="/"><Logo className="logo" /></Link>
            <div className="options">
                <Link to="/shop" className="option">SHOP</Link>
                <Link to="/shop" className="option">CONTACT</Link>
                {
                  currentUser ? 
                  <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div> :
                  <Link to="/signin">SIGN IN</Link>

                }
                <CartIcon />
            </div>
            { hidden ? null : <CartDropdown />}

        </div>
  );
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden
})

export default connect(mapStateToProps) (Header);
