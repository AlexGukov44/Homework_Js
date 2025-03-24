document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(MotionPathPlugin)
    gsap.to('#circle', { x:650, y:650, duration: 7 })
        .then(() => gsap.to('#circle', { scale: 2, duration: 2 }));
    gsap.to('#circle', { x: 350, y: 350, backgroundColor: "blue", duration: 3 });
    gsap.to('#triangle', { x: 650, duration: 8 });
    gsap.to('#box', { rotation: 360, duration: 2 });
    gsap.to('#circle2', { scale: 2, duration: 5 })
        .then(() => gsap.to('#circle2', { y:100, duration: 3 }));
});