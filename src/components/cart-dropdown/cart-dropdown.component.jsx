import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

function CartDropdown() {
    return (
    <div className='cart-dropdown'>
        <div className='cart-item'></div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
    );
}


export default CartDropdown;