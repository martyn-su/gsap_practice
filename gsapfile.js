
gsap.to("h1", { duration: 3, opacity: .1 });

var play = document.querySelector("#play");
var pause = document.querySelector("#pause");
var resume = document.querySelector("#resume");
var reverse = document.querySelector("#reverse");
var restart = document.querySelector("#restart");

var tl = gsap.timeline({ paused: true });


tl.to(".orange", { duration: 1, x: 200, rotation: -360, scale: .1 });
tl.to(".purple", { duration: 2, x: 500, rotation: 0, scale: 5, ease: "bounce" });
tl.to(".gray", { duration: 3, x: 1000, rotation: 130, scale: 3});
tl.to(".green", { duration: 3, x: 800, rotation: 0, scale: .3 });
tl.to(".word", { duration: 1, x: 1200, rotation: -90, scale: 5, ease: "bounce" });
tl.to(".dis", { duration: 5, x: 100, rotation: -360, scale: 1});

play.onclick = function () {
    tl.play();
}

pause.onclick = function () {
    tl.pause();
}

resume.onclick = function () {
    tl.resume();
}

reverse.onclick = function () {
    tl.reverse();
}

restart.onclick = function () {
    tl.restart();
}


document.querySelectorAll(".box").forEach(function (box) {
    box.addEventListener("click", function () {
        gsap.to(".box", { duration: 0.5, opacity: 0, y: -100, stagger: 0.1, ease: "back.in" });


    });
});

document.querySelectorAll(".box").forEach(function (box) {
    rev.addEventListener("click", function () {
        gsap.to(".box", { duration: 1, opacity: 1, y: 0, stagger: 0.1, ease: "back.in" });

    });
});