import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

// Ensuring Compatibility with older browsers
// polyfilling everything
import 'core-js/stable';
// polyfilling async/await
import 'regenerator-runtime/runtime';

// const recipeContainer = document.querySelector('.recipe');

// if (module.hot) module.hot.accept();

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 0) Update results view to highlight selected search result
    resultsView.update(model.getSearchResultsPage());

    // 1) Updating bookmarks view to highlight selected bookmark
    // debugger;
    bookmarksView.update(model.state.bookmarks);

    // 2) Loading the recipe
    await model.loadRecipe(id);

    // 3) Render the recipe
    recipeView.render(model.state.recipe);

    // if exporting the whole class
    // const recipeView = new recipeView(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
    console.error(err);
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results (await inside async function)
    await model.loadSearchResults(query);

    // 3) Render results temp
    // console.log(model.state.search.results);
    // resultsView.render(model.state.search.results); // all results
    // console.log('updated 22');
    resultsView.render(model.getSearchResultsPage(1)); // some results

    // 4) Render Pagination Results
    paginationView.render(model.state.search); // will be one button Page 2 anyways
  } catch (err) {
    console.error(`${err} 😫😪😫`);
  }
};

const controlPagination = function (goToPage) {
  // 1) Render NEW results
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 2) Render NEW Pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookMark = function () {
  // 1) Add/remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // 2) Update recipe view to fill the bookmark btn
  recipeView.update(model.state.recipe);

  // 3) Render bookmarks list (to add bookmarked recipe to the list)
  bookmarksView.render(model.state.bookmarks);
};

const removeIdOnRefresh = function () {
  window.onload = function () {
    document.location.hash = '';
  };
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    // Show loading spinner
    addRecipeView.renderSpinner();

    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    // Render the new recipe
    recipeView.render(model.state.recipe);

    // Display success message
    addRecipeView.renderMessage();

    // Render bookmarks view
    bookmarksView.render(model.state.bookmarks);

    // Change ID in URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // Close the form window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);

    // Render Form again
    setTimeout(function () {
      addRecipeView.renderUploadForm();
    }, MODAL_CLOSE_SEC * 1500);
  } catch (err) {
    console.error('🥶', err);
    addRecipeView.renderError(err.message);

    setTimeout(function () {
      addRecipeView.renderUploadForm();
    }, MODAL_CLOSE_SEC * 1000);
  }
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookMark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
  // controlServings(); // won't work cuz recipes not arrive yet from API(async issue)
};

init();

//2- control Bookmark
