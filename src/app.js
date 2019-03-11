const SudoBotClient = require('./lib/SudoBotClient')
const packageJson = require('../package.json')
const config = require('./lib/config')

const client = new SudoBotClient({
  production: config.node_env,
  ownerID: '255065617705467912',
  language: 'fr-FR',
  prefix: ['sudo ', 'su '],
  typing: false,
  noPrefixDM: false,
  commandEditing: true,
  commandLogging: true,
  prefixCaseInsensitive: false,
  pieceDefaults: {
    commands: {
      bucket: 2,
      deletable: true,
      quotedStringSupport: true
    }
  },
  presence: {
    activity: {
      type: 'WATCHING',
      name: `sudo help - ${packageJson.version}`
    }
  },
  console: {
    useColor: true,
    timestamps: 'DD-MM-YYYY HH:mm:ss'
  },
  consoleEvents: { verbose: true }
})

client.login()
