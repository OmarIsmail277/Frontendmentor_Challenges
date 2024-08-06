import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      console.log(btn);

      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page; //1
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    ); //6 pages

    const nextBtn = `<button data-goto = ${
      curPage + 1
    } class = "btn--inline pagination__btn--next"> <span>Page ${
      curPage + 1
    }</span>
    <svg class ="search__icon"> <use href="${icons}#icon-arrow-right"></use></svg>`;

    const prevBtn = `<button data-goto = ${
      curPage - 1
    } class = "btn--inline pagination__btn--prev"> <span>Page ${
      curPage - 1
    }</span>
    <svg class ="search__icon"> <use href="${icons}#icon-arrow-left"></use></svg>`;

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) return nextBtn;

    // Last page
    if ((curPage === numPages) & (numPages > 1)) return prevBtn;

    // Other page
    if (curPage < numPages) return nextBtn + prevBtn;

    // if (numPages === 1)
    return '';
  }
}

export default new PaginationView();

// _generateBtnMarkup(type) {
//   let pageNumber = this._data.page;

//   const btnMarkup = `<button data-goto="${
//     type === 'next' ? pageNumber + 1 : pageNumber - 1
//   }"
//   class="btn--inline pagination__btn--${type}">

//   ${type === 'next' ? `<span>Page ${pageNumber + 1}</span>` : ''}

//     <svg class="search__icon">
//     <use href="${icons}#icon-arrow-${type === 'next' ? 'right' : 'left'}">
//   </use>
//     </svg>

//     ${type === 'prev' ? `<span>Page ${pageNumber - 1}</span>` : ''}
//     </button>`;

//   return btnMarkup;
// }
