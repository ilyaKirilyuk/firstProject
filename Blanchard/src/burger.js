// Меню бургер
const iconMenu = document.querySelector('.menu-icon');
const menuBody = document.querySelector('.menu-wrppaer');
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}


// Прокурутка при клике
const menuLinks = document.querySelectorAll('.nav-list__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });


  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

      if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}








// Поиск
const searchBtn = document.querySelector('.direction-form__btn');
const searchInput = document.querySelector('.direction-form__input');
const screenWidth =  document.documentElement.clientWidth;
if (screenWidth > 770) {
  searchBtn.addEventListener("click", function (e) {
    searchInput.classList.toggle('_active');
  });
} else {
  searchBtn.addEventListener("click", function (e) {
    searchInput.classList.remove('_active');
  });
}

const closeIcon = document.querySelector('.direction-form-close');
const directionForm = document.querySelector('.direction-form');


closeIcon.addEventListener("click", function (e) {
  closeIcon.classList.toggle('_close');
});


