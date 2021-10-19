$('.owl-carousel').owlCarousel({
    loop:true, //efeito giratorio
    margin:10,  //espaco entre os filmes
    nav:true, //icones de circulo
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{ //numero de  px
            items:5 //numero e elementos que a tela suporta dependendo do tam da tela
        }
    }
})

function eventoYouTube(){
    location.replace("https://www.youtube.com/watch?v=qAS8f9L-vWc&ab_channel=FOXPortugal")
}