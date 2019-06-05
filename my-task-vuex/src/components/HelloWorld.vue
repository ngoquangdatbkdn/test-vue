<template>
  <div>
    <form v-on:submit.prevent="add">
      <input type="checkbox" title="check All"
        @change="checkAllTodo(!checkAll); checkAll = !checkAll"
        >
      <input type="text"
        placeholder="nhap cong viec"
        v-model="text"
      />
      <button>Add todo </button>
    </form>
    <ul>
      <li v-for="(todo, index) in todos"
      :key="index">
        <input
				  type="checkbox"
				  title="check todo"
				  @change="checkTodo(todo)"
				  :checked="todo.complete"
				/>
        <span>{{ todo.text }}</span>
        <button v-on:click="remove(index)">x</button>
      </li>
    </ul>
    <div>
			<a
			  href="#"
			  @click="clearComplete"
			> clear completed </a>
		</div>
		show:
		<button @click="visible = 'all'"> all </button>
		<button @click="visible = 'completed'"> completed </button>
		<button @click="visible = 'pending'"> pending </button>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import store from '../store'
export default {
  data(){
    return{
        text: '',
        visiable: 'all',
        checkAll: false,

    }
    
  },
  computed: {
    todos() {
			return this.$store.getters[this.visible]
		},
    ...mapGetters(['pending', 'complete', 'all']),
  },
  methods: mapMutations([
    'add',
    'remove',
    'checkTodo',
    'checkAllTodo',
    'clearComplete'
  ])
  // methods: {
  //   add(){
  //     store.commit('add', this.text)
  //     this.text = ''
  //   },
  //   remove(id){
  //     store.commit('remove', id)
  //   }
  // }
}
</script>
