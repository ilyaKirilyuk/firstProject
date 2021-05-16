

  document.querySelectorAll('.editions-category__checkbox').forEach(function (activeBox) {
    activeBox.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelector(`[data-target="${path}"]`).classList.toggle('editions-category__label_checked')
    })
  })

  document.querySelector('.editions-category__btn').addEventListener('click', function(){
    document.querySelectorAll('.editions-category__label').forEach(function(active) {
      active.classList.toggle('editions-category__label_open')
    })
    document.querySelector('.editions-category__btn').classList.toggle('editions-category__btn_active')
  })
