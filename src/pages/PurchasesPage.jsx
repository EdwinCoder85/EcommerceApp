import { useEffect } from "react"
import usePurchases from "../hooks/usePurchases"
import ProductPurchased from "../components/PurchasesPage/ProductPurchased"
import './styles/PurchasesPage.css'

const PurchasesPage = () => {

  const {getAllPurchases, purchases} = usePurchases()

  useEffect(() => {
    getAllPurchases()
  }, [])

  return (
    <main className="purchases__main container">
      <h2>My purchases</h2>
      <div className="purchase-products-list">
        {
          purchases?.map(purch => (
            <ProductPurchased 
              key={purch.id}
              purchase={purch}
            />
          ))
        }
      </div>
    </main>
  )
}

export default PurchasesPage