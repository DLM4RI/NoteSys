
const Estudiantes = "Estudiantes"
let Estudiantes_count = 0

export function renderStudentscards() {
	
	return `

	<div name="count_estudiantes" class="bg-slate-50 w-full h-2/3vh border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center  shadow-xl p-5">
		<h4 class="text-xl font-semibold p-3">
			${Estudiantes}
		</h4>
		<div id="count_estudiantes" class="text-gray-500 text-xl">
			${Estudiantes_count}
		</div>
	</div>
	
	`
}