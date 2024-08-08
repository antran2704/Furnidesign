<template>
  <div>
    <!-- <AppHeader /> -->
    <AppNav />
    <slot />
    <AppFooter />
    <div
      :class="[showScrollTop ? 'opacity-60 hover:opacity-100 md:bottom-12 bottom-5 ' : 'opacity-0 bottom-0 pointer-events-none']"
      class="scroll-top fixed right-2 cursor-pointer py-2 px-2 rounded-md bg-dark border border-white shadow-lg z-50 transition-all ease-linear duration-150"
      @click="scrollToTop">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="text-white w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
      </svg>
    </div>
  </div>
</template>
<script setup>
import AppNav from "~/components/layouts/AppNav.vue";
import AppFooter from "@/components/layouts/AppFooter";

const showScrollTop = ref(false);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const handleScroll = () => {
  if (window.scrollY > 150) {
    showScrollTop.value = true;
  } else {
    showScrollTop.value = false;
  }
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>