/*
Usage: gen path/name.type

Examples:

gen common.module
gen common/busy.service
gen app1/shipment.object (will generate objectModule, listModule, and detailModule commands)

*/


main = require('./src')
if (process.argv.length < 3) throw new Error('No command given')
main(process.argv[2])
