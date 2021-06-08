new JustValidate('.js-form', {
  colorWrong: '#EF4747',
  rules: {
    password: {
      required: true,
      minLength: 6,


    },

  },
  messages: {
    password: {
      required: 'Минимум 6 символов',
      minLength: 'Минимум 6 символов'
    },

  },
});
