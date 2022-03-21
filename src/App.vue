<script>
import Button from "./components/Button.vue";
import TodosVue from "./components/Todos.vue";
import ProgressbarVue from "./components/Progressbar.vue";
import FilterNavbar from './components/FilterNavbar.vue'
import { StarIcon, PlusIcon,MoonIcon,SunIcon  } from "@heroicons/vue/outline";
import { StarIcon as SolidStarIcon } from "@heroicons/vue/solid";
import AddTodoVue from "./components/AddTodo.vue";
import { DUMMY_DATA } from "../utils/dummy-data";
import { sortByThisWeek, sortByThisMonth, sortByToday } from "../utils/sorting";

export default {
  name: "App",
  components: {
    Button,
    TodosVue,
    StarIcon,
    SolidStarIcon,
    ProgressbarVue,
    PlusIcon,
    AddTodoVue,
    MoonIcon,
    SunIcon,
    FilterNavbar
  },
  data() {
    return {
      posts: [],
      progressBar: 0,
      todaysDate: null,
      showCompleted: true,
      sortBy: "Month",
      showAddTodo: false,
      isDark: false
    };
  },
  created() {
    this.posts = [...DUMMY_DATA];
    this.todaysDate = new Date();
  },
  methods: {
    toggleCompleted(id) {
      this.posts = this.posts.map((post) =>
        post.id === id ? { ...post, completed: !post.completed } : post
      );
    },
    addTodo(newTodo) {
      this.posts = [...this.posts, newTodo];
      this.showAddTodo = false;
    },
    removeTodo(todoId) {
      this.posts = this.posts.filter((post) => post.id !== todoId);
    },
    setFilterMode(mode) {
      this.sortBy = mode;
    },
    toggleAddTodo() {
      this.showAddTodo = !this.showAddTodo;
    },
    toggleDark(){
      this.isDark = !this.isDark
      console.log(this.isDark)
    },
    showCompletedToggle(value){
      this.showCompleted = value
    }
  },
  computed: {
    filteredTodos() {
      if (this.sortBy === "Day") {
        return sortByToday(this.posts);
      }

      if (this.sortBy === "Month") {
        return sortByThisMonth(this.posts);
      }

      if (this.sortBy === "Week") {
        return sortByThisWeek(this.posts);
      }
    },

    filteredByCompleted() {
      if (!this.showCompleted) {
        return this.filteredTodos.filter((a) => !a.completed);
      }
      return this.filteredTodos;
    },

    progress() {
      if (this.filteredTodos.length === 0) return 0;
      let completedTasks = this.filteredTodos.reduce(
        (prev, curr) => prev + (curr.completed ? 1 : 0),
        0
      );
      let totalTasks = this.filteredTodos.length;
      return Math.round((completedTasks / totalTasks) * 100);
    },
  },
};
</script>

<template>
  <main :class="isDark ? 'dark' : ''" >
  <div  class="flex justify-center flex-row pt-6 dark:bg-slate-900 h-screen relative">
    <div class="min-h-[350px] max-w-lg h-fit relative border-2 border-blue-800 p-8 rounded-xl dark:border-blue-300 dark:bg-slate-900">
      <div class="flex flex-row">
        <h1 class="font-semibold text-yellow-300 dark:text-yellow-600 opacity-90 text-6xl mb-5 w-full">
          {{
            todaysDate.toLocaleDateString("en-GB", {
              month: "short",
              day: "numeric",
            })
          }}
        </h1>
        <div class="mb-8">
          <h1 class="flex flex-row whitespace-nowrap mb-1 font-semibold text-blue-900 dark:text-slate-300 text-base">
            {{ sortBy }}'s progress
          </h1>
          <ProgressbarVue :progressBar="progress" />
        </div>
      </div>
        <FilterNavbar :sortBy="sortBy" @set-filter-mode="setFilterMode" @show-completed="showCompletedToggle" />

        <TodosVue
        @toggle-completed="toggleCompleted"
        @remove-todo="removeTodo"
        :todos="filteredByCompleted"
      />

      <div
        class="absolute bottom-2 left-0 flex justify-center items-center w-full">
        <button
          @click="toggleAddTodo"
          class="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-md shadow-gray-400 transition-all duration-700 ease-out hover:scale-110 dark:shadow-none">
          <PlusIcon class="text-white w-7" />
        </button>
      </div>
      <div class="absolute inset-0 z-50" v-if="showAddTodo">
        <AddTodoVue @add-todo="addTodo" @toggle-todo="toggleAddTodo" />
      </div>
      <div @click="toggleDark" class="absolute top-2 left-2 cursor-pointer">  <MoonIcon v-if="isDark" class="w-6 text-blue-900 "/><SunIcon v-if="!isDark"  class="w-6 text-yellow-400" /></div>

    </div>
    </div>
  </main>
</template>

<style>
@import "./assets/base.css";
</style>
