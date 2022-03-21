

<script>
import Todo from './Todo.vue'
    export default {
        name:'Todos',
        props:{
            todos: Array
        },
        components:{
            Todo
        },
        emits:['toggle-completed','remove-todo'],
    }
</script>

<template>
<div class=" rounded-xl pb-16">
    <div v-for="todo in todos?.sort((a,b)=>a.completed -b.completed)" :key="todo.id" >
        <Todo @toggle-completed="$emit('toggle-completed', todo.id)" @remove-todo="$emit('remove-todo', todo.id)" :todo="todo"/>
    </div>
    </div>
</template>