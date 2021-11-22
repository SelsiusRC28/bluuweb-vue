<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Formularios"/>
    <div class="container">
      <form class="mt-3" @submit.prevent="procesarFormulario">
        <input 
          type="text" 
          placeholder="Nombre Tarea"
          class="form-control"
          v-model.trim="tarea.nombre"
        >
        <div class="form-check form-check-inline">
          <input 
            type="checkbox"
            class="form-check-input"
            id="check-1"
            v-model="tarea.categoria"
            value="Javascript"
          >
          <label 
            for="check-1"
            class="form-check-label"
          >Javascript</label>
        </div>
        <div class="form-check form-check-inline">
          <input 
            type="checkbox"
            class="form-check-input"
            id="check-2"
            v-model="tarea.categoria"
            value="Desarrollo"
          >
          <label 
            for="check-2"
            class="form-check-label"
          >Desarrollo web</label>
        </div>
        <div class="my-2">
          <input 
            type="number"
            class="form-control"
            placeholder="numero"
            v-model.number="tarea.numero"
          >
        </div>
 
        <button 
          class="btn btn-dark btn-block" 
          type="submit" 
          @click="procesarFormulario"
          :disabled="bloquear"
        > Enviar </button>
      </form>
      <hr>
      <p>{{tarea}}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return{
      tarea: {
        nombre: '',
        categoria: [],
        numero: 0
      }
    }
  },
  methods: {
    procesarFormulario(){
      if(this.tarea.nombre.trim() === ''){
        console.log('nombre Vacío')
        return
      }
      console.log(this.tarea)
      this.tarea = {nombre: '', categoria: [], estado: '', numero: 0}
    }
  },
  computed: {
      bloquear(){
        return this.tarea.nombre.trim() === '' ? true : false
      }
    }
}
</script>
