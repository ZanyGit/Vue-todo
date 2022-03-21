<script>
import { TrashIcon } from "@heroicons/vue/outline"
export default {
  name: "Todo",
  components:{
    TrashIcon
  },
  props: {
    todo: Object,
  }
};
</script>


<template>
  <div
    @dblclick="$emit('toggle-completed', todo.id)"
    :class="[
      todo.completed
        ? 'text-gray-900  opacity-50 '
        : 'text-black opacity-90',
      'rounded-sm py-3 px-4 mt-3 font-bold drop-shadow-md shadow-black cursor-pointer hover:bg-slate-100 flex flex-row bg-yellow-50 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700',
    ]"
  >
  <div class="absolute bottom-2 right-2" @click="$emit('remove-todo', todo.id)">
  <TrashIcon class="w-3 text-slate-800 dark:text-slate-300  opacity-90"  />
  </div>
  <div class="w-full">
    <h3 class=" text-lg font-semibold">
      {{ todo.title }}
    </h3>
    <p class="text-slate-700 text-sm font-light dark:text-slate-400">Due: {{todo.date}}</p>
    </div>
    <span v-if="todo.completed" class="text-yellow-600 text-xs flex items-center dark:text-yellow-500 ml-4">Completed</span>
  </div>
</template>

