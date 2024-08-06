import icons from 'url:../../img/icons.svg';

export default class View {
  _data;

  /**
   * Render the recieved object to the DOM
   * @param {Object | Object[]} data The data to be rendered (e.g recipe)
   * @param {boolean} [render=true] if false, create a markup string, instead of rendering to the DOM
   * @returns {undefined | string} A markup string is returned if render=false
   * @this {Object} View instance
   * @author Omar Ismail by Jonas
   * @todo Finish implementation
   */
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    // setting the data on the calling view
    this._data = data;
    const markup = this._generateMarkup();
    // if (data.bookmarked) console.log('hurraaaaaaay navigate');

    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data) {
    // if (!data || (Array.isArray(data) && data.length === 0))
    //   return this.renderError();

    this._data = data;
    const newMarkup = this._generateMarkup();

    // virtual DOM living in memory
    const newDOM = document.createRange().createContextualFragment(newMarkup);

    // same DOM that would be visible on the page but without being rendered
    // Converting from NodeList to Array
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    // console.log(newElements);

    // current elements on the DOM (visible on the page)
    // Converting from NodeList to Array
    const currentElements = Array.from(
      this._parentElement.querySelectorAll('*')
    );

    // Comparing old elements to new elements
    newElements.forEach((newEl, i) => {
      const curEl = currentElements[i];
      // console.log(newEl.isEqualNode(curEl));

      // Updates changed text
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== '' &&
        newEl.firstChild?.nodeValue.trim() &&
        newEl.firstChild?.nodeValue.trim() !==
          curEl.firstChild?.nodeValue.trim()
      ) {
        console.log(newEl);
        curEl.textContent = newEl.textContent;
      }

      // Updates changed attributes
      if (!newEl.isEqualNode(curEl)) {
        // console.log('helldssdo', Array.from(newEl.attributes));
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
      }
    });
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner = function () {
    const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div> -->`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  };

  renderError(message = this._errorMessage) {
    const markup = `
       <div class="error">
          <div>
            <svg>
              <use href="${icons}#icon-alert-triangle"></use>
            </svg>
          </div>
              <p>${message}</p>
          </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(message = this._message) {
    const markup = `
       <div class="message">
          <div>
            <svg>
              <use href="${icons}#icon-smile"></use>
            </svg>
          </div>
              <p>${message}</p>
          </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
