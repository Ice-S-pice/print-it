const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
]
//mettre les boulettes points//
let nombreImages = slides.length;
//faire que les boulettes points change en même temps que les images 

console.log(slides);
const parentElement = document.querySelector(".dots");

for (let i = 0; i < nombreImages; i++) {
	let nouvelElement = document.createElement("span");
	nouvelElement.className = "dot"; // Ajoutez la classe "dot" à l'élément nouvellement créé
	parentElement.appendChild(nouvelElement);
}


// compteur
let index = 0;
//je veux remettre indx à 0
// Récupération des boutons arrow
let ListBoutons = document.querySelectorAll('.arrow_left, .arrow_right');

//récupérer les images et les texte 
let baliseImage = document.querySelector(".banner-img")
let texteImage = document.getElementById("texteImage")

const dots = document.querySelectorAll(".dot");

dots[0].classList.add("dot_selected");


//
//

ListBoutons.forEach((bouton) => {
	bouton.addEventListener("click", (event) => {
		
		dots[index].classList.remove("dot_selected");
		console.log('dots[index].classList.add index =', index)
		
		// Vérifie quel bouton a été cliqué
		if (event.target.classList.contains('arrow_left')) {
			index = index - 1
			//permet que si index arrive à -1 remettre 0
			if (index === -1) {
				// pourquoi nombreImages - 1
				index = nombreImages - 1;
			}	
			console.log("C'est le bouton gauche");
		} else if (event.target.classList.contains('arrow_right')) {
			// affiche l'élément 0 à 3 du tableau slides[2] ... 
			
			index = index + 1
			//permet que si index arrive à 4 remettre 0 
			if (index === nombreImages){
				index = 0
			}
			
			console.log("C'est le bouton droit");
		}
		
		//pour récupérer les images et les changes au click
		baliseImage.setAttribute("src", "./assets/images/slideshow/" + slides[index].image )
		//pour récupérer les texte dans mon tableau et les changer au click
		texteImage.innerHTML = slides[index].tagLine;		
		
		console.log('index =', index)
		dots[index].classList.add("dot_selected");
	});
});
