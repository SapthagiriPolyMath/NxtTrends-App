import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalAmount = cartList.reduce(
        (acc, currentItem) => acc + currentItem.price * currentItem.quantity,
        0,
      )
      const totalItems = cartList.length

      return (
        <div className="order-summary-container">
          <h1 className="order-summary-heading">
            Order Total:
            <span className="order-total">{` Rs ${totalAmount}/-`}</span>
          </h1>
          <p className="order-summary-text">{totalItems} items in cart</p>

          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
