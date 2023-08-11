import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CartPage from "../../pages/CartPage";
import './styles/Header.css';

const Header = () => {

  const [sideBar, setSideBar] = useState(false);
  const [page, setPage] = useState('')
  const [purchase, setPurchase] = useState('/purchases')

  const token = localStorage.getItem('token')
  const username = localStorage.getItem('username')

  useEffect(() => {
    if (username) {
      setPage('/logout')
    } else {
      setPage('/login')
    }
  }, [])

  const handleEcommerce = () => {
    setSideBar(false)
  }
  
  const handleLogin = () => {
    setSideBar(false)
    if(username) {
      setPage('/logout')
    } else {
      setPage('/login')
    }
  }

  const handlePurchase = () => {
    setSideBar(false)
  }

  const handleCart = () => {
    setSideBar(!sideBar)
  }

  const handleCloseModal = (close) => {
    setSideBar(close)
  }

  return (
    <header className="navbar">
      <section className="fixed">
        <nav>
          <Link className="title" to='/' onClick={handleEcommerce}>
            <h1>E-commerce</h1>
          </Link>
          <button className="icon" onClick={handleLogin}>
            <Link to={page} className="link"><i className ='bx bx-user bx-sm'></i></Link>
          </button>
          <button className="icon" onClick={handlePurchase}>
            <Link to={purchase} className="link"><i className ='bx bx-archive bx-sm'></i></Link>
          </button>
          <button className="icon" onClick={handleCart}>
            <i className ='bx bx-cart bx-sm'></i>
          </button>
        </nav>
        <div className={sideBar && token ? 'cart__modal open' : ' cart__modal'}>
          <CartPage 
            handleCloseModal={handleCloseModal}
          />
        </div>
      </section>
    </header>
  );
};

export default Header;
