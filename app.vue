<template>
  <div>
    <SeoKit />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.25s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}
</style>
<script setup>
import { useStore } from "~/store";
const store = useStore();

useSeoMeta({
  title: 'Furnidepot',
  ogTitle: 'Furnidepot',
  description: 'Furnidepot is the nation’s largest supplier of structural building products, value-added components and services to the professional market for new residential construction and repair and remodeling.',
  ogDescription: 'Furnidepot is the nation’s largest supplier of structural building products, value-added components and services to the professional market for new residential construction and repair and remodeling.',
})

onMounted(() => {
  store.getListCart();
});
</script>