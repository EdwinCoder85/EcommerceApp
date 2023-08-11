import { useDispatch, useSelector } from "react-redux"
import { getCartThunk } from "../store/slices/carts.slice"
import { useEffect, useState } from "react"
import ProductInCart from "../components/CartPage/ProductInCart"
import usePurchases from "../hooks/usePurchases"
import './styles/CartPage.css'

const CartPage = ({handleCloseModal}) => {

  const cart = useSelector(reducer => reducer.cart)
  const [close, setClose] = useState(false)

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getCartThunk())
  }, [])

  const totalAmount = cart.reduce((acc, cv) => {
    const subtotal = cv.quantity * cv.product.price
    return acc + subtotal
  }, 0)

  const { makeAPurchase } = usePurchases()

  const handlePurchase = () => {
    makeAPurchase()
  }

  return (
    <div className="cart__container">
      <header className="cart__header">
        <h3 className="cart__title">Shopping Cart</h3>
        <button type="button" className="cart__btn btn--close" onClick={() =>handleCloseModal(close)}>
          <i className='bx bx-x'></i>
        </button>
      </header>
      <section className="cart__body" >
        {
          cart.map(prod => (
            <ProductInCart
              key={prod.id}
              prodCart={prod}
            />
          ))
        }
      </section>
      <footer className="cart__footer">
        <div className="cart__footer__total">
          <span className="cart__label">Total</span>
          <h3 className="cart__total">{totalAmount}</h3>
        </div>
        <button type="button" className="cart__btn btn--buy" onClick={handlePurchase}>Checkout</button>
      </footer>
    </div>
  )
}

export default CartPage