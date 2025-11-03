
import {renderGridCards} from './Modules/grid-cards.js';

const app = document.getElementById('container');

function render() {
	app.innerHTML += `
		
		<h1 class="text-3xl text-center font-bold mb-4">${document.title}</h1>

		${renderGridCards()}

		`;
}


render();