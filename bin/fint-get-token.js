#!/usr/bin/env node

const args = require('args')
const getToken = require('../index')

args
  .option('username', 'username')
  .option('password', 'password')
  .option('client-id', 'OAuth2 client id')
  .option('client-secret', 'OAuth2 client secret')
  .option('url', 'OAuth2 url', 'https://namidp01.rogfk.no/nidp/oauth/nam/token')

const flags = args.parse(process.argv)

const options = {
  url: flags.url,
  credentials: {
    client: {
      client_id: flags.clientId,
      client_secret: flags.clientSecret
    },
    auth: {
      username: flags.username,
      password: flags.password,
      grant_type: 'password'
    }
  }
}

getToken(options)
  .then(token => {
    console.log(token)
  }).catch(error => {
    console.error(error.message)
  })
