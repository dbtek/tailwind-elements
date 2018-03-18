var html = require('choo/html')

module.exports = ({ title, content, onClose, actions }) => html `
  <div class="flex items-center justify-center fixed w-full pin overflow-auto flex z-20" style="background-color:rgba(0, 0, 0, 0.5);">
    <div class="max-w-md bg-white w-full md:w-1/2 lg:w-1/3 md:rounded px-6 py-2 shadow-lg">
      <div class="flex py-4">
        <div class="flex-1 font-bold text-xl">${title}</div>
        <button class="w-4 h-4" onclick=${onClose}>
          <svg class="text-grey hover:text-grey-darkest" role="button" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
        </button>
      </div>
      <div class="pb-4">
        ${content}
      </div>
      ${actions}
    </div>
  </div>
`
