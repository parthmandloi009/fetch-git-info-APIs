import { Request, Response, NextFunction } from 'express'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { UserModel } from '../models/user'
import { UserAddModel } from '../models/user'
import { gitUserList, gitRepoList } from '../services/getList'

interface data {
  name: String
}

const User = async (req: Request, res: Response, next: NextFunction) => {
  console.log('controller')

  try {
    const name = req.params.name
    const results = await gitUserList(name)

    let params: UserAddModel = {
      name: results.data.name,
      owner_name: results.data.name,
      description: results.data.bio,
      stars: results.data.public_gists,
      count: results.data.public_repos,
      url: results.data.html_url,
    }

    let data = await UserModel.create(params)
    return res.status(200).json(data)
  } catch (err: any) {
    return res.status(401).json({ err })
  }
}

const Repo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const name = req.params.name
    const results: any = await gitRepoList(name)

    const dataArr = []

    for (let val of results.data) {
      dataArr.push({
        name: val.name,
        owner_name: val.owner.login.toLowerCase(),
        description: val.description || 'NA',
        stars: val.stars,
        count: val.stargazers_count,
        url: val.svn_url,
      })
    }
    return res.status(200).json(dataArr)
  } catch (err: any) {
    return res.status(401).json({ err })
  }
}

export default { User, Repo }
