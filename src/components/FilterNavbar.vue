<script>
    export default {
        name: 'FilterNavbar',
        props: {
                sortBy: String,
            },
        computed:{
            showCompleted: {
                get() {
                    return this.value;
                },
                set(value) {
                    this.$emit("show-completed", value);
                }
    }
        }
    }

</script>

<template>
<div class="flex flex-row space-between border-b-2 border-blue-800 dark:border-blue-400 mb-6 dark:text-slate-200 ">
        <div
          @click="$emit('set-filter-mode', 'Day')"
          :class="[sortBy === 'Day' ? 'text-white bg-blue-800 dark:bg-blue-400 dark:text-slate-900' : '']"
          class="h-8 px-4 text-center flex justify-center items-center font-semibold cursor-pointer rounded-t-md">
          <p>Day</p>
        </div>

        <div
          @click="$emit('set-filter-mode','Week')"
          :class="[sortBy === 'Week' ? 'text-white bg-blue-800 dark:bg-blue-400 dark:text-slate-900' : '']"
          class="h-8 px-4 text-center flex justify-center items-center font-semibold cursor-pointer rounded-t-md">
          <p>Week</p>
        </div>

        <div
          @click="$emit('set-filter-mode', 'Month')"
          :class="[sortBy === 'Month' ? 'text-white bg-blue-800 border-b- dark:bg-blue-400 dark:text-slate-900' : '']"
          class="h-8 px-4 text-center flex justify-center items-center font-semibold cursor-pointer rounded-t-md">
          <p>Month</p>
        </div>

        <div class="flex items-center pl-8 ml-auto">
          <input
          class="dark:text-blue-400 dark:opacity-80"
            name="completedToggle"
            type="checkbox"
            v-model="showCompleted"
            checked
          />
          <label
            for="completedToggle"
            class="cursor-pointer text-sm text-blue-900 dark:text-blue-400 dark:opacity-80 ml-1">
            Show completed
          </label>
        </div>

      </div>
</template>