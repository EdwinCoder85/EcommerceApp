import { useState } from "react"
import useCartApi from "../../hooks/useCartApi"
import './styles/ProductInCart.css'
import { sub } from "date-fns"

const ProductInCart = ({ prodCart }) => {

  const [counter, setCounter] = useState(prodCart.quantity)

  const { deleteProductInCart } = useCartApi()

  const handleDeleteCart = () => {
    deleteProductInCart(prodCart.id)
  }

  const handleMinus = () => {
    if (counter - 1 >= 1) {
      setCounter(counter - 1)
    }
  }

  const handlePlus = () => setCounter(counter + 1)

  let subtotal = prodCart.product.price * counter

  return (
    <article className="article">
      <div className="article__info">
        <img className="article__image" src={prodCart.product.images[0].url} alt="" /> 
        <section className="article__content">
          <h3 className="article__title">{prodCart.product.title}</h3>
          <div className="article__control">
            <button className="article__btn" onClick={handleMinus}>-</button>
            <span className="article__value">{counter}</span>
            <button className="article__btn" onClick={handlePlus}>+</button>
          </div>
        </section>
        <button type="button" className="article__btn remove-from-cart" onClick={handleDeleteCart}>
          <i className="bx bx-trash bx-sm"></i>
        </button>
      </div>
      <footer className="article__footer">
        <span className="article__label">subtotal:</span>
        <span className="article__subtotal">{subtotal}</span>
      </footer>
    </article>
  )
}

export default ProductInCart