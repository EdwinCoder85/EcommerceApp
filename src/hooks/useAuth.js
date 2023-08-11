import axios from "axios";

const useAuth = () => {

  const createUser = (data, navigate) => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
    axios.post(url, data)
      .then(res => {
        navigate('/login')
      })
      .catch(err => console.log(err))
  }

  const loginUser = (data, navigate) => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
    axios.post(url, data)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('username', res.data.user.firstName+' '+res.data.user.lastName)
        navigate('/logout')
      })
      .catch(err => {
        console.log(err)
        localStorage.removeItem('token')
      })
  }

  const logoutUser = () => {
    
  }

  return { createUser, loginUser }

};

export default useAuth;
