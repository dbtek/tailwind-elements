var html = require('bel')

module.exports = (title, subtitle) => html `
<header>
  <h2 class="text-md text-grey-darkest">${title}</h2>
  ${subtitle ? html `<p class="mb-2 uppercase text-sm text-grey font-bold">${subtitle}</p>` : ''}
</header>
`