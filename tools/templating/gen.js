main = require('./src')
if (process.argv.length < 3) throw new Error('No command given')
main(process.argv[2])
