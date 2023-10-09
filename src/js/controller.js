// import icons from '../img/icons.svg';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { MODAL_CLOSE_SEC } from './config.js';
import * as model from './module.js';
import recipeView from './views/recipeView.js';
import SearchView from './views/SearchView.js';
import BookmarksView from './views/BookmarksView.js';
import ResultsView from './views/ResultsView.js';
import PagesView from './views/PagesView.js';
import addRecipeView from './views/addRecipeView.js';

// if (module.hot) module.hot.accept(); // parcel for reload
// console.log(icons);
// const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    // console.log('hello');
    // displayin the info whenever the hash change i.e #num(id)
    const id = window.location.hash.slice(1);
    if (!id) return;
    // waitting spinner
    recipeView.renderSpinner(); // recipeView from recipeView file

    // update selected
    ResultsView.update(model.getSearchResultsPage());
    BookmarksView.update(model.state.bookmarks);
    //1- loading recipe
    await model.loadRecipe(id);

    //(model is from module.js)

    //2- rendering the info to html
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    ResultsView.renderSpinner();
    // get search value
    const query = SearchView.getQuery();
    if (!query) return;

    // load info
    await model.loadSearchResults(query);

    //render info

    // ResultsView.render(model.state.search.results);
    ResultsView.render(model.getSearchResultsPage(3));

    //render next prev icons
    PagesView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const control = function (page) {
  ResultsView.render(model.getSearchResultsPage(page));

  //render next prev icons
  PagesView.render(model.state.search);
};

const controlServings = function (newServings) {
  //Update recipe
  model.updateServings(newServings);

  //update view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  debugger;
  const modelRecipe = model.state.recipe;
  if (!modelRecipe.bookmarked) model.addBookmark(modelRecipe);
  else model.removeBookmark(modelRecipe.id);

  //Update recipe view
  recipeView.update(modelRecipe);

  //render bookmarks
  BookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  BookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (Newrecipe) {
  try {
    debugger;
    addRecipeView.renderSpinner();
    await model.uploadRecipe(Newrecipe);

    recipeView.render(model.state.recipe);

    // succ msg
    addRecipeView.renderMessage();

    //render bookmark
    BookmarksView.render(model.state.bookmarks);

    //change url id
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
    //close window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (error) {
    console.log(error);
    addRecipeView.renderError(error.message);
  }
};
const init = function () {
  BookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerBookmark(controlAddBookmark);
  SearchView.addHandlerSearch(controlSearchResults);
  PagesView.addHandlerClick(control);
  recipeView.addHAndlerServings(controlServings);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();
