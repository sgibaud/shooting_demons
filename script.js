// -------
// lancement site
// -------
let devil = document.querySelector('#section2');
let onClick = document.querySelector('#hidden');
let b = document.querySelector('#sec1');

onClick.addEventListener('click', hidden);

// fonction pour accéder à la partie jeu
function hidden() {
	if (devil != null) {
		devil.classList.add('hidden3');
	}
	b.classList.remove('hidden');
}


// -------
// partie jeu
// -------
let container = document.querySelector("#container");
let btn = document.querySelector(".start");
let game = document.querySelector('.game-info');
const target = document.querySelector("#target");
let scoreContainer = document.querySelector(".score");
let timeCounter = document.querySelector(".time");
let p = document.querySelector('#result');



btn.onclick = function () {
	let score = 0;
	let time = 20;


	let interval = setInterval(function showTarget() {
		// gestion de la visibilté des div au lancement/relancement du jeu
		if (container != null) {
			container.classList.add('visible');
			game.classList.remove('hidden');
			target.classList.remove('hidden2');
			p.innerHTML = "";
			p.classList.remove('visible');
			p.classList.remove('scoreFinal');
		}

		// décompte temps
		time -= 1;

		// gestion des minutes et secondes
		let minutes = parseInt(time / 60, 10)
		let secondes = parseInt(time % 60, 10)

		minutes = minutes < 10 ? "0" + minutes : minutes
		secondes = secondes < 10 ? "0" + secondes : secondes

		// gestion du positionnement du petit démon
		const getRandom = (min, max) => Math.random() * (max - min + 1);
		target.style.left = getRandom(0, 87 - 2) + 'em';
		target.style.top = getRandom(0, 37 - 2) + 'em';

		// gestion d'un comptage d'un seul clic sur le démon 
		let firstClick = true;
		target.onclick = function () {
			if(firstClick) {
				score += 1;
				firstClick = false;
			}
		}

		// insertion des scores et du compteur dans le HTML
		scoreContainer.innerHTML = `Score : ${score}`;
		timeCounter.innerText = "   Temps : " + minutes + ":" + secondes;

		// condition de réinitialisation et de gestion des div à la fin du jeu
		if (time == 0) {
			clearInterval(interval);
			p.innerText = `Votre score est de : \n ${score}. \n Merci d'avoir jouer.`;
			p.classList.add('visible')
			p.classList.add('scoreFinal')
			target.classList.add('hidden2');
		}
	}, 1500);
}