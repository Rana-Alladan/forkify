import View from './View';
import PreviewView from './PreviewView';
import icons from 'url:../../img/icons.svg'; //parcel @2

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMesssage = 'No recipes found for your query, Please try another one! ';
  _successMessage = '';
  _generateMarkup() {
    return this._data.map(result => PreviewView.render(result, false)).join('');
  }
}

export default new ResultView();
