const accordions = document.querySelectorAll('.catalog-time__wrapper');

for(item of accordions) {
    item.addEventListener('click', function() {
        if(this.classList.contains('catalog-time__wrapper_active')) {
            this.classList.remove('catalog-time__wrapper_active');
        } else {
            for(el of accordions) {
                el.classList.remove('catalog-time__wrapper_active');
            }
            this.classList.add('catalog-time__wrapper_active');
        }
    })
}
