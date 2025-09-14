import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      return (
        <>
          {cartList.length > 0 ? (
            <ul className="cart-list">
              {cartList.map(eachCartItem => (
                <CartItem
                  key={eachCartItem.id}
                  cartItemDetails={eachCartItem}
                />
              ))}
            </ul>
          ) : (
            <EmptyCartView />
          )}
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
