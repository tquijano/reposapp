import { clientID } from "../baseurl";
import { ToastAlert } from "../toastAlert";

export const signUp = async({ username , password }) => {
  const registeredUser = localStorage.getItem('username')
  if( username === registeredUser ){
    ToastAlert.fire({
      icon: 'error',
      title: 'This user is already registered'
    })
  } else{
    localStorage.setItem('username', username)
    sessionStorage.setItem('password', password)
    window.location.href = `https://github.com/login/oauth/authorize?scope=repo&client_id=${clientID}`;
    ToastAlert.fire({
      icon: 'success',
      title: 'has been successfully registered'
    })
  }
}
