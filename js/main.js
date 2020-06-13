var header = document.querySelector('header')
window.addEventListener('scroll', function(){
    var position = window.scrollY
    if(position >= 50){
        header.classList.add('onScroll')
    }else{
        header.classList.remove('onScroll')
    }
})

