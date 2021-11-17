const app = Vue.createApp({
	data(){
		return{
			titulo: "Banco de VueJS",
			url: "https://erickdeveloper.herokuapp.com",
			cuenta: 100,
			lenguajes: ['html', 'css', 'javascript'],
			activo: false
		}
	},
	methods:{
		aumentarSaldo(){
			if (this.cuenta <= 0) {
				this.activo = false
			}
			this.cuenta+= 100
			
		},
		disminuirSaldo(){
			if (this.cuenta == 0) {
				this.activo = true
				return
			}

			this.cuenta-= 100
		}
	},
	computed:{
		colorCantidad(){
			return this.cuenta <= 300 ? 'text-danger' : 'text-success'
		},
		mayustexto(){
			return this.titulo.toUpperCase()
		}

	}	
})