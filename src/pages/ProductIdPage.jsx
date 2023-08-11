import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import ProductInfo from "../components/ProductIdPage/ProductInfo"
import SimilarProducts from "../components/ProductIdPage/SimilarProducts"
import './styles/ProductIdPage.css'

const ProductIdPage = () => {

  const { id } = useParams()

  const [ product, getSingleProduct ] = useFetch()

  useEffect(() => {
    getSingleProduct(`/products/${id}`)
  }, [id])
  
  return (
    <main className="product__main container">
      <section className="product__main__top">
        <ProductInfo
          product={product}
        />
      </section>
      <section className="product__main__bottom">
        <SimilarProducts 
          product={product}
        />
      </section>
    </main>
  )
}

export default ProductIdPage