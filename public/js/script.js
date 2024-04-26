// Fonction pour basculer entre l'affichage du menu complet et du bouton hamburger
function toggleMenu() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

//FORMULAIRE
document.addEventListener("DOMContentLoaded", function() {
  var toggleLink = document.getElementById("toggleLink");
  var registerForm = document.getElementById("registerForm");
  
  toggleLink.addEventListener("click", function(event) {
    event.preventDefault();
    registerForm.style.display = registerForm.style.display === 'none' ? 'block' : 'none';
  });
});


// COLLECTION 2024
// Sélection des éléments de la grille de produits
const products = document.querySelectorAll('.product');

// Ajout d'un écouteur d'événement pour chaque produit
products.forEach(product => {
  // Écouteur d'événement pour le survol
  product.addEventListener('mouseenter', () => {
    // Ajout de la classe d'animation au survol
    product.classList.add('animate-product');
  });
  
  // Écouteur d'événement pour la fin du survol
  product.addEventListener('mouseleave', () => {
    // Suppression de la classe d'animation
    product.classList.remove('animate-product');
  });
});