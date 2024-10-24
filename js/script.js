//---------------bascule de la barre de navigation a l'icône --------------------------------------------

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active'); 
}


//-----------------liens actifs de la section scrolle---------------------------------------------
window.addEventListener('scroll', () => {
  const top = window.scrollY; // Position actuelle du défilement

  // Parcours de chaque lien de navigation
  document.querySelectorAll('header nav a').forEach(link => {
      const section = document.querySelector(link.getAttribute('href')); // Section correspondante au lien
      const offset = section.offsetTop - 150; // Position de début de la section, ajustée
      const height = section.offsetHeight; // Hauteur de la section
      const id = section.getAttribute('id'); // ID de la section

      // Vérifie si la position actuelle est dans la section visible
      if (top >= offset && top < offset + height) {
          link.classList.add('active'); // Ajoute la classe active si  visible
      } else {
          link.classList.remove('active'); // Sinon, supprime  classe active
      }
  });


//-----------------barre de navigation collante---------------------------------------------
let header = document.querySelector('header');
header.classList.toggle('sticky',window.scrollY>100);

//supprimer l'icône à bascule et la barre de navigation lorsque je cliquez sur le lien de la barre de navigation--------------------------------------------
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
});
//défilement----------------------------------------------
ScrollReveal({ 
    //reset: true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.Accueil-content, .heading', { origin:'top' });
ScrollReveal().reveal('.Accueil-img, .skills-content, .portfolio-box,.certificat-box, .contact form', { origin:'bottom' });
ScrollReveal().reveal('.Accueil-content h1, .about-img', { origin:'left' });
ScrollReveal().reveal('.Accueil-content p, .about-content', { origin:'right' });

//typed js--------------------------------------------------------
const typed = new Typed('.multiple-text', {
    strings: ['Développeur Frontend', 'Intégrateur Web'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
