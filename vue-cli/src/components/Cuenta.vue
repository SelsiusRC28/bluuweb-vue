<template>
	<h2>Tipo de cuenta: <span :class="visa">{{ tipo }}</span></h2>
	<h2>Saldo {{ saldo }}</h2>
	<h3 :class="estado">Cuenta <b>{{ textEstado }}</b></h3>
	<h4>Servicios:</h4>
	<ol>
		<li v-for="(servicio, index) in servicios" :key="index">
			{{index + 1}} - {{ servicio }}
		</li>

	</ol>
	<AccionSaldo text="Aumentar Saldo" @accion="aumentarSaldo" class="btn-success mx-2"/>
	<AccionSaldo text="Disminuir Saldo" @accion="disminuirSaldo"  :disabled="desactivar" class="btn-danger mx-2"/>
	
</template>



<script>
import AccionSaldo from './AccionSaldo.vue' 

export default {

  name: 'Cuenta',
  components: {
  	AccionSaldo
  },
  data () {
    return {
    	tipo: 'Visa',
    	saldo : 1000,
    	estado: true,
    	visa: 'text-primary',
    	servicios: ['giro', 'abono', 'transferencia'],
    }
  },

  computed: {
  	estado(){
  		return this.estado ? 'text-success' : 'text-danger'
  	},
  	desactivar(){
  		return this.estado ? false : true
  	},
  	textEstado(){
  		return this.estado ? 'Activa' : 'Desactivada'
  	}
  },
  methods: {
  	aumentarSaldo () {
   		 this.saldo += 100
   		 this.estado = true
    },
    disminuirSaldo () {
    	this.saldo -= 100 
    	if (this.saldo <= 0) {
    		this.estado = false
    		return 
    		
    	}
   		
    }
  }
}
</script>

<style lang="css" scoped>
</style>