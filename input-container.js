var html = require('bel')

module.exports = (label, input) => {
  return html`
    <div class="px-3 mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="${input.name}">
        ${label}
      </label>
      ${input}
    </div>
  `
}