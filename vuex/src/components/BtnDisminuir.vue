<template>
	<button @click="accionDisminuir">Disminuir</button>
</template>

<script>
import { mapActions } from 'vuex'

export default {

  name: 'BtnDisminuir',

  data () {
    return {

    }
  },

  methods: {
  	...mapActions(['accionDisminuir'])
  }
}
</script>

<style lang="css" scoped>
</style>