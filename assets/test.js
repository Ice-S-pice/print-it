//tableau
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

// Boucles

for (let i = 0; i < slides.length; i++) {
// tu fais un truc ici
}

// La fonction passée en paramètre = callback
slides.forEach((slide) => {
	// tu fais un truc ici
})

// Ici autre exemple de callback (2nd paramètre)
button.addEventListener('click', () => {
	// truc
})

let i = 0
while (condition && i < 10000) {
// tu fais un truc ici
i++
}

do {
// tu fais un truc ic
} while(condition)

for (const slide of slides) {
if (maCondition === true) break
}

const slide = {
"image":"slide1.jpg",
"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
}
for (const key in slide) {
console.log(slide[key]);
}


// Functions
const age = 18
console.log(add(1, 2));

function add (nb1, nb2) {
	return nb1 + nb2
}


const add2 = function (nb1, nb2) {
	return nb1 + nb2
}

const add3 = (nb1, nb2) => nb1 + nb2

// Promise
fetch('url')
	.then((response) => {
		return response.json()
	}) 
	.then((data) => {
		console.log(data);
	})