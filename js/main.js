// GSAP
const anim = document.querySelector('li.nav-item');

anim.addEventListener('click', animateFromTop);

function animateFromTop(){
    let tl = gsap.timeline();

    tl.to('.overlay .layer', {
        duration: 0.4,
        height: '100%',
        top: '0%',
        delay: 0.2,
        stagger: 0.05,
    })

    tl.to('.overlay .layer', {
        duration: 0.4,
        height: '100%',
        top: '100%',
        delay: 0.2,
        stagger: -0.05,
    })

    tl.set('.overlay .layer', { top: '0', height: '0'});
}

    // top and bottom animation

    // gsap.to(".layer1", {y: '100vh', delay: .5});
    // gsap.to(".layer2", {y: '100vh', delay: .15});
    // gsap.to(".layer3", {y: '100vh', delay: .25});
    // gsap.to(".layer4", {y: '-100vh', delay: .5});
    // gsap.to(".layer5", {y: '-100vh', delay: .15});
    // gsap.to(".layer6", {y: '-100vh', delay: .25});

    // // left and right animation

    // gsap.to(".lay1", {y: '100vh', delay: .5});
    // gsap.to(".lay2", {y: '100vh', delay: .15});
    // gsap.to(".lay3", {y: '100vh', delay: .25});
    // gsap.to(".lay4", {y: '-100vh', delay: .5});
    // gsap.to(".lay5", {y: '-100vh', delay: .15});
    // gsap.to(".lay6", {y: '-100vh', delay: .25});

