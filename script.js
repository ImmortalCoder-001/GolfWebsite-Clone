var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+40+"px";
    crsr.style.top=dets.y+"px";
    blur.style.left=dets.x+"px";
    blur.style.top=dets.y+"px";

})

var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem ){
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 4;
        crsr.style.border = "0.1px solid #fff";
        crsr.style.backgroundColor = "transparent";
      });
      elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";
      });
})

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"95px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        scrub:1,
        start:"top -10%",
        end:"top -11%"
    }
})

gsap.to ("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -10%",
        end:"top -80%",
        scrub:1
    }
})

gsap.from("#about-us,#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
        scrub:1
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
        scrub:1
    }
})

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });

 gsap.from("#page4 h1", {
    y:30,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 80%",
      end: "top 70%",
      scrub: 3,
    },
  });
  