gsap.registerPlugin(ScrollTrigger);

var scroll = new SmoothScroll('.navbar a[href*="#"]', {
  speed: 1000
});
let star1 = document.getElementById('star1');
let star2 = document.getElementById('star2');
let star3 = document.getElementById('star3');
const text = document.getElementById('text');
let circle = document.getElementById("butts");

gsap.to(circle, {
  opacity: 0,
  duration: 1, 
  scrollTrigger: {
    trigger: text,
    start: "top top",
    toggleActions: "restart none reverse none",
    scrub: 1
  }
});

let test = Math.floor(Math.random()) * 100
const tl1 = gsap.timeline(
{
  repeat: -1,

});
//2 stars above/below each other with alternating routes
function scene1() {
  const tl = gsap.timeline(
    {
      repeat: -1,
    });
tl.to(star1, {x: 500, duration: 2})
tl.to(star1, {x: -500, duration: 4})
tl.to(star1, {x: 500, duration: 4});
return tl;
  }

function scene2() {
const tl = gsap.timeline(
  {
    repeat: -1,
    
  });
  
  tl.to(star2, {x: -500, duration: 2})
  tl.to(star2, {x: 500, duration: 4})
  tl.to(star2, {x: -500, duration: 4});
  return tl;
}
  let master = gsap.timeline()
  .add(scene1())
  .add(scene2(), "-=0")
  
  
 