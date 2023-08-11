import { useNavigate } from "react-router-dom";
import "./styles/LoginPage.css";
import avatar from '../assets/user.png';

const LogoutPage = () => {

  const user = localStorage.getItem('username')

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    navigate('/login')
  }

  return (
    <main className="login__container">
      <section className="login__main container">
        <div className="login__package login login__package--centered">
          <img className="login__avatar" src={avatar} />
          <b className="login__user">{user}</b>
          <button className="login__button login__button--link" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </section>
    </main>
  )
}

export default LogoutPage