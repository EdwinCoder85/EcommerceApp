import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const RegisterPage = () => {

  const { register, reset, formState: { errors }, handleSubmit } = useForm()
  const { createUser } = useAuth()
  const navigate = useNavigate()

  const submit = data => {
    createUser(data, navigate)
    reset({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: ''
    })
  }

  return (
    <main className="login__container">
      <section className="login__main container">
        <form className="login" onSubmit={handleSubmit(submit)}>
          <strong className="login__title">Sign Up</strong>
          <div className="login__package">
            <label className="login__label" htmlFor="firstname">First Name</label>
            <input className="login__input" {...register('firstName', { required: true, maxLength: 20 })} type="text" id="firstname" placeholder="Ingrese nombres"/>
            <small className="login__error-message">
              {errors.firstName?.type === "required" && "* Nombres son requeridos"}
              {errors.firstName?.type === "maxLength" && "* Nombre ingresado tiene más de 20 caracteres"}
            </small>
          </div>
          <div className="login__package">
            <label className="login__label" htmlFor="lastname">Last Name</label>
            <input className="login__input" {...register('lastName', { required: true })} type="text" id="lastname" placeholder="Ingrese apellidos"/>
            <small className="login__error-message">
              {errors.lastName?.type === "required" && "* Apellidos son requeridos"}
            </small>
          </div>
          <div className="login__package">
            <label className="login__label" htmlFor="email">Email</label>
            <input className="login__input" {...register('email', { required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i })} type="email" id="email" placeholder="Ingrese correo electrónico"/>
            <small className="login__error-message">
              {errors.email?.type === "required" && "* Correo Electrónico es requerido"}
              {errors.email?.type === "pattern" && "* Correo Electrónico ingresado tiene un formato incorrecto"}
            </small>
          </div>
          <div className="login__package">
            <label className="login__label" htmlFor="password">Password</label>
            <input className="login__input" {...register('password', { required: true, minLength: 8, maxLength: 20 })} type="password" id="password"               placeholder="Ingrese contraseña"
              autoComplete="true"/>
            <small className="login__error-message">
              {errors.password?.type === "required" && "* Contraseña es requerida"}
              {errors.password?.type === "minLength" && "* Contraseña ingresada tiene menos de 8 caracteres"}
              {errors.password?.type === "maxLength" && "* Contraseña ingresada tiene más de 20 caracteres"}
            </small>
          </div>
          <div className="login__package">
            <label className="login__label" htmlFor="phone">Phone (10 characters)</label>
            <input className="login__input" {...register('phone', {required: true, minLength: 9, maxLength: 10})} type="text" id="phone"/>
            <small className="login__error-message">
              {errors.phone?.type === "required" && "* Telefono requerido"}
              {errors.phone?.type === "maxLength" && "* Telefono ingresado tiene más de 10 números"}
            </small>
          </div>
          <button className="login__button login__button--submit">Sign Up</button>
          <div className="login__navigate">
            Already have an account?  <button type="button" className="login__button"><Link to='/login' className="login__navigate login__button--link">Log in</Link></button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default RegisterPage;
