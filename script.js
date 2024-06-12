let text = document.querySelector('#text')
let img1 = document.querySelector('#img01')
let img2 = document.querySelector('#img02')
let img3 = document.querySelector('#img03')
let img4 = document.querySelector('#img04')

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    text.style.marginTop = value * -1.5 + 'px';
    img1.style.top = value * 0.75 + 'px';
    img2.style.top = value * 0.5 + 'px';
    img3.style.top = value * 0.25 + 'px';
})