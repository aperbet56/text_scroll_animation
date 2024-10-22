// Apell de splitting
let selection = Splitting();

// Enregistrement des plugin
gsap.registerPlugin(ScrollTrigger);

gsap.from(selection[0].chars, {
  y: 100,
  scaleY: 0,
  rotation: 90,
  opacity: 0,
  color: "rgb(25, 25, 25)",
  stagger: 0.05, // stagger start times
  scrollTrigger: {
    trigger: ".text__reveal", // selecteur ou élément html5
    start: "top 50%", // positions du déclencheur et du défileur
    end: "bottom bottom", // positions du déclencheur et du défileur
    scrub: true, // ou temps (en secondes) pour rattraper son retard
  },
});

// Initiliser Lenis
const lenis = new Lenis();

/*Écouter l'événement de défilement et affichage des données de l'événement dans la console
lenis.on("scroll", (e) => {
  console.log(e);
});*/

// Synchroniser le défilement de Lenis avec le plugin ScrollTrigger de GSAP
lenis.on("scroll", ScrollTrigger.update);

// Ajout de la méthode requestAnimationFrame (raf) de Lenis au ticker de GSAP
// Cela garantit les mises à jour fluides de l'animation de défilement de Lenis à chaque tick GSAP
gsap.ticker.add((time) => {
  lenis.raf(time * 600);
});

// Désactiver le lissage des décalages dans GSAP pour éviter tout retard dans les animations de défilement
gsap.ticker.lagSmoothing(0);
