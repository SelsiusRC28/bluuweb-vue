<template>
	<Titulo texto="Ruta con parametros"/>
	<h2>Parámetro: {{ $route.params.id }}</h2>
	<h3>{{ arrayBlog.title}}</h3>
	<p>{{ arrayBlog.id }} - {{ arrayBlog.body}}</p>
</template>

<script>
import Titulo from '../components/Titulo'

export default {
	components:{
		Titulo
	},
  name: 'Articulos',

  data () {
    return {

    }
  },
  data () {
    return {
    	arrayBlog:[]
    }
  },
  methods:{
  	async consumirApi(){
  		try{
	  		const data = await fetch('https://jsonplaceholder.typicode.com/posts/'+this.$route.params.id)
	  		const array = await data.json()
	  		this.arrayBlog = array
	  		console.log(array)
  		}catch(error){
  			console.log(error)
  		}
  	}
  },
  created(){
  	this.consumirApi()
  }
}
</script>

<style lang="css" scoped>
</style>