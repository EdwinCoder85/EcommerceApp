import { useState } from "react"
import useCartApi from "../../hooks/useCartApi"
import './styles/ProductInfo.css'
import SliderImgs from "../ProductIdPage/SliderImgs"

const ProductInfo = ({ product }) => {

  const [counter, setCounter] = useState(1)

  const handleMinus = () => {
    if (counter - 1 >= 1) {
      setCounter(counter - 1)
    }
  }

  const handlePlus = () => setCounter(counter + 1)

  const {addProductInCart} = useCartApi()

  const handleAddCart = () => {
    const data = {
      quantity: counter,
      productId: product.id
    }
    addProductInCart(data)
  }

  return (
    <article className="product-info">
      <div className="product-info__column ">
        <SliderImgs
          product={product} 
        />
      </div>
      <div className="product-info__column">
        <h4 className="column__brand">{product?.brand}</h4>
        <h3 className="column__title">{product?.title}</h3>
        <div className="column__information">
          <p className="column__description">{product?.description}</p>
          <div className="column__options">
            <section className="column__price">
              <h4 className="column__label">Price</h4>
              <span className="column__amount">{product?.price}</span>
            </section>
            <section className="column__quantity">
              <h4 className="column__label">Quantity</h4>
              <div className="column__options">
                <button className="column__button" onClick={handleMinus}>-</button>
                <span className="column__value">{counter}</span>
                <button className="column__button" onClick={handlePlus}>+</button>
              </div>
            </section>
          </div>
          <button className="column__add-cart" onClick={handleAddCart} >Add to Cart <i className='bx bxs-cart-add' ></i></button>
        </div>
      </div>
    </article>
  )
}

export default ProductInfo