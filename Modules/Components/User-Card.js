
const name = ""
const areas = ""
const ddp = ""

export function RenderUserCard() {

	return `
	
		<div class="flex flex-col justify-center items-center text mb-6 mt-3">
			<div class="overflow-hidden mb-5" >
				<img class="shadow-zinc-600 shadow-sm text-center rounded-full w-35 h-35 object-cover" src="https://imgs.search.brave.com/4y8qt3ki4XAOxtA9luXwOu2TpGWJ3EfomlwmckKXI7A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDgv/NzY0LzY5NS9zbWFs/bC9zbWlsaW5nLW1h/bGUtdGVhY2hlci1z/dGFuZGluZy13aXRo/LWFybXMtY3Jvc3Nl/ZC1pbi1jbGFzc3Jv/b20tc3VuLWF0LWJs/YWNrYm9hcmQtZWR1/Y2F0aW9uLXNjaG9v/bC1ydXNzaWFuLXRl/YWNoZXItdGVhY2hp/bmctYWNhZGVtaWMt/cGhvdG8uanBn" alt="">
			</div>
			<div class="w-full">
				<h2>
					Docente : ${name}
				</h2>
				<p>
					<b>Area :</b> ${areas}
				</p>
				<p>
					<b>Docente de planta? :</b>${ddp}
				</p>
			</div>
		</div>
	`


}