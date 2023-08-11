import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import CardProduct from "../HomePage/CardProduct"
import './styles/SimilarProducts.css'


const SimilarProducts = ({ product }) => {

  const [ productsByCategory, getProductsByCategory ] = useFetch()

  useEffect(() => {
    if (product) {
      getProductsByCategory(`/products?categoryId=${product.categoryId}`)
    }
  }, [product])

  const cbFilter = prod => {
    if (prod.id !== product.id) {
      return prod
    }
  }

  return (
    <article className="suggestions">
      <strong className="suggestions__title">Similar Products</strong>
      <div className="suggestions__product">
        {
          productsByCategory?.filter(cbFilter).map(prod => (
            <CardProduct
              key={prod.id}
              product={prod}
            />
          ))
        }
      </div>
    </article>
  )
}

export default SimilarProducts