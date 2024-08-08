<template>
    <div>
        <div @click="handlShowMore"
            :class="props.class"
            class="flex items-center justify-between min-h-[50px] px-5 py-2 cursor-pointer">
            <h3 class="w-4/5 md:text-lg text-base font-medium uppercase">{{ props.title }}</h3>
            <svg v-if="isShow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                <path fill-rule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
                    clip-rule="evenodd" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                <path fillRule="evenodd"
                    d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                    clipRule="evenodd" />
            </svg>

        </div>
        <div ref="contentRef" class="h-0 overflow-hidden transition-all ease-linear duration-300">
            <slot />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    class: {
        type: String,
    }
});

const contentRef = ref(null);
const isShow = ref(false);

const handlShowMore = () => {
    const el = contentRef.value;
    const currentHeight = el.clientHeight;

    if (currentHeight === 0) {
        el.style.height = el.scrollHeight + "px";
        isShow.value = true;
    } else {
        el.style.height = "0px";
        isShow.value = false;
    }
}
</script>