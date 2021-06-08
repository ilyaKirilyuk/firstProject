// вход
let enterBtns = document.querySelectorAll('.enter-link');
let enterForm = document.querySelector('.enter-form');
let enterClose = document.querySelector('.enter-close');
let headerBtns = document.querySelector('.header-top__btn-wrapper');
let burgerBtns = document.querySelector('.burger-menu__btns-wrapper');
let burgerProfile = document.querySelector('.burger-menu__profile');
let burgerExit = document.querySelector('.burger-menu__exit');
let coinsModal = document.querySelector('.coins-modal');
// регистрация
let rigistrationBtns = document.querySelectorAll('.registration-link');
let registrationForm = document.querySelector('.registration-form');
let registrationClose = document.querySelector('.registration-close');

// восстановление пароля
let recoveryLink = document.querySelector('.recovery-link');
let recoveryForm = document.querySelector('.recovery-form');
let recoveryClose = document.querySelector('.recovery-close');

// форма входа
enterBtns.forEach(function (enter) {
  enter.addEventListener('click', function () {
    enterForm.classList.add('enter-form_acive')
    registrationForm.classList.remove('registration-form_active')
  })
});

enterClose.addEventListener('click', function() {
  enterForm.classList.remove('enter-form_acive')

});

// форма регистрации
rigistrationBtns.forEach(function (registration) {
  registration.addEventListener('click', function () {
    registrationForm.classList.add('registration-form_active')
  })
});

registrationClose.addEventListener('click', function() {
  registrationForm.classList.remove('registration-form_active')
});


// форма восстановления пароля
recoveryLink.addEventListener('click', function() {
  recoveryForm.classList.add('recovery-form_active')
});

recoveryClose.addEventListener('click', function() {
  recoveryForm.classList.remove('recovery-form_active')
});

// смена хедера
let enter = document.querySelector('.enter');
let authorized = document.querySelector('.authorized');
// смена хедера
enter.addEventListener('click', function(e) {
  e.preventDefault();
  authorized.classList.add('authorized_active')
  burgerProfile.classList.add('burger-menu__profile_active')
  enterForm.classList.remove('enter-form_acive')
  headerBtns.classList.remove('header-top__btn-wrapper_active')
  burgerBtns.classList.remove('burger-menu__btns-wrapper_active')
  if (burgerProfile.classList.contains('burger-menu__profile_active')) {
    burgerExit.classList.add("burger-menu__exit_active")
  } else {
    burgerExit.classList.remove('burger-menu__exit_active')
  };
  if (authorized.classList.contains('authorized_active')) {
    coinsModal.classList.add('coins-modal_active')
  }
});

// добавление монет
let coinBtn = document.querySelector('.coins-modal__btn');
let balance = document.getElementById('balance');
let burgerBalance = document.getElementById('burger-balance');
let popupBalance = document.getElementById('popUp-balance');

coinBtn.addEventListener('click', function () {
  balance.innerHTML="100";
  burgerBalance.innerHTML="100";
  popupBalance.innerHTML="100";
  coinsModal.classList.remove('coins-modal_active')
});




// смена иконок lang
let langBtns = document.querySelectorAll('.lang__btn');
let langIcons = document.querySelectorAll('.lang__icon');


langBtns.forEach(function (lang) {
  lang.addEventListener('click', function (event) {
    const path = event.currentTarget.dataset.path



    langIcons.forEach(function (inactive) {
      inactive.classList.remove('lang__icon_active')
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('lang__icon_active')
  })
});





// бургер
let burger = document.querySelector('.header-top__burger');


burger.addEventListener('click', function() {
  burger.classList.toggle('header-top__burger_active')
  document.querySelector('.body').classList.toggle('body_lock')
})




// Поиск


let 
const screenWidth =  document.documentElement.clientWidth;
if (screenWidth > 992) {
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


