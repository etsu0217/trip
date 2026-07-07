// top page
$(function(){
$(window).scroll(function(){
    if ($(window).scrollTop() > 500) { 
     $("#pageTop").fadeIn(500)}else{ 
      $("#pageTop").fadeOut(500)}
  })
}); 

$(function(){ 
  $("#pageTop").click(function(){ 
   $("body,html").animate({scrollTop:0},1000)
  ;return false})
});

// バーガーメニュー
$(function(){ 
    $(".burger").click(function () {
      $(".burger").toggleClass("is-active");
      // $(".menu").toggleClass("is-active");
      $(".menu").slideToggle();
      $(".menu").css("display","flex");
    })
  }); 

  // 画像をふわっと表示
  $(function(){
    $(window).scroll(function (){
        $('.room').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 50){
              $(this).addClass('active');
            }
        });
    });
});
  $(function(){
    $(window).scroll(function (){
        $('.food').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200){
              $(this).addClass('active');
            }
        });
    });
});
$(function(){
  $(window).scroll(function (){
      $('.container').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 200){
            $(this).addClass('active');
          }
      });
  });
});
$(function(){
  $(window).scroll(function (){
      $('.news-item').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 200){
            $(this).addClass('active');
          }
      });
  });
});
$(function(){
  $(window).scroll(function (){
      $('#text').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 200){
            $(this).addClass('active');
          }
      });
  });
});
$(function(){
  $(window).on("scroll load", function(){
      $('.image p').each(function(){
          if ($(window).scrollTop() > $(this).offset().top - $(window).height() + $(window).height()/5 ){
              $(this).css({transform: "translate(0,0)",opacity:0.7})
          }
      });
  });
});

