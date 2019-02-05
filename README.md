[![Build Status](https://travis-ci.org/telemark/fint-get-token.svg?branch=master)](https://travis-ci.org/telemark/fint-get-token)
[![Coverage Status](https://coveralls.io/repos/telemark/fint-get-token/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/fint-get-token?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# fint-get-token

Module and cli to get oauth access token for FINT

## Use with cli

```bash
npx fint-get-token -c 6e1cf7b4-b107-42b3-9435-8fda70726c6a -C 6y4FUuP9BfAXeVqguNKT0ofToIwN5RdB1PaUvx_nCMiQbH9NeGq3pp0jQB9zOQ0APOxEbodzJXp-8RVux6318A -u pwfatut -p pwfatut
```

| Option              | Description               |
| ------------------- | ------------------------- |
| -v, --version       | Output the version number |
| -h, --help          | Display help              |
| -c, --client-id     | OAuth2 client id          |
| -C, --client-secret | OAuth2 client secret      |
| -p, --password      | Password                  |
| -U, --url           | OAuth2 url (optional)     |
| -u, --username      | username                  |

Returns only the token

```bash
eyJhbGciOiJBM.GpS0mMTtaUfnr6S7.qfS1ugEixs2C41MKUUg.MKvz789QPL-1C15J6kVQQw
```

## Use as node module

Install fint-get-token

```bash
npm i fint-get-token
```

```JavaScript
const getToken = require('fint-get-token')

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

getToken(options)
  .then(token => {
    console.log(token)
  }).catch(error => {
    console.error(error)
  })
```

Returns

```JavaScript
{ 
  access_token: 'eyJhbGciOiJBM.GpS0mMTtaUfnr6S7.qfS1ugEixs2C41MKUUg.MKvz789QPL-1C15J6kVQQw',
  token_type: 'bearer',
  expires_in: 3599 
}
```

## Get token and data

Requires use of [fint-get-data]()

```JavaScript
(async () => {
  const getToken = require('fint-get-token')
  const getData = require('fint-get-data')
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
  const { access_token } = await getToken(options)
  const data = await getData('https://play-with-fint.felleskomponent.no/administrasjon/personal/personalressurs', access_token)
  console.log(JSON.stringify(data, null, 2))
})()
```

## Related

- [fint-get-data](https://github.com/telemark/fint-get-data) Module/CLI to retrieve data from FINT
- [fint-client](https://github.com/telemark/fint-client) Node client for FINT

## License

[MIT](LICENSE)
