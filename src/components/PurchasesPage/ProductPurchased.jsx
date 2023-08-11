import {format} from 'date-fns'
import './styles/ProductPurchased.css'

const ProductPurchased = ({ purchase }) => {

  const date = new Date(purchase.createdAt);
  const dateFormatted = format(date, "dd/mm/yyyy")

  return (
    <article className='product-item'>
      <div className='product-item__image'>
        <img src={purchase.product.images[0].url} alt="" />
      </div>
      <div className='product-item__name'>
        {purchase.product.title}
      </div>
      <div className='product-item__date'>
        {dateFormatted}
      </div>
      <div className='product-item__quantity'>
        <div className='box'>{purchase.quantity}</div>
      </div>
      <div className='product-item__price'>
        {purchase.quantity * purchase.product.price}
      </div>
    </article>
  )
}

export default ProductPurchased