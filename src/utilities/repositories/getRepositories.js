import apiGithubApi from "../../axios/apiGithubApi"
import starredApi from "../../axios/starredApi"
import { ToastAlert } from "../toastAlert"

export const getRepositories = async() => {
  const githubuser =  localStorage.getItem('githubUser')

  try {
    const {data} = await apiGithubApi.get(`/users/${githubuser}/repos`)
    return data
  } catch (error) {
    console.log('error', error)
  }
}

export const starRepositories = async(owner, repo) => {
  starredApi.put(`/user/starred/${owner}/${repo}`, null)
  .then(() => {
    ToastAlert.fire({
      icon: 'success',
      title: 'new favorite added'
    })
  })
  .catch(error => {
    ToastAlert.fire({
      icon: 'error',
      title: 'upss an error has ocurred'
    })
  });
}

export const unStarRepositories = async(owner, repo) => {
  starredApi.delete(`/user/starred/${owner}/${repo}`, null)
  .then(() => {
    ToastAlert.fire({
      icon: 'success',
      title: 'unstar Successfully'
    })
  })
  .catch(error => {
    ToastAlert.fire({
      icon: 'error',
      title: 'upss an error has ocurred'
    })
  });
}

export const getFaovorites = async() =>{
  const githubuser =  localStorage.getItem('githubUser')

  const {data}  = await apiGithubApi.get(`/users/${githubuser}/starred`)
  return data
}
