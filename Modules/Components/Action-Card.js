
const title_card = "Acciones"
const BTN_List = "Lista de estudiantes"
const BTN_Register = "Registrar Notas"

export function renderActionCard() {

	return `

	<div class="col-span-2 bg-slate-50 w-full h-2/3vh border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center  shadow-xl p-3 ">
		
		<div class="mt-3">
			<h2 class="font-semibold">
				${title_card}
			</h2>
		</div>


		<div class="grid grid-cols-1 gap-2">

			<div class="w-full mt-3">
				<button class="w-full h-full bg-blue-300 py-2 px-3 shadow-sm rounded-sm ">
					${BTN_List}
				</button>
			</div>


			<div class="w-full">

				<button class="w-full h-full bg-yellow-300 py-2 px-3 shadow-sm rounded-sm">
					${BTN_Register}
				</button>

			</div>
		</div>
	</div>


	
	`


}