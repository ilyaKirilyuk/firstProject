new JustValidate('.js-form', {
  colorWrong: '#9d5cd0',
  rules: {
    name: {
      required: true
    },
    tel: {
      required: true,

      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },

  },
  messages: {
    name: {
      required: 'Укажите ваше имя'
    },
    tel: {
      required: 'Укажите ваш телефон',
      function: 'Осталось совсем немного'
    },


  },
});
