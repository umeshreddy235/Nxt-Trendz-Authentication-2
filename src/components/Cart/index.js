// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Cart = () => {
  const accessToken = Cookies.get('jwt_token')

  if (accessToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <div className="products-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
          className="products-img"
        />
      </div>
    </>
  )
}

export default Cart
