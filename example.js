const rp = require('request-promise')

async function getData (url, token, orgId) {
  if (!url) {
    throw Error('Missing required input: url')
  }
  if (!token) {
    throw Error('Missing required input: token')
  }

  const httpOpts = {
    method: 'GET',
    uri: url,
    headers: {
      Authorization: `Bearer ${token}`,
      'x-org-id': orgId
    }
  }
  try {
    const data = await rp(httpOpts)
    return data
  } catch (error) {
    console.error(error)
  }
}

(async () => {
  const getToken = require('./index')
  const tokenAuth = {
    url: 'https://namidp01.rogfk.no/nidp/oauth/nam/token',
    credentials: {
      client: {
        client_id: '6e1cf7b4-b107-42b3-9435-8fda70726c6a',
        client_secret: '6y4FUuP9BfAXeVqguNKT0ofToIwN5RdB1PaUvx_nCMiQbH9NeGq3pp0jQB9zOQ0APOxEbodzJXp-8RVux6318A'
      },
      auth: {
        username: 'pwfatut',
        password: 'pwfatut',
        grant_type: 'password'
      }
    }
  }
  const { access_token } = await getToken(tokenAuth)
  const data = await getData('https://play-with-fint.felleskomponent.no/administrasjon/personal/personalressurs', access_token)
  console.log(JSON.stringify(data, null, 2))
})()
