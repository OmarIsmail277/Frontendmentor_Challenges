import View from './View';
import icons from 'url:../../img/icons.svg';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successfully uploaded';

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

  renderUploadForm() {
    const markup = `
      <form class="upload">
        <div class="upload__column">
          <h3 class="upload__heading">Recipe data</h3>
  
          <label for="title">Title</label>
          <input
            id="title"
            value="Test recipe"
            required
            name="title"
            type="text"
          />
  
          <label for="sourceUrl">URL</label>
          <input
            id="sourceUrl"
            value="Test URL"
            required
            name="sourceUrl"
            type="text"
          />
  
          <label for="image">Image URL</label>
          <input
            id="image"
            value="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            required
            name="image"
            type="text"
          />
  
          <label for="publisher">Publisher</label>
          <input
            id="publisher"
            value="Test Publisher"
            required
            name="publisher"
            type="text"
          />
  
          <label for="cookingTime">Prep time</label>
          <input
            id="cookingTime"
            value="60"
            required
            name="cookingTime"
            type="number"
          />
  
          <label for="servings">Servings</label>
          <input
            id="servings"
            value="6"
            required
            name="servings"
            type="number"
          />
        </div>
  
        <div class="upload__column">
          <h3 class="upload__heading">Ingredients</h3>
  
          <label for="ingredient-1">Ingredient 1</label>
          <input
            id="ingredient-1"
            value="0.5,kg,Rice"
            type="text"
            required
            name="ingredient-1"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
  
          <label for="ingredient-2">Ingredient 2</label>
          <input
            id="ingredient-2"
            value="1,,Avocado"
            type="text"
            name="ingredient-2"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
  
          <label for="ingredient-3">Ingredient 3</label>
          <input
            id="ingredient-3"
            value=",,salt"
            type="text"
            name="ingredient-3"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
  
          <label for="ingredient-4">Ingredient 4</label>
          <input
            id="ingredient-4"
            value=",,pepper"
            type="text"
            name="ingredient-4"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
  
          <label for="ingredient-5">Ingredient 5</label>
          <input
            id="ingredient-5"
            type="text"
            name="ingredient-5"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
  
          <label for="ingredient-6">Ingredient 6</label>
          <input
            id="ingredient-6"
            type="text"
            name="ingredient-6"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </div>
  
        <button class="btn upload__btn">
          <svg>
            <use href="${icons}#icon-upload-cloud"></use>
          </svg>
          <span>Upload</span>
        </button>
      </form>
    `;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup() {}
}

export default new AddRecipeView();

// protected methods = used only inside this class
// to show this window, the controller does not interfere at all
/*
Now what we will have to do in the controller still
is to import this object here because otherwise,
our main script sort of controller will never
execute this file. And so then this object here
will never be created. And so the event listener
here will never be added.
*/

/*
We want to call this.toggleWindow. And now here
we can use our bind method as always, and then bind
the correct this keyword. So we have done this many
times before, so basically manually setting the this
keyword inside of this function here, now to the this
keyword that we actually want it to be. And so right
here, this of course, points to the current object
because otherwise, again, the this keyword inside of
this function would be the button on which the event
listener is attached to. And so with this, it should
now work and yeah, there is our form.
*/
