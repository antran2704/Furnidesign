<template>
    <div v-if="isLoading" :class="[classProps]" class="skelaton block relative rounded overflow-hidden">
    </div>
    <img @load="(e) => loadImage(src, e.target)" ref="imageRef" width="100" height="100" :class="[isLoading ? 'opacity-0' : 'block opacity-100 ', classProps]" :data-src="src" :alt="alt" v-lazy-load
        :title="alt">
</template>
<script setup>
const props = defineProps(['classProps', "alt", "src"]);
const isLoading = ref(true);
const imageRef = ref(null);

async function loadImage(src, elem) {
    return new Promise((resolve, reject) => {
        elem.onload = () => resolve(elem);
        elem.onerror = reject;

        if (elem.complete) {
            isLoading.value = false;
        }
    });
}

</script>