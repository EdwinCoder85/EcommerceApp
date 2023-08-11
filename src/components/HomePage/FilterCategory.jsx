import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"
import { getAllProductsThunk, getFilteredProductsThunk } from "../../store/slices/products.slice"
import { useDispatch } from "react-redux"
import './styles/Filters.css'

const FilterCategory = () => {

  const [ categories, getAllCategories ] = useFetch()
  const [showFilter, setShowFilter] = useState(false)

  useEffect(() => {
    getAllCategories('/categories')
  },[])


  const dispatch = useDispatch()

  const handleAllCategories = () => {
    dispatch(getAllProductsThunk());
  }

  const handleFilterCategories = id => {
    dispatch(getFilteredProductsThunk(id));
  }

  const handleShowFilter = () =>{
    setShowFilter(!showFilter)
  }

  return (
    <article className="filters">
      <div className='filter-drop-down'>
      {/* <div className={showFilter ? 'filter-drop-down closed' : 'filter-drop-down'} onClick={handleShowFilter}> */}
        <div className="header">
          <h3>Category</h3><i className='bx bx-chevron-down'></i>
        </div>
        <div className="content">
          <ul className="list__category">
            <li onClick={handleAllCategories}>All categories</li>
            {
              categories?.map(category => (
                <li onClick={() => handleFilterCategories(category.id)} key={category.id}>{category.name}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </article>
  )
}

export default FilterCategory