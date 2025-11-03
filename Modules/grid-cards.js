
import {renderCursosCard} from './Components/Cursos-Card.js'
import { renderStudentscards } from './Components/Estudents-Card.js'
import { renderListCourses } from './Components/List-Courses-card.js'
import { renderActionCard } from './Components/Action-Card.js'

export function renderGridCards() {

	return `
	
	<div id="app" class="grid grid-cols-2 gap-2">

	${renderCursosCard()}
	
	${renderStudentscards()}
	
	${renderListCourses()}

	${renderActionCard()}

	</div>
`

}