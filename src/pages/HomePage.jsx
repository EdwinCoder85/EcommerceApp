import { useSelector } from "react-redux";
import CardProduct from "../components/HomePage/CardProduct";
import "./styles/HomePage.css";
import { useRef, useState } from "react";
import FilterPrice from "../components/HomePage/FilterPrice";
import FilterCategory from "../components/HomePage/FilterCategory";

const HomePage = () => {
  const [nameValue, setNameValue] = useState("")
  const [sideBar, setSideBar] = useState(false);
  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity
  })

  const products = useSelector((reducer) => reducer.products);

  const inputName = useRef();

  const handleFilterName = () => {
    setNameValue(inputName.current.value)
  };

  const cbFilter = prod => {
    // Filter By name
    const inputNameLower = nameValue.toLowerCase().trim()
    const nameReal = prod.title.toLowerCase()
    const filterName = nameReal.includes(inputNameLower)
    // Filter by Price
    const price = Number(prod.price)
    const filterPrice = fromTo.from <= price && price <= fromTo.to

    return filterName && filterPrice
  }

  const handleOpenModal = () => {
    setSideBar(!sideBar)
    // console.log(sideBar);
  }

  const handleCloseModal = () => {
    setSideBar(false)
  }

  return (
    <main className="home__container">
        <aside className="home__aside">
          <FilterPrice 
            setFromTo={setFromTo}
          />
          <FilterCategory />
        </aside>
        <section className="home__main">
          <div className="home__main__header">
            <input
              className="main__header__input"
              value={nameValue} 
              ref={inputName}
              onChange={handleFilterName} 
              placeholder="What are you looking for?"
              type="text"
            />
            <button className="main__header__filter" onClick={handleOpenModal}><i className='bx bx-filter-alt bx-sm'></i>Filters</button>
            <div className={sideBar ? 'filters__modal open' : 'filters__modal'}>
              <button type="button" className="filter__btn btn--close" onClick={handleCloseModal}>
                <i className='bx bx-x'></i>
              </button>
              <FilterPrice 
                setFromTo={setFromTo}
              />
              <FilterCategory />
            </div>
          </div>
          <div className="home__main__body">
            {
              products?.filter(cbFilter).length
                ? products?.filter(cbFilter).map((prod) => (
                    <CardProduct key={prod.id} product={prod} />
                  ))
                : <h2>Sorry 😥, not exist products with this filters. ❌ </h2>
            }
          </div>
        </section>
    </main>
  );
};

export default HomePage;
