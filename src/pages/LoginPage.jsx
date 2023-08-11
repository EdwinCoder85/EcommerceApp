import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./styles/LoginPage.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const { register, reset, formState: { errors }, handleSubmit } = useForm();

  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const submit = (data) => {
    loginUser(data, navigate);
  };

  return (
    <main className="login__container">
      <section className="login__main container">
        <form className="login" onSubmit={handleSubmit(submit)}>
          <strong className="login__title">Welcome! Enter your email and password to continue</strong>
          <div className="login__data">
            <b className="login__subtitle">Test data</b>
            <div className="login__field">
              <i className='bx bx-envelope'></i>agville_19@hotmail.com
            </div>
            <div className="login__field">
              <i className='bx bx-lock-alt'></i>12345
            </div>
          </div>
          <div className="login__package">
            <label className="login__label" htmlFor="email">Email</label>
            <input className="login__input" {...register("email",{ required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i })} type="email" id="email" placeholder="Ingrese correo electrónico"/>
            <small className="login__error-message">
              {errors.email?.type === "required" && "* Correo Electrónico es requerido"}
              {errors.email?.type === "pattern" && "* Correo Electrónico ingresado tiene un formato incorrecto"}
            </small>
          </div>
          <div className="login__package">
            <label className="login__label" htmlFor="password">Password</label>
            <input className="login__input" {...register("password", { required: true, minLength: 5, maxLength: 20 })} type="password" id="password" placeholder="Ingrese contraseña" autoComplete="true"/>
            <small className="login__error-message">
              {errors.password?.type === "required" && "* Contraseña es requerida"}
              {errors.password?.type === "minLength" && "* Contraseña ingresada tiene menos de 8 caracteres"}
              {errors.password?.type === "maxLength" && "* Contraseña ingresada tiene más de 20 caracteres"}
            </small>
          </div>
          <button className="login__button login__button--submit">Login</button>
          <div className="login__navigate">
            Don't have an account? <button type="button" className="login__button"><Link to='/register' className="login__navigate login__button--link">Sign up</Link></button>
          </div>
        </form>
      </section>
    </main>

  );
};

export default LoginPage;
