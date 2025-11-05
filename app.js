
import {renderGridCards} from './Modules/grid-cards.js';
import {RenderUserCard} from './Modules/Components/User-Card.js'

const app = document.getElementById('container');

function render() {
	app.innerHTML += `
		
		${RenderUserCard()}

		<h1 class="text-3xl text-center font-bold mb-4">${document.title}</h1>

		${renderGridCards()}

		`;
}


render();