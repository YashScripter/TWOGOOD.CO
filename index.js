const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function videconAnimation() {
  var videcon = document.querySelector("#video-container");
  var playbtn = document.querySelector("#play");

  videcon.addEventListener("mouseenter", function () {
    gsap.to(playbtn, {
      opacity: 1,
      scale: 1,
    });
  });

  videcon.addEventListener("mouseleave", function () {
    gsap.to(playbtn, {
      opacity: 0,
      scale: 0,
    });
  });

  videcon.addEventListener("mousemove", function (dets) {
    gsap.to(playbtn, {
      left: dets.x - 50,
      top: dets.y - 45,
    });
  });
}
videconAnimation();

function loadinganimation() {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3,
  });
  gsap.from("#page1 #video-container", {
    scale: 0.8,
    opacity: 0,
    delay: 0.4,
    duration: 0.3,
  });
}
loadinganimation();

document.addEventListener("mousemove", function (dets) {
  gsap.to("#curser", {
    left: dets.x,
    top: dets.y,
  });
});
// document.querySelector('#child').addEventListener('mouseenter',function(){
//     gsap.to('#curser',{
//         transform: `translate(-50%,-50%) scale(1)`
//     })
// })
// document.querySelector('#child1').addEventListener('mouseleave',function(){
//     gsap.to('#curser',{
//         transform: `translate(-50%,-50%) scale(0.4)`
//     })
// })
var a = document.querySelectorAll(".child");
a.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    gsap.to("#curser", {
      transform: `translate(-50%,-50%) scale(1)`,
    })
  })
  elem.addEventListener("mouseleave", function () {
    gsap.to("#curser", {
      transform: `translate(-50%,-50%) scale(0)`,
    })
  })
})
