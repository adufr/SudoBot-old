const { Client } = require('klasa')

// Plugins
Client.use(require('klasa-member-gateway'))

// Schemas
const defaultGuildSchema = require(`./schemas/defaultGuildSchema`)

// Others
const funcs = require('./funcs')
const permissionLevels = require('./permissionLevels')

class SudoBotClient extends Client {
  constructor (options) {
    super({ ...options,
      permissionLevels,
      defaultGuildSchema,
      disabledCorePieces: ['commands']
    })
    this.funcs = funcs
  }
}

module.exports = SudoBotClient
