import './styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__container">
        <h2 className="title title--color">© Academlo 2023</h2>
        <ul className="footer__contact">
          <li className="footer__item">
            <a href="#" className="footer__link">
              <i className='bx bxl-twitter bx-sm footer__img' ></i>
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              <i className='bx bxl-instagram bx-sm footer__img' ></i>
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              <i className='bx bxl-youtube bx-sm footer__img' ></i>
            </a>
          </li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer