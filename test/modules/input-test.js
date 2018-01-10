const test = require('ava')
const getToken = require('../../index')

test('throws if missing options', async t => {
  const error = await t.throws(getToken())
  t.is(error.message, 'Missing required input: options')
})

test('throws if missing options.url', async t => {
  const options = {
    url: false
  }
  const error = await t.throws(getToken(options))
  t.is(error.message, 'Missing required input: options.url')
})

test('throws if missing options.credentials', async t => {
  const options = {
    url: 'http://url.com',
    credentials: false
  }
  const error = await t.throws(getToken(options))
  t.is(error.message, 'Missing required input: options.credentials')
})

test('throws if missing options.credentials.auth', async t => {
  const options = {
    url: 'http://url.com',
    credentials: {
      auth: false
    }
  }
  const error = await t.throws(getToken(options))
  t.is(error.message, 'Missing required input: options.credentials.auth')
})

test('throws if missing options.credentials.auth.username', async t => {
  const options = {
    url: 'http://url.com',
    credentials: {
      auth: {
        username: false
      }
    }
  }
  const error = await t.throws(getToken(options))
  t.is(error.message, 'Missing required input: options.credentials.auth.username')
})

test('throws if missing options.credentials.auth.password', async t => {
  const options = {
    url: 'http://url.com',
    credentials: {
      auth: {
        username: 'username',
        password: false
      }
    }
  }
  const error = await t.throws(getToken(options))
  t.is(error.message, 'Missing required input: options.credentials.auth.password')
})

test('throws if missing options.credentials.client', async t => {
  const options = {
    url: 'http://url.com',
    credentials: {
      auth: {
        username: 'username',
        password: 'password'
      },
      client: false
    }
  }
  const error = await t.throws(getToken(options))
  t.is(error.message, 'Missing required input: options.credentials.client')
})

test('throws if missing options.credentials.client.client_id', async t => {
  const options = {
    url: 'http://url.com',
    credentials: {
      auth: {
        username: 'username',
        password: 'password'
      },
      client: {
        client_id: false
      }
    }
  }
  const error = await t.throws(getToken(options))
  t.is(error.message, 'Missing required input: options.credentials.client.client_id')
})

test('throws if missing options.credentials.client.client_secret', async t => {
  const options = {
    url: 'http://url.com',
    credentials: {
      auth: {
        username: 'username',
        password: 'password'
      },
      client: {
        client_id: 'client_id',
        client_secret: false
      }
    }
  }
  const error = await t.throws(getToken(options))
  t.is(error.message, 'Missing required input: options.credentials.client.client_secret')
})
