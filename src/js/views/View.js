// icons pf parcel
import icons from 'url:../../img/icons.svg'; //parcel @2
export default class View {
  _data; // _ protected #private

  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return markup;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  //render only the changed elements
  update(data) {
    // if (!data || (Array.isArray(data) && data.length === 0))
    //   return this.renderError();
    this._data = data;
    const newMarkup = this._generateMarkup();

    // make newMarkup dom element
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newEl = Array.from(newDOM.querySelectorAll('*')); // since they return nodeList
    const currEl = Array.from(this._parentElement.querySelectorAll('*'));
    newEl.forEach((newEl, i) => {
      const curEl = currEl[i];
      // compare content
      //update for text
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      )
        curEl.textContent = newEl.textContent;

      //update attribute
      if (!newEl.isEqualNode(curEl))
        Array.from(newEl.attributes).forEach(attr => {
          curEl.setAttribute(attr.name, attr.value);
        });
    });
  }
  _clear() {
    this._parentElement.innerHTML = ''; // remove default text
  }

  renderSpinner() {
    const html = `
  <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div> `;
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }

  renderError(message = this._errorMesssage) {
    const html = `
    <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }

  renderMessage(message = this._message) {
    const html = `
            <div class="message">
          <div>
            <svg>
              <use href="${icons}svg#icon-smile"></use>
            </svg>
          </div>
          <p>${message} </p>
        </div>`;
    this._clear;
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }
}
