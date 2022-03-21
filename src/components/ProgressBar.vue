<script>
import { StarIcon } from "@heroicons/vue/outline";
import { StarIcon as SolidStarIcon } from "@heroicons/vue//solid";

export default {
  name: "ProgressBar",
  props: {
    progressBar: Number,
  },
  components: {
    SolidStarIcon,
    StarIcon,
    SolidStarIcon,
  },
};
</script>

<template>
  <div class="w-full h-5 bg-gray-100 dark:bg-slate-800 relative rounded-xl">
    <div
      class="h-5 bg-yellow-200 dark:bg-yellow-600 transition-all duration-700 ease-in rounded-xl"
      :style="{ width: progressBar + '%' }"
    ></div>

    <div class="absolute right-0 bottom-0" v-if="progressBar === 100">
      <SolidStarIcon  class="w-5 text-yellow-500 dark:text-yellow-300" />
    </div>
    <div class="absolute right-0 bottom-0" v-else>
      <StarIcon class="w-5 text-yellow-500 dark:text-yellow-300" />
    </div>


  </div>
</template>
