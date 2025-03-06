let menu = document.querySelector('.menu')
let nav = document.querySelector('.nav')
let body = document.querySelector('body')
let logo = document.querySelector('.logo')
let  = document.querySelector('body')

function showMenu() {
    if ( nav.style.display == 'block'){
        nav.style.display ='none';
        logo.style.background = 'white'
        nav.style.background = 'red'
    }
    else{
        nav.style.display ='block';
        logo.style.background = 'red'
        nav.style.background = 'red'
    }
}

menu.addEventListener('click', showMenu)

let  content = document.querySelector('.content')
let button = document.querySelector('button')

function showContent() {
    if ( content.style.display == 'block'){
        content.style.display ='none';
        
    }
    else{
        content.style.display ='block';
       
    }
}

function showContent() {
    content.style.display == 'block' ? content.style.display ='none' : content.style.display ='block'
}

button.addEventListener('click', showContent)


let faq = document.getElementsByClassName('container')

for (i=0; i < faq.length; i++){
    faq[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}



