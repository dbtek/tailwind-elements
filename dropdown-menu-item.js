var html = require('bel')

module.exports = ({ label, onClick, href }) => html `
  <li><a href=${href} onclick=${onClick} class="px-4 py-2 block no-underline text-black hover:bg-grey-light">${label}</a></li>
`