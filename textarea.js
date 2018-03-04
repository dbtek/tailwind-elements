var html = require('bel')

module.exports = ({ name = '', placeholder = '', value = '', onChange, className = ''}) => html `
  <textarea class="${className} shadow appearance-none bg-grey-lighter border border-grey-lighter rounded w-full py-3 px-3 text-grey-darker"
    name=${name} placeholder=${placeholder} onchange=${onChange}>${value}</textarea>
`