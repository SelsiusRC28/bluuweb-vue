<template>
	<Titulo texto = "Titulo de mi blog"/>
	
	<div v-for="item in arrayBlog" :key="item.id">
		<router-link :to="`/blog/${item.id}`">
			{{item.id}} - {{item.title}}
		</router-link>
	</div>
</template>

<script>
import Titulo from '../components/Titulo'

export default {

  name: 'Blog',
  components:{
  	Titulo
  },
  data () {
    return {
    	arrayBlog:[]
    }
  },
  methods:{
  	async consumirApi(){
  		const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  		const array = await data.json()
  		this.arrayBlog = array
  	}
  },
  created(){
  	this.consumirApi()
  }
}
</script>

<style lang="css" scoped>
</style>