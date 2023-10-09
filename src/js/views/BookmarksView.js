{
  /* <li class="preview">
  <a class="preview__link" href="#23456">
    <figure class="preview__fig">
      <img src="src/img/test-1.jpg" alt="Test" />
    </figure>
    <div class="preview__data">
      <h4 class="preview__name">Pasta with Tomato Cream ...</h4>
      <p class="preview__publisher">The Pioneer Woman</p>
    </div>
  </a>
</li>; */
}

import View from './View';
import PreviewView from './PreviewView';
import icons from 'url:../../img/icons.svg'; //parcel @2

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMesssage = 'No bookmarks yet!';
  _successMessage = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
  _generateMarkup() {
    debugger;
    return this._data.map(result => PreviewView.render(result, false)).join('');
  }
}

export default new BookmarksView();
