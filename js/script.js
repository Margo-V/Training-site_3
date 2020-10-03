// animated form
$(function() {
  	$('.offer__link').click( function() {
  		$('.form').addClass('animate__fadeInUp').css('display', 'flex');
  	});
// window.alert = function(){};
//         var defaultCSS = document.getElementById('bootstrap-css');
//         function changeCSS(css){
//             if(css) $('head > link').filter(':first').replaceWith('<link rel="stylesheet" href="'+ css +'" type="text/css" />'); 
//             else $('head > link').filter(':first').replaceWith(defaultCSS); 
//         }
//         $( document ).ready(function() {
//           var iframe_height = parseInt($('html').height()); 
//           window.parent.postMessage( iframe_height, 'https://bootsnipp.com');
//         });

    $("div.tabs-links>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.tabs-content>div.tabs-content__item").removeClass("active");
        $("div.tabs-content>div.tabs-content__item").eq(index).addClass("active");
    });
});