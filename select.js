var html = require('bel')

module.exports = ({ name='', value='', options, onChange, className = '' }) => html `
  <div class="relative">
    <select class="${className} block appearance-none w-full h-full bg-grey-lighter border border-grey-lighter text-grey-darker shadow py-3 px-4 pr-8 rounded"
      name=${name} value=${value} onchange=${onChange}>
      ${options.map ? options.map(o => html `<option value="${o.value || o}">${o.label || o}</option>`) : options }
    </select>
    <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
      <svg class="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
    </div>
  </div>
`