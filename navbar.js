var html = require('bel')

module.exports = (props) => html `
  <nav class="flex items-center justify-between flex-wrap bg-blue px-4 shadow">
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">${props.brand}</span>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-blue-lighter border-blue-light hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-white text-sm">
      <div class="text-sm lg:flex-grow">
        ${props.items.map(item => html `<a href="${item.href}" class="no-underline block mt-4 lg:inline-block lg:mt-0 text-base text-indigo-lightest hover:text-white mr-4">${item.label}</a>`)}
      </div>
      <div>
        ${props.loginItem}
      </div>
    </div>
  </nav>
`