
// main.js
const pino = require('pino')

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true, // Enable colors
      translateTime: 'HH:MM:ss Z', // Format timestamps
      ignore: 'pid,hostname', // Remove unnecessary fields
    },
  },
})

logger.info('hello, world!')
module.exports = logger
