<script>
import { XIcon } from "@heroicons/vue/outline"
    export default {
        name:'AddTodo',
        data(){
            return {
                message:"",
                date:"",
            }
        },
        components:{
            XIcon
        },
        methods:{
            onSubmit(e){
                e.preventDefault();
                const newTodo = {
                    id:Math.floor(Math.random() * 100000),
                    title: this.message,
                    date:this.date,
                    completed: false
                }
                this.message = ""
                this.date = ""
                this.$emit('add-todo',newTodo)
            }
        }
    }
</script>

<template>
<div class="p-10 h-full w-full bg-white z-50 flex align-center rounded-lg relative dark:bg-slate-900 dark:text-slate-200">
    <div class="absolute top-4 right-4 flex flex-row cursor-pointer text-slate-600 dark:text-slate-400" @click="this.$emit('toggle-todo')">Close <XIcon class="w-6 " /></div>
      <form @submit="onSubmit" class="w-full" >
      <h1 class="text-blue-800 text-4xl font-bold sans opacity-80 mb-10">Add Todo</h1>
        <div class="flex flex-col mb-4">
          <label for="message" class="text-xs text-blue-800 dark:text-blue-400" >Message</label>
          <input v-model="message" name="message" type="text" class="p-2 border-b-2 border-blue-800 dark:border-blue-400 outline-none  py-2 dark:bg-slate-800" required />
        </div>
        <div class="flex flex-col">
          <label for="date" class="text-xs text-blue-800 dark:text-blue-400">Due date</label>
          <input  v-model="date" name="date" type="date" class=" p-2 border-b-2 border-blue-800 dark:border-blue-400 outline-none py-2 text-blue-800 dark:bg-slate-800 dark:text-blue-400" required/>
        </div>
        <div>
          <button type="submit" class="bg-blue-800 text-gray-100 font-semibold text-sm py-2 px-3 mt-8 rounded-sm border-2
          border-blue-800 hover:bg-blue-700 hover:border-blue-700 transition-all duration-500 ease-out opacity-90">Add Todo</button>
        </div>
      </form>
    </div>
</template>