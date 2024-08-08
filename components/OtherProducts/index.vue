<template>
    <div class="py-10">
        <h2 class="md:text-2xl text-xl text-center font-bold text-black uppercase mb-4">EXPLORE OTHER PRODUCTS</h2>

        <Swiper :modules="[SwiperAutoplay, SwiperPagination, Navigation]" :slides-per-view="2" :loop="true" :autoplay="{
            delay: 8000,
        }" :space-between="20" :navigation="{
    enabled: true,
    nextEl: btnPrevtRef,
    prevEl: btnNextRef
}" :breakpoints="{ 565: { slidesPerView: 3 }, 768: { slidesPerView: 4, navigation: { enabled: true } }, 1025: { slidesPerView: 5, navigation: { enabled: true } } }"
            @before-init="(swiper) => {
                swiper.params.navigation.prevEl = btnPrevtRef;
                swiper.params.navigation.nextEl = btnNextRef;
            }" class="relative">
            <button ref="btnPrevtRef" :class="isLoading && 'none'"
                class="md:flex hidden absolute items-center justify-center text-3xl w-12 h-12 left-2 top-1/2 bg-gray-500 text-white rounded-full -translate-y-1/2 opacity-60 hover:opacity-100 z-30 transition-all ease-linear duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
                    <path fillRule="evenodd"
                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                        clipRule="evenodd" />
                </svg>
            </button>
            <button ref="btnNextRef" :class="isLoading && 'none'"
                class="md:flex hidden absolute items-center justify-center text-3xl w-12 h-12 right-2 top-1/2 bg-gray-500 text-white rounded-full -translate-y-1/2 opacity-60 hover:opacity-100 z-30 transition-all ease-linear duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
                    <path fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd" />
                </svg>
            </button>
            <SwiperSlide v-if="isLoading" v-for="(item, index) in [...new Array(8)]" :key="index">
                <LoadingSkelatonItem />
            </SwiperSlide>
            <SwiperSlide v-else v-for="product in listOtherProducts" :key="product.id">
                <div class="p-4 w-full hover:shadow-lg border-2 rounded-md transition-all ease-linear duration-100">
                    <NuxtLink :to="`/product/${product.link}`" class="block relative h-48 rounded overflow-hidden">
                        <Image classProps="object-cover object-center w-full h-full block" :src="product.picture"
                            :alt="product.name" />
                    </NuxtLink>
                    <div class="mt-4">
                        <NuxtLink :to="`/product/${product.link}`"
                            class="block text-gray-900 title-font text-lg font-medium truncate">
                            The {{ product.name }}
                        </NuxtLink>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup>
import { Navigation } from 'swiper';

const props = defineProps({
    url: {
        type: String,
    }
})

const btnPrevtRef = ref(null);
const btnNextRef = ref(null);

const listOtherProducts = ref([]);
const isLoading = ref(true);

const handleGetProducts = async (url) => {
    try {
        const payload = await $fetch(`${url}`, { cache: "force-cache" });

        if (payload) {
            listOtherProducts.value = payload.splice(0, 12);
        }
        isLoading.value = false
    } catch (error) {
        console.log(error)
        isLoading.value = false
    }
}

onMounted(() => {
    handleGetProducts(props.url);
})
</script>