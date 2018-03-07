var html = require('bel')

module.exports = ({ type = 'text', name = '', placeholder = '', value = '', onChange, required = false, className = ''}) => html `
  <input class="${className} shadow appearance-none bg-grey-lighter border border-grey-lighter rounded py-3 px-4 text-grey-darker"
    type=${type} name=${name} placeholder=${placeholder} value=${value} onchange=${onChange} required=${required}>
`