<template>
	<button class="btn" @click="accion" :disabled="desactivar">{{text}}</button>
</template>

<script>
export default {

  name: 'AccionSaldo',
  props:{
  	text: String,
  	desactivar : Boolean
  },
  data () {
    return {

    }
  },

  methods: {
    accion(){
    	this.$emit('accion')
    }
  }

}
</script>

<style lang="css" scoped>
</style>