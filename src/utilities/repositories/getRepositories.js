
export const getRepositories = async() => {
  const githubUser =  localStorage.getItem('githubUser')
  console.log('githubUser', githubUser)
  const url = `https://api.github.com/users/${githubUser}/repos`
  const rtta = await fetch(url) 
  const rta = await rtta.json()
  console.log('rta', rta)
  const reposi = rta.map(({name,git_url}) => ({
    name,git_url
  }))
  return reposi
}
