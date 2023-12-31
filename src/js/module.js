import { API_URL, KEY } from './config.js';
import { AJAX } from './helpers.js';
import { KEY } from './config.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: 10,
  },
  bookmarks: [],
};
const createRecipeObject = function (data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    ...(recipe.key && { key: recipe.key }), // seprates the object key if exsit
  };
};
export const loadRecipe = async function (id) {
  try {
    const data = await AJAX(`${API_URL}/${id}?key=${KEY}`);
    state.recipe = createRecipeObject(data);
    if (state.bookmarks.some(b => b.id === id)) state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
    // end fetching data
  } catch (err) {
    console.error(`${err} !!`);
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await AJAX(`${API_URL}/?search=${query}&key=${KEY}`);
    console.log(data);

    state.search.results = data.data.recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
        ...(recipe.key && { key: recipe.key }), // seprates the object key if exsit
      };
    });
    state.search.page = 1;
    console.log(state.search.page);
  } catch (error) {
    console.error(`${err} !!`);
    throw err;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage; // 10 number of items in page
  return state.search.results.slice(start, end);
};

export const updateServings = function (Serving) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * Serving) / state.recipe.servings;
  });
  state.recipe.servings = Serving;
};
const presistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
  //add bookmark
  state.bookmarks.push(recipe);
  console.log(recipe);
  //marked
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  presistBookmarks();
};

export const removeBookmark = function (id) {
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1); // toremove it
  if (id === state.recipe.id) state.recipe.bookmarked = false;

  presistBookmarks();
};

const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
};
init();

const clearBookmark = function () {
  localStorage.clear('bookmarks');
};

export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        const ingArr = ing[1].split(',').map(el => el.trim());
        // const ingArr = ing[1].replaceAll(' ', '').split(',');
        if (ingArr.length !== 3)
          throw new Error(
            'Wrong ingredient fromat! Please use the correct format :)'
          );

        const [quantity, unit, description] = ingArr;

        return { quantity: quantity ? +quantity : null, unit, description };
      });

    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };

    const data = await AJAX(`${API_URL}/?key=${KEY}`, recipe);
    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
};

// export const uploadRecipe = async function (recipe) {
//   try {
//     const ingredients = Object.entries(recipe)
//       .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
//       .map(ing => {
//         const ingArr = ing[1].replaceAll(' ', '').split(',');
//         if (ingArr !== 3) throw new Error('Wrong ingrediantes format');
//         const [quantity, unit, description] = ingArr;
//         return { quantity: quantity ? +quantity : null, unit, description };
//       });
//     const recipe = {
//       title: recipe.title,
//       source_url: recipe.sourceUrl,
//       image_url: recipe.image,
//       publisher: recipe.publisher,
//       cooking_time: +recipe.cookingTime,
//       servings: +recipe.servings,
//       ingredients,
//     };
//     console.log(recipe);
//   } catch (err) {
//     throw err;
//   }
// };
