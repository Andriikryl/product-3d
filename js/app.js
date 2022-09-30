


const burger = document?.querySelector('[data-burger]');

const nav = document?.querySelector('[data-nav]');
const body = document.body;

burger?.addEventListener('click', () => {
    body.classList.toggle('stop-scroll');
    burger?.classList.toggle('burger--active');
    nav.classList.toggle('nav--visible');
})


// let els = document.querySelectorAll(".js-splitme");
// [].forEach.call(els, function(el) {
//     el.outerHTML = Splitter(el.outerHTML, '<span class="letter">$</span>');
// });



// gsap - Animation

let tl = new TimelineMax();

tl.fromTo('.loder__inside', 3, {scale: 0.01}, {scale: 1, onComplete: function(){
    $(`.loder`).remove();
}})

tl.fromTo('.header__left', 1, {y:-100,opacity:0}, {y:0,opacity: 1})

tl.staggerFromTo('.nav a', 0.5, {opacity:0,y: 30}, {opacity: 1,y: 0}, 0.05 );

tl.staggerFromTo('.hero__title .word', 3.3, {y: 40, opacity: 0}, {y:0, opacity:1,ease: Back.easeOut.config(3)}, 0.8 )

tl.fromTo('.list', 1, {y:-100,opacity:0}, {y:0,opacity: 1}, "-=0.2")

tl.fromTo('.list__two', 2, {y:-100,opacity:0}, {y:0,opacity: 1}, "-=0.3")

tl.fromTo('.list__thre', 2.3, {y:-100,opacity:0}, {y:0,opacity: 1}, "-=0.4")
