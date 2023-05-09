$("#sidebaricon-spotify").mouseover(function(){
    $("#sidebaricon-insta").animate({
        opacity: "40%"
    }, 200)
    $("#sidebaricon-linkedin").animate({
        opacity: "40%"
    }, 200)
    $("#sidebaricon-yt").animate({
        opacity: "40%"
    }, 200)
    $("#sidebaricon-spotify").animate({
        opacity: "110%"
    }, 200)
})

$("#sidebaricon-spotify").mouseout(function(){
    $("#sidebaricon-insta").animate({
        opacity: "100%"
    }, 200)
    $("#sidebaricon-linkedin").animate({
        opacity: "100%"
    }, 200)
    $("#sidebaricon-yt").animate({
        opacity: "100%"
    }, 200)
    $("#sidebaricon-spotify").animate({
        opacity: "100%"
    }, 200)
})

$("#sidebaricon-insta").mouseover(function(){
    $("#sidebaricon-insta").animate({
        opacity: "110%"
    }, 200)
    $("#sidebaricon-linkedin").animate({
        opacity: "40%"
    }, 200)
    $("#sidebaricon-yt").animate({
        opacity: "40%"
    }, 200)
    $("#sidebaricon-spotify").animate({
        opacity: "40%"
    }, 200)
})

$("#sidebaricon-insta").mouseout(function(){
    $("#sidebaricon-insta").animate({
        opacity: "100%"
    }, 200)
    $("#sidebaricon-linkedin").animate({
        opacity: "100%"
    }, 200)
    $("#sidebaricon-yt").animate({
        opacity: "100%"
    }, 200)
    $("#sidebaricon-spotify").animate({
        opacity: "100%"
    }, 200)
})


$("#sidebaricon-linkedin").mouseover(function(){
    $("#sidebaricon-insta").animate({
        opacity: "40%"
    }, 200)
    $("#sidebaricon-linkedin").animate({
        opacity: "110%"
    }, 200)
    $("#sidebaricon-yt").animate({
        opacity: "40%"
    }, 200)
    $("#sidebaricon-spotify").animate({
        opacity: "40%"
    }, 200)
})

$("#sidebaricon-linkedin").mouseout(function(){
    $("#sidebaricon-insta").animate({
        opacity: "100%"
    }, 200)
    $("#sidebaricon-linkedin").animate({
        opacity: "100%"
    }, 200)
    $("#sidebaricon-yt").animate({
        opacity: "100%"
    }, 200)
    $("#sidebaricon-spotify").animate({
        opacity: "100%"
    }, 200)
})


$("#sidebaricon-yt").mouseover(function(){
    $("#sidebaricon-insta").animate({
        opacity: "40%"
    }, 200)
    $("#sidebaricon-linkedin").animate({
        opacity: "40%"
    }, 200)
    $("#sidebaricon-yt").animate({
        opacity: "110%"
    }, 200)
    $("#sidebaricon-spotify").animate({
        opacity: "40%"
    }, 200)
})

$("#sidebaricon-yt").mouseout(function(){
    $("#sidebaricon-insta").animate({
        opacity: "100%"
    }, 200)
    $("#sidebaricon-linkedin").animate({
        opacity: "100%"
    }, 200)
    $("#sidebaricon-yt").animate({
        opacity: "100%"
    }, 200)
    $("#sidebaricon-spotify").animate({
        opacity: "100%"
    }, 200)
})



const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}
// Move the cursor
function onMouseMove(e) {
    TweenMax.to($bigBall, .4, {
      x: e.clientX - 15,
      y: e.clientY - 15

    })
    $(".cursor").css("display", "block")
  TweenMax.to($smallBall, .1, {
    x: e.clientX - 5,
    y: e.clientY - 5
  })
}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 2
  })
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1
  })
}

