document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.france-btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.france-btn').forEach(function (tabBtnActive) {
        tabBtnActive.classList.remove('btn-active')
      })
      document.querySelector(`[data-path="${path}"]`).classList.add('btn-active')

      document.querySelectorAll('.france-artist').forEach(function (tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })

  document.querySelectorAll('.germany-btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.germany-btn').forEach(function (tabBtnActive) {
        tabBtnActive.classList.remove('btn-active')
      })
      document.querySelector(`[data-path="${path}"]`).classList.add('btn-active')

      document.querySelectorAll('.germany-artist').forEach(function (tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })

  document.querySelectorAll('.italy-btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.italy-btn').forEach(function (tabBtnActive) {
        tabBtnActive.classList.remove('btn-active')
      })
      document.querySelector(`[data-path="${path}"]`).classList.add('btn-active')

      document.querySelectorAll('.italy-artist').forEach(function (tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })

  document.querySelectorAll('.russia-btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.russia-btn').forEach(function (tabBtnActive) {
        tabBtnActive.classList.remove('btn-active')
      })
      document.querySelector(`[data-path="${path}"]`).classList.add('btn-active')

      document.querySelectorAll('.russia-artist').forEach(function (tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })

  document.querySelectorAll('.belgium-btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.belgium-btn').forEach(function (tabBtnActive) {
        tabBtnActive.classList.remove('btn-active')
      })
      document.querySelector(`[data-path="${path}"]`).classList.add('btn-active')

      document.querySelectorAll('.belgium-artist').forEach(function (tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })




  document.querySelectorAll('.countries-list__btn').forEach(function (tabsCountry) {
    tabsCountry.addEventListener('click', function (event) {
      const countryPath = event.currentTarget.dataset.path

      document.querySelectorAll('.countries-list__btn').forEach(function (activeBtn) {
        activeBtn.classList.remove('country-btn')
      })
      document.querySelector(`[data-path="${countryPath}"]`).classList.add('country-btn')

      document.querySelectorAll('.catalog-item__country').forEach(function (tabContent) {
        tabContent.classList.remove('country-active')
      })
      document.querySelector(`[data-target="${countryPath}"]`).classList.add('country-active')
      document.querySelectorAll('.catalog-item__country').forEach(function (tabContent) {
        tabContent.classList.remove('_smooth')
      })
      setTimeout(function () {
        document.querySelector(`[data-target="${countryPath}"]`).classList.add('_smooth')
      }, 50);

    })
  })
})
