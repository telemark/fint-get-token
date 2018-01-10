(async () => {
  const getToken = require('./index')
  const options = {
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
  try {
    const token = await getToken(options)
    console.log(token)
  } catch (error) {
    console.error(error.error.error)
  }
})()
