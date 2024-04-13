ScrollTrigger.create({
    animation: gsap.from(".Logo", {
        y: "50vh",
        scale: 6,
        yPercent: -50,
    }),
    scrub: true,
    trigger: ".Content",
    start: "top bottom",
    endTrigger: ".Content",
    end: "top center",
});

gsap.from(".Subtitulo", {
    scrollTrigger: {
       trigger: ".Subtitulo",
       start: "top bottom",
       end: "top top",
       scrub: true,
       markers: false,
    },
    autoAlpha: 1,
    y: 0,
    ease: "power1.inOut",
   });
   
   gsap.to(".Subtitulo", {
    scrollTrigger: {
       trigger: ".Subtitulo",
       start: "top bottom",
       end: "top top",
       scrub: true,
       markers: false,
    },
    autoAlpha: 0,
    y: -100,
    ease: "power1.inOut",
   });
   

   gsap.from(".Subtitulo2", {
    scrollTrigger: {
       trigger: ".Subtitulo2",
       start: "top bottom",
       end: "top top",
       scrub: true,
       markers: false,
    },
    autoAlpha: 1,
    y: 0,
    ease: "power1.inOut",
   });
   
   gsap.to(".Subtitulo2", {
    scrollTrigger: {
       trigger: ".Subtitulo2",
       start: "top bottom",
       end: "top top",
       scrub: true,
       markers: false,
    },
    autoAlpha: 0,
    y: -100,
    ease: "power1.inOut",
   });

   gsap.from(".Subtitulo3", {
    scrollTrigger: {
       trigger: ".Subtitulo3",
       start: "top bottom",
       end: "top top",
       scrub: true,
       markers: false,
    },
    autoAlpha: 1,
    y: 0,
    ease: "power1.inOut",
   });
   
   gsap.to(".Subtitulo3", {
    scrollTrigger: {
       trigger: ".Subtitulo3",
       start: "top bottom",
       end: "top top",
       scrub: true,
       markers: false,
    },
    autoAlpha: 0,
    y: -100,
    ease: "power1.inOut",
   });



var imagenes = document.getElementsByClassName("imagen-carrusel");

function abrirModal(src, alt) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = alt;
}

function cerrarModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

for (var i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener("click", function() {
        abrirModal(this.src, this.alt);
    });
}
