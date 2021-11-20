<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{contador}}</h1>
    <button @click="accionIncrementar">Incrementar</button>
    <Btn/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Btn from '../components/BtnDisminuir'

import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Btn
  },
  computed:{
    ...mapState(['contador'])
  },
  methods: {
    // ...mapMutations(['incrementar']),
    ...mapActions(['accionIncrementar'])
  }
}
</script>
