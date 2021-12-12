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
