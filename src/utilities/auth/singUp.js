
export const singUp = ( {username, githubUser, password} ) => {

  localStorage.setItem('githubUser', githubUser)
  localStorage.setItem('username', username)
  
}
