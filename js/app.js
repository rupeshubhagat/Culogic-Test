//owl-carosuel Trainer
$('#trainer-owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    nav:true,
    navText: ["<img src='assets/images/carousel/left-arrow.svg'>","<img src='assets/images/carousel/right-arrow.svg'>"],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})



// Owl-carousel Testimonial
$('#testimonial-owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})


