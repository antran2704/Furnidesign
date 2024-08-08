<template>
    <div :class="[show ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none']"
        class="fixed top-0 left-0 right-0 bottom-0 transition-all ease-linear duration-100 z-[9999]">
        <div @click="onClick" :class="[show ? 'opacity-100' : 'opacity-0']"
            class="abosulte w-full h-full transition-all ease-linear duration-200 z-10"
            style="background-color: rgba(1, 1, 1, 0.6)"></div>
        <div :class="[show ? 'scale-100' : 'scale-0']"
            class="absolute top-[50%] left-[50%] lg:w-auto md:w-3/4 sm:w-4/5 w-full z-20"
            style="transform: translate(-50%, -50%);">
            <slot />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    show: {
        type: Boolean,
        default: false
    },
    onClick: {
        type: Function
    }
})
</script>