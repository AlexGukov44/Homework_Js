
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(MotionPathPlugin)
    gsap.to('#circle', { x:650, y:650, duration: 4, backgroundColor: "blue",
        onComplete: () => {
            gsap.to('#circle', { scale: 2, duration: 2 });
        }
     });
    gsap.to('#triangle', { x: 650, duration: 8 });
    gsap.to('#box', { rotation: 360, duration: 8 });
    gsap.to('#circle2', { scale: 2, duration: 6 })
        .then(() => gsap.to('#circle2', { y:100, duration: 2 }));
}); 
