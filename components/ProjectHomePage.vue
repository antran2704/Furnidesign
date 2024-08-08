<template>
  <NuxtLink :to="'project/' + project.link"
    class="block p-4 border-2 hover:shadow-md rounded-lg transition-all ease-linear duration-100">
    <div class="lg:h-64 sm:h-52 h-40 rounded w-full object-cover object-center mb-6">
        <Image classProps="w-full h-full" :alt="project.name" :src="project.picture"/>
    </div>
    <h2 class="text-lg text-gray-900 font-medium title-font mb-4 truncate text-center uppercase">{{ project.name }}</h2>

  </NuxtLink>
</template>
<script setup>
const props = defineProps(['project']);
</script>