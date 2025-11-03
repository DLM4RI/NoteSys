
let cursos = "Cursos"
let count_cursos = 0

export function renderCursosCard() {

	return `
	
	<div name="count_cursos" class="bg-slate-50 w-full h-2/3vh border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center  shadow-xl p-5">

		<h4 class="text-xl font-semibold p-3">
			${cursos}
		</h4>
		<div id="count_cursos" class="text-gray-500 text-xl">
			${count_cursos}
		</div>
		
	</div>

	`


}