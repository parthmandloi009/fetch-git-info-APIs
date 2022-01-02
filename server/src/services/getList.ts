import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export const gitUserList = async (user: any) => {
  return await axios(`https://api.github.com/users/${user}`)
}

export const gitRepoList = async (user: any) => {
  return await axios(`https://api.github.com/users/${user}/repos`)
}
