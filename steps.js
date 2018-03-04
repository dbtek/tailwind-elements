var html = require('bel')
var css = require('sheetify')

var _className = css `
  :host .step {
    vertical-align: -0.38rem;
  }
`

module.exports = (items = []) => html`
  <div class="steps flex items-center justify-center">
    ${items.map(item => html`
      <div class="step flex-1 flex items-center justify-center">
        <span class="flex-1 border-t border-grey"></span>
        <a class="text-white rounded-full py-1 px-2 no-underline mx-4 text-sm flex items-center justify-center shadow-md ${item.active ? 'bg-blue' : 'bg-grey'}" href="${item.href}" onclick=${item.onclick}>${item.label}</a>
        <span class="flex-1 border-t border-grey"></span>
      </div>
    `)}
  </div>
` 