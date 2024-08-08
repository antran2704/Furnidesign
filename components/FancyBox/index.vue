<template>
    <div :class="[prop.isShow ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none']"
        class="fixed top-0 left-0 right-0 bottom-0 transition-all ease-linear duration-200 z-[9999]">
        <div @click="prop.onClose" class="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-90"></div>
        <div class="absolute top-0 w-full flex items-center justify-between pl-5 md:z-10 z-30">
            <div class="flex items-center text-lg text-white gap-1">
                <span>{{ currentIndex + 1 }}</span>
                <span>/</span>
                <span>{{ gallery.length }}</span>
            </div>
            <div @click="prop.onClose" class="bg-[#18181ba6] opacity-60 hover:opacity-100 p-1 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                    stroke="currentColor" class="w-10 h-10 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
        <div class="absolute left-1/2 -translate-x-1/2 md:w-1/2 w-full h-screen z-20">
            <div class="w-full h-5/6 mt-1 rounded-md overflow-hidden">
                <img @touchend="handleTouchOnMobile" class="w-full h-full" :src="gallery[currentIndex]">
            </div>
            <ul
                class="flex items-start w-full h-1/6 mt-5 px-5 snap-x snap-mandatory gap-2 overflow-y-hidden overflow-x-auto">
                <li v-for="(image, index) in prop.gallery" :key="index" @click="() => handleClickImage(index)"
                    class="min-w-[96px] w-24 h-20 border-2 rounded-md cursor-pointer snap-center overflow-hidden"
                    :class="[currentIndex === index ? 'border-[#8b5cf6]' : 'border-transparent']">
                    <img class="w-full h-full object-fit object-center" :src="image">
                </li>
            </ul>
        </div>
        <div class="absolute top-1/2 -translate-y-1/2 flex items-center justify-between w-full md:z-10 z-30">
            <div @click="handlePrevImage" class="bg-[#18181ba6] opacity-80 hover:opacity-100 cursor-pointer p-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                    stroke="currentColor" class="w-12 h-12 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>

            </div>
            <div @click="handleNextImage" class="bg-[#18181ba6] opacity-80 hover:opacity-100 cursor-pointer p-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                    stroke="currentColor" class="w-12 h-12 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </div>

    </div>
</template>

<script setup>
const prop = defineProps({
    isShow: {
        type: Boolean,
        defult: false
    },
    gallery: {
        type: Array
    },
    currentIndex: {
        type: Number,
        defult: 0
    },
    onClose: {
        type: Function
    }
})

const gallery = ref(prop.gallery)
const currentIndex = ref(prop.currentIndex);
const currentImage = ref(gallery.value[currentIndex.value]);

const handleClickImage = (index) => {
    currentIndex.value = index;
    currentImage.value = gallery.value[index];
}

const handleNextImage = () => {
    let nextIndex = ++currentIndex.value;

    if (nextIndex > prop.gallery.length - 1) {
        nextIndex = 0;
    }
    currentIndex.value = nextIndex;
    currentImage.value = prop.gallery[nextIndex];
}

const handlePrevImage = () => {
    let prevIndex = --currentIndex.value;
    if (prevIndex < 0) {
        prevIndex = prop.gallery.length - 1;
    }
    currentIndex.value = prevIndex;
    currentImage.value = prop.gallery[prevIndex];
}

const handleTouchOnMobile = (e) => {
    const centerScreen = window.innerWidth / 2;
    const direction = e.pageX;

    if (direction < centerScreen) {
        handlePrevImage();
    } else {
        handleNextImage();
    }
}

onMounted(() => {
    console.log("mouted")
})

</script>