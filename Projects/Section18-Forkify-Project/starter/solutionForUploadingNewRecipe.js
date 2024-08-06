/*
🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨
Konrad
2 upvotes
1 year ago
I did it! I'm so happy about myself 😅 My fix is to create a new method for inserting a markup in addRecipeView and call it two times in controller. After we upload a recipe or we get an error, so we can re-use the form the next time without reloading the page.

<iframe src="https://wtools.io/code/embed-iframe/bNT6" style="border:none;width:100%"></iframe>



I dunno how to post a code here...



addRecipeView.js



import View from './View.js';

import icons from 'url:../../img/icons.svg'; // Parcel 2



class AddRecipeView extends View {

  _parentElement = document.querySelector('.upload');

  _message = 'Recipe was successfully uploaded :)';



  _window = document.querySelector('.add-recipe-window');

  _overlay = document.querySelector('.overlay');

  _btnOpen = document.querySelector('.nav__btn--add-recipe');

  _btnClose = document.querySelector('.btn--close-modal');



  constructor() {

    super();

    this._addHandlerShowWindow();

    this._addHandlerHideWindow();

  }



  toggleWindow() {

    this._overlay.classList.toggle('hidden');

    this._window.classList.toggle('hidden');

  }



  _addHandlerShowWindow() {

    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));

  }



  _addHandlerHideWindow() {

    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));

    this._overlay.addEventListener('click', this.toggleWindow.bind(this));

  }



  addHandlerUpload(handler) {

    this._parentElement.addEventListener('submit', function (e) {

      e.preventDefault();

      const dataArr = [...new FormData(this)];

      const data = Object.fromEntries(dataArr);

      handler(data);

    });

  }



// RIGHT HERE! NEW METHOD

  renderUploadForm() {

    const markup = `

    <form class="upload">

        <div class="upload__column">

          <h3 class="upload__heading">Recipe data</h3>

          <label>Title</label>

          <input value="Test recipe" required name="title" type="text" />

          <label>URL</label>

          <input value="Test URL" required name="sourceUrl" type="text" />

          <label>Image URL</label>

          <input

            value="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"

            required

            name="image"

            type="text"

          />

          <label>Publisher</label>

          <input value="Test Publisher" required name="publisher" type="text" />

          <label>Prep time</label>

          <input value="60" required name="cookingTime" type="number" />

          <label>Servings</label>

          <input value="6" required name="servings" type="number" />

        </div>



        <div class="upload__column">

          <h3 class="upload__heading">Ingredients</h3>

          <label>Ingredient 1</label>

          <input

            value="0.5,kg,Rice"

            type="text"

            required

            name="ingredient-1"

            placeholder="Format: 'Quantity,Unit,Description'"

          />

          <label>Ingredient 2</label>

          <input

            value="1,,Avocado"

            type="text"

            name="ingredient-2"

            placeholder="Format: 'Quantity,Unit,Description'"

          />

          <label>Ingredient 3</label>

          <input

            value=",,salt"

            type="text"

            name="ingredient-3"

            placeholder="Format: 'Quantity,Unit,Description'"

          />

          <label>Ingredient 4</label>

          <input

            value=",,pepper"

            type="text"

            name="ingredient-4"

            placeholder="Format: 'Quantity,Unit,Description'"

          />

          <label>Ingredient 5</label>

          <input

            type="text"

            name="ingredient-5"

            placeholder="Format: 'Quantity,Unit,Description'"

          />

          <label>Ingredient 6</label>

          <input

            type="text"

            name="ingredient-6"

            placeholder="Format: 'Quantity,Unit,Description'"

          />

        </div>



        <button class="btn upload__btn">

          <svg>

            <use href="src/img/icons.svg#icon-upload-cloud"></use>

          </svg>

          <span>Upload</span>

        </button>

      </form>

    `;

    this._clear();

    this._parentElement.insertAdjacentHTML('afterbegin', markup);

  }

}



export default new AddRecipeView();



THEN IN CONTROLLER WE RE RENDER THIS UPLOAD MODAL WINDOW IN TWO PLACES



const controlAddRecipe = async function (newRecipe) {

  try {

    // Show loading spinner

    addRecipeView.renderSpinner();



    // Upload the new recipe data

    await model.uploadRecipe(newRecipe);

    // console.log(model.state.recipe);



    // Render recipe

    recipeView.render(model.state.recipe);



    // Success message

    addRecipeView.renderMessage();



    // Render bookmark view

    bookmarksView.render(model.state.bookmarks);



    // Change ID in URL

    window.history.pushState(null, '', `#${model.state.recipe.id}`);



    // Close form window

    setTimeout(function () {

      addRecipeView.toggleWindow();

    }, MODAL_CLOSE_SEC * 1000);



    // RIGHT HERE!

    // We need to re-render this modal window

    setTimeout(function () {

      addRecipeView.renderUploadForm();

    }, MODAL_CLOSE_SEC * 1150);

  } catch (err) {

    console.error('💥', err);

    addRecipeView.renderError(err.message);



// AFTER AN ERROR!

    setTimeout(function () {

      addRecipeView.renderUploadForm();

    }, MODAL_CLOSE_SEC * 1150);

  }

};


🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨

Adrian
0 upvotes
7 months ago
Filipe's solution is for a different problem, David has the correct problem but no solution and Konrad has a solution 
but I'm not sure it's the best way to do it, seems odd to have the HTML code exist in both the HTML and JS files.


🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨

Shiv
2 upvotes
6 months ago
Konrad's solution is a good one!

I tried to take Adrian's point on board and solve the problem of having the HTML code exist in two places. My solution injects the form markup from addRecipeView.js when the page initially loads.

In the code below, we add an event listener when the page loads (in _addHandlerRender) and attach it in the constructor function. The listener is handled by the resetForm method.


class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _defaultMessage = 'Recipe successfully added! :)';
 
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
 
  constructor() {
    super();
    this._addHandlerRender();
    this._addHandlerToggle();
  }
 
  resetForm() {
    this._clear();
    this._parentElement.insertAdjacentHTML(
      'afterbegin',
      this._generateFormMarkup()
    );
  }
 
  toggleModal() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }
 
  _addHandlerRender() {
    window.addEventListener('load', this.resetForm.bind(this));
  }
 
  _addHandlerToggle() {
    [this._btnClose, this._overlay, this._btnOpen].forEach(el =>
      el.addEventListener('click', this.toggleModal.bind(this))
    );
  }
 
  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }
 
  _generateFormMarkup() {
    return `
      <div class="upload__column">
        ... // rest of form markup
    `;
  }
}

Then like Konrad points out, in controller.js, in the controlAddRecipe function, we can add something like this:


setTimeout(() => {
  addRecipeView.toggleModal();
  setTimeout(() => addRecipeView.resetForm(), 500);
}, MODAL_CLOSE_DURATION * 1000);

in two places - after the success message is rendered (in the try block) and after the error message is rendered (in the catch block).

The reason for the second setTimeout is because there's a half second transition effect when the modal closes, so this is just a quick solution to not having the form be reset while the modal is transitioning its opacity.

OI
Add replys

*/
