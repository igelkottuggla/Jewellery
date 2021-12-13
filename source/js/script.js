(function () {
  const faqSection = document.querySelector('.faq');
  const faqList = document.querySelector('.faq__list');
  const faqBtns = document.querySelectorAll('.faq__button');

  if (faqSection) {
    faqList.classList.remove('faq__list--no-js');

    faqBtns.forEach((button) => {
      button.addEventListener('click', (evt) => {
        for (let i = 0; i < faqBtns.length; i++) {
          if (faqBtns[i] === evt.target) {
            faqBtns[i].parentElement.classList.toggle('faq__item--active');
          }
        }
      });
    });
  }
})();

(function () {
  const filterForm = document.querySelector('.filter__form');
  const filterGroups = document.querySelectorAll('.filter__control');
  const filterBtns = document.querySelectorAll('.filter__button--options');

  if (filterForm) {
    filterGroups.forEach((group) =>
      group.classList.remove('filter__control--no-js')
    );

    filterBtns.forEach((button) => {
      button.addEventListener('click', (evt) => {
        evt.preventDefault();
        for (let i = 0; i < filterBtns.length; i++) {
          if (filterBtns[i] === evt.target) {
            filterBtns[i].parentElement.classList.toggle(
                'filter__control--active'
            );
          }
        }
      });
    });
  }
})();


