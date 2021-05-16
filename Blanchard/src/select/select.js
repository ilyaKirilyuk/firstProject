


let dropdownMainMenu = document.querySelector('ul.direction-list')
let parentsLinks = document.querySelectorAll('li.direction-list__item > a')
let dropdowns = document.querySelectorAll('.direction-list ul')
let icons = document.querySelectorAll('.direction-list a')

parentsLinks.forEach(item => {

  item.addEventListener('click', event => {
    let parentLi = item.parentNode
    let currentDropdown = parentLi.querySelector('ul')
    let currentIcon = parentLi.querySelector('a')
    if (currentDropdown) {
      if (!currentDropdown.classList.contains('show')) {
        let otherDropdowns = document.querySelectorAll('li.direction-list__item > ul')
        otherDropdowns.forEach((otherDropdownItem) => {
          otherDropdownItem.classList.remove('show')
        })
      }
      currentDropdown.classList.toggle('show')

    }  if (currentIcon) {
      if (!currentIcon.classList.contains('arrow-active')) {
        let otherDropdowns = document.querySelectorAll('li.direction-list__item > a')
        otherDropdowns.forEach((otherDropdownItem) => {
          otherDropdownItem.classList.remove('arrow-active')
        })
      }

      currentIcon.classList.toggle('arrow-active')
    }

    event.preventDefault()
  })



})

document.addEventListener("click", e => {
  if (!dropdownMainMenu.contains(e.target)) { //Метод contains для проверки на вложенность
    dropdowns.forEach(item => {
      item.classList.remove('show')
    })
    icons.forEach(item => {
      item.classList.remove('arrow-active')
    })
  }
})




