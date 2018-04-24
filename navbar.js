var html = require('bel')

module.exports = (props) => html `
  <nav class="flex items-center justify-between flex-wrap bg-blue px-4 shadow">
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">${props.brand}</span>
    </div>
    <div class="flex-grow flex lg:items-center text-white text-sm">
      <div class="text-sm flex-grow">
        ${props.items.map(item => html `<a href="${item.href}" class="no-underline block mt-4 lg:inline-block lg:mt-0 text-base text-indigo-lightest hover:text-white mr-4">${item.label}</a>`)}
      </div>
      <div>
        ${props.loginItem}
      </div>
    </div>
  </nav>
`
