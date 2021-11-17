app.component('footer-banco', {
	props: ['valor', 'fecha'],
	template: `
		<footer class="mt-2 py-3 text-white bg-dark">
			<h2>{{valor}} - {{fecha}}</h2>
		</footer>
	`,
	data(){
		return{
			
		}
	}
})