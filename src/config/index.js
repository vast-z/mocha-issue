
const { program } = require('commander')

program
  .option('-c --conf <config>', 'Set config file')
  .option('-p --ploy <ploy>', 'Set ploy')

program.parse(process.argv)

