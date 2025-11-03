
const selecionar = "Selecionar"
const Curses_Title = "Listado de cursos"

export function renderListCourses() {

	return `

	<div class="col-span-2 bg-slate-50 w-full border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center  shadow-xl p-4">

				<div>

					<h2 class="text-xl font-semibold p-3 text-center">
						${Curses_Title}
					</h2>
					
				</div>


				<div class="w-full">

					<select id="curso_select" class="w-full border border-gray-300 rounded p-2">
						<option value="" disabled selected>Seleccione un curso</option>
					</select>

				</div>


				<div class="w-full">
					
					<button class="bg-green-300 py-2 px-4 rounded-lg shadow-lg mt-3 w-full">
						${selecionar}
					</button>

				</div>


			</div>


	
	`

}