const request = require('supertest')
const user = require('../src/routes/user')
const app = require('../src/app')

describe('Should return a repo', () => {
  it('Should return repo', async () => {
    const name = 'mrafique-deqode'
    const result = await request(app).get(`/repo/:${name}`)
    expect(200)
  })
})

describe('Should return name', () => {
  it('Should return name', async () => {
    const name = 'mrafique-deqode'
    const result = await request(app).get(`/user/api/:${name}`)
    expect(200)
  })
})
