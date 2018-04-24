var html = require('bel')
var Component = require('nanocomponent')

class Dropdown extends Component {
  static identity ([ props ]) {
    return props.id
  }

  constructor () {
    super(...arguments)
    this.opened = false
  }

  toggle (e) {
    e.preventDefault()
    e.stopPropagation()
    this.opened = !this.opened
    this.rerender()
  }

  createElement ({ label, items, className }) {
    this.items = items
    this.label = label

    return html `
      <div class="w-48 z-20">
        ${this.opened ? html `
          <div class="absolute pin bg-black-lightest z-10" onclick=${this.toggle.bind(this)}></div>
        `: ''}
        <div class="relative ${className}">
          <a class="p-3 rounded cursor-pointer" onclick=${this.toggle.bind(this)}>
            ${label}
          </a>
          ${this.opened ? html `
            <div class="z-20 rounded shadow-md mt-8 bg-white absolute pin-t pin-l min-w-full">
              <ul class="list-reset text-left">
                ${items}
              </ul>
            </div>
          `: ''}
        </div>
      </div>
    `
  }

  update (props) {
    return this.items !== props.items || this.label !== props.label
  }
}

module.exports = Dropdown
