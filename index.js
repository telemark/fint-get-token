const rp = require('request-promise')
const { stringify } = require('querystring')

module.exports = async options => {
  if (!options) {
    throw Error('Missing required input: options')
  }
  if (!options.url) {
    throw Error('Missing required input: url')
  }
  if (!options.credentials) {
    throw Error('Missing required input: options.credentials')
  }
  if (!options.credentials.auth) {
    throw Error('Missing required input: options.credentials.auth')
  }
  if (!options.credentials.auth.username) {
    throw Error('Missing required input: username')
  }
  if (!options.credentials.auth.password) {
    throw Error('Missing required input: password')
  }
  if (!options.credentials.client) {
    throw Error('Missing required input: options.credentials.client')
  }
  if (!options.credentials.client.client_id) {
    throw Error('Missing required input: client_id')
  }
  if (!options.credentials.client.client_secret) {
    throw Error('Missing required input: client_secret')
  }

  const { url, credentials } = options

  const httpOptions = {
    uri: url + '?' + stringify(credentials.client),
    method: 'POST',
    json: true,
    form: credentials.auth
  }

  try {
    const data = await rp(httpOptions)
    return data
  } catch (error) {
    throw error
  }
}