$("#menu-icon").click(function(){
    $(".menu").show("slide", {direction: "left"}, 1000)
})
$("#work-stills").mouseenter(function() {
    $(".workhr").stop().animate({
      opacity: "30%"
    }, 500);
    $("#work-motion").stop().animate({
      opacity: "30%"
    }, 500);
    $("#work-nature").stop().animate({
      opacity: "30%"
    }, 500);
    $("#work-skies").stop().animate({
      opacity: "30%"
    }, 500);
    $("#work-videos").stop().animate({
      opacity: "30%"
    }, 500);
    $("#stills-heroimg").css("filter", "drop-shadow(0 0 0.9rem rgba(255, 255, 255, 0.4))");
    $("#motion-heroimg").stop().animate({
      opacity: "30%"
    }, 500);
    $("#nature-heroimg").stop().animate({
      opacity: "30%"
    }, 500);
    $("#skies-heroimg").stop().animate({
      opacity: "30%"
    }, 500);
    $("#videos-heroimg").stop().animate({
      opacity: "30%"
    }, 500);
  });
  
  $("#work-stills").mouseleave(function() {
    $(".workhr").stop().animate({
      opacity: "100%"
    }, 500);
    $("#work-motion").stop().animate({
      opacity: "100%"
    }, 500);
    $("#work-nature").stop().animate({
      opacity: "100%"
    }, 500);
    $("#work-skies").stop().animate({
      opacity: "100%"
    }, 500);
    $("#work-videos").stop().animate({
      opacity: "100%"
    }, 500);
    $("#stills-heroimg").css("filter", "drop-shadow(0 0 0rem rgba(255, 255, 255, 0.4))");
    $("#motion-heroimg").stop().animate({
      opacity: "100%"
    }, 500);
    $("#nature-heroimg").stop().animate({
      opacity: "100%"
    }, 500);
    $("#skies-heroimg").stop().animate({
      opacity: "100%"
    }, 500);
    $("#videos-heroimg").stop().animate({
      opacity: "100%"
    }, 500);
  });
  

  $("#work-motion").mouseenter(function() {
    $(".workhr").stop().animate({
      opacity: "30%"
    }, 500);
    $("#work-stills").stop().animate({
      opacity: "30%"
    }, 500);
    $("#work-nature").stop().animate({
      opacity: "30%"
    }, 500);
    $("#work-skies").stop().animate({
      opacity: "30%"
    }, 500);
    $("#work-videos").stop().animate({
      opacity: "30%"
    }, 500);
    $("#motion-heroimg").css("filter", "drop-shadow(0 0 0.9rem rgba(255, 255, 255, 0.4))");
    $("#stills-heroimg").stop().animate({
      opacity: "30%"
    }, 500);
    $("#nature-heroimg").stop().animate({
      opacity: "30%"
    }, 500);
    $("#skies-heroimg").stop().animate({
      opacity: "30%"
    }, 500);
    $("#videos-heroimg").stop().animate({
      opacity: "30%"
    }, 500);
  });
  
  $("#work-motion").mouseleave(function() {
    $(".workhr").stop().animate({
      opacity: "100%"
    }, 500);
    $("#work-stills").stop().animate({
      opacity: "100%"
    }, 500);
    $("#work-nature").stop().animate({
      opacity: "100%"
    }, 500);
    $("#work-skies").stop().animate({
      opacity: "100%"
    }, 500);
    $("#work-videos").stop().animate({
      opacity: "100%"
    }, 500);
    $("#motion-heroimg").css("filter", "drop-shadow(0 0 0rem rgba(255, 255, 255, 0.4))");
    $("#stills-heroimg").stop().animate({
      opacity: "100%"
    }, 500);
    $("#nature-heroimg").stop().animate({
      opacity: "100%"
    }, 500);
    $("#skies-heroimg").stop().animate({
      opacity: "100%"
    }, 500);
    $("#videos-heroimg").stop().animate({
      opacity: "100%"
    }, 500);
  });


  $("#work-nature").mouseenter(function() {
    $(".workhr").stop().animate({
      opacity: "30%"
    }, 500);
    $("#work-motion").stop().animate({
      opacity: "30%"
    }, 500);
    $("#work-stills").stop().animate({
      opacity: "30%"
    }, 500);
    $("#work-skies").stop().animate({
      opacity: "30%"
    }, 500);
    $("#work-videos").stop().animate({
      opacity: "30%"
    }, 500);
    $("#nature-heroimg").css("filter", "drop-shadow(0 0 0.9rem rgba(255, 255, 255, 0.4))");
    $("#motion-heroimg").stop().animate({
      opacity: "30%"
    }, 500);
    $("#stills-heroimg").stop().animate({
      opacity: "30%"
    }, 500);
    $("#skies-heroimg").stop().animate({
      opacity: "30%"
    }, 500);
    $("#videos-heroimg").stop().animate({
      opacity: "30%"
    }, 500);
  });
  
  $("#work-nature").mouseleave(function() {
    $(".workhr").stop().animate({
      opacity: "100%"
    }, 500);
    $("#work-motion").stop().animate({
      opacity: "100%"
    }, 500);
    $("#work-stills").stop().animate({
      opacity: "100%"
    }, 500);
    $("#work-skies").stop().animate({
      opacity: "100%"
    }, 500);
    $("#work-videos").stop().animate({
      opacity: "100%"
    }, 500);
    $("#nature-heroimg").css("filter", "drop-shadow(0 0 0rem rgba(255, 255, 255, 0.4))");
    $("#motion-heroimg").stop().animate({
      opacity: "100%"
    }, 500);
    $("#stills-heroimg").stop().animate({
      opacity: "100%"
    }, 500);
    $("#skies-heroimg").stop().animate({
      opacity: "100%"
    }, 500);
    $("#videos-heroimg").stop().animate({
      opacity: "100%"
    }, 500);
  });


  $("#work-skies").mouseenter(function() {
    $(".workhr").stop().animate({
      opacity: "30%"
    }, 500);
    $("#work-motion").stop().animate({
      opacity: "30%"
    }, 500);
    $("#work-nature").stop().animate({
      opacity: "30%"
    }, 500);
    $("#work-stills").stop().animate({
      opacity: "30%"
    }, 500);
    $("#work-videos").stop().animate({
      opacity: "30%"
    }, 500);
    $("#skies-heroimg").css("filter", "drop-shadow(0 0 0.9rem rgba(255, 255, 255, 0.4))");
    $("#motion-heroimg").stop().animate({
      opacity: "30%"
    }, 500);
    $("#nature-heroimg").stop().animate({
      opacity: "30%"
    }, 500);
    $("#stills-heroimg").stop().animate({
      opacity: "30%"
    }, 500);
    $("#videos-heroimg").stop().animate({
      opacity: "30%"
    }, 500);
  });
  
  $("#work-skies").mouseleave(function() {
    $(".workhr").stop().animate({
      opacity: "100%"
    }, 500);
    $("#work-motion").stop().animate({
      opacity: "100%"
    }, 500);
    $("#work-nature").stop().animate({
      opacity: "100%"
    }, 500);
    $("#work-stills").stop().animate({
      opacity: "100%"
    }, 500);
    $("#work-videos").stop().animate({
      opacity: "100%"
    }, 500);
    $("#skies-heroimg").css("filter", "drop-shadow(0 0 0rem rgba(255, 255, 255, 0.4))");
    $("#motion-heroimg").stop().animate({
      opacity: "100%"
    }, 500);
    $("#nature-heroimg").stop().animate({
      opacity: "100%"
    }, 500);
    $("#stills-heroimg").stop().animate({
      opacity: "100%"
    }, 500);
    $("#videos-heroimg").stop().animate({
      opacity: "100%"
    }, 500);
  });