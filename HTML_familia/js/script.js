  // fadeOut do loader
$(window).on("load", function() {
    $('.preloader').fadeOut(300);

});
//$('.conteudo').hide();
//$('.bg').hide();

//  // Adding horizantal parallax scrolling
//  var rellax = new Rellax('.rellax', {
//     // Activate horizantal scrolling
//     // Turned off by default
//     horizontal: false,
//     //Deactivate vertical scrolling
//     vertical: true
//   });

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// botao toTop:

// declare variable
var scrollTop = $(".scrollTop");

$(window).scroll(function() {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 100) {
        $(scrollTop).css("opacity", "1");
    } else {
        $(scrollTop).css("opacity", "0");
    }

}); // scroll END

//Click event to scroll to top
$(scrollTop).click(function() {
    $('html, body').animate({
    scrollTop: 0
    }, 800);
    /*
    setTimeout(() => {
        $('.conteudo').hide();
        $('.bg').hide();
    }, "1000")
    */
    return false;
});

//subir pagina ao expandir um painel
$(".collapse").on("shown.bs.collapse", function () {
    $("html, body").animate({ scrollTop: $(this).offset().top - 120 }, 200);
  });

//botao inicial
$('.inicio').click(()=> {
    $('html, body').animate({
        scrollTop: $("#tela02").offset().top
    }, 1000);
})

$('.btn-conteudo').click(()=> {
    $('html, body').animate({
        scrollTop: $(".link-container").offset().top
    }, 1000);
})


// links p o conteúdo
$('#link-1').click(()=>{
    /*
    $('.conteudo').hide()
    $('.bg').show()
    $('#conteudo-educadores').show();
    $('html, body').animate({
        scrollTop: $("#conteudo-educadores").offset().top
    }, 1000);
    */
   window.open('educadores.html', '_NEW');
})

$('#link-2').click(()=>{
    /*
    $('.conteudo').hide()    
    $('.bg').show()
    $('#conteudo-familia').show();
    $('html, body').animate({
        scrollTop: $("#conteudo-familia").offset().top
    }, 1000);*/
    window.open('familia.html', '_NEW');
})

$('#link-3').click(()=>{
    /*
    $('.conteudo').hide()
    $('.bg').show()
    $('#conteudo-criancas').show();
    $('html, body').animate({
        scrollTop: $("#conteudo-criancas").offset().top
    }, 1000);*/
    window.open('criancas.html', '_NEW');
})