<template>
    <div class="container px-5 mx-auto">
        <div class="py-[100px]">
            <h2 class="flex flex-wrap items-center text-base font-medium gap-1 mb-4 mt-6">
                <NuxtLink to="/" class="hover:text-orange-600 transition-all ease-linear duration-200">Home</NuxtLink>
                /
                <NuxtLink to="/project" class="hover:text-orange-600 transition-all ease-linear duration-200">Project
                </NuxtLink>
                /
                <p v-if="isLoading" class="skelaton h-5 w-1/4"></p>
                <p v-else>{{ inforCategory.name }}</p>
            </h2>
            <div>
                <Swiper v-if="inforCategory.gallery?.length > 0" :modules="[SwiperAutoplay, SwiperPagination, Navigation]"
                    :slides-per-view="1" :loop="true" :autoplay="{
                        delay: 8000,
                    }" :navigation="{
    enabled: false,
    nextEl: btnPrevtRef,
    prevEl: btnNextRef
}" :pagination="{
    dynamicBullets: true,
    clickable: true
}" :space-between="20"
                    :breakpoints="{ 768: { navigation: { enabled: true } }, 1025: { navigation: { enabled: true } } }"
                    @before-init="(swiper) => {
                        swiper.params.navigation.prevEl = btnPrevtRef;
                        swiper.params.navigation.nextEl = btnNextRef;
                    }" class="relative lg:h-[600px] md:h-[500px] h-[400px] py-10">
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
                    <SwiperSlide v-for="item in inforCategory.gallery" :key="item" class="w-full h-full">
                        <Image classProps="w-full h-full object-cover" :src="item" :alt="inforCategory.name" />
                    </SwiperSlide>


                </Swiper>

                <div v-else class="relative lg:h-[600px] md:h-[500px] h-[400px] py-10">
                    <Image classProps="w-full h-full object-cover" :src="inforCategory.picture" :alt="inforCategory.name" />
                </div>
            </div>

            <div class="py-10">
                <h2 v-if="isLoading" class="skelaton h-6 w-1/2"></h2>
                <h2 v-else class="md:text-2xl text-xl font-medium capitalize pb-2 mb-4 border-[#282828] border-b">
                    {{ inforCategory.name }}
                </h2>
                <div class="mb-3">
                    <h3 class="text-lg font-medium capitalize mb-1">Description</h3>
                    <div v-if="isLoading" class="flex flex-col items-start gap-2">
                        <p class="skelaton h-5 w-full"></p>
                        <p class="skelaton h-5 w-full"></p>
                        <p class="skelaton h-5 w-full"></p>
                    </div>
                    <div v-else class="text-base" v-html="inforCategory.description"></div>
                </div>
                <div class="mb-3">
                    <h3 class="text-lg font-medium capitalize mb-2">The Details</h3>
                    <p class="text-base capitalize mb-2">BUDGET:
                        <span v-if="isLoading" class="skelaton inline-block h-4 w-10"></span>
                        <span v-else>
                            <span v-if="inforCategory.budget">{{ inforCategory.budget }}</span>
                            <span class="text-red-600 italic text-sm" v-else>Contact</span>
                        </span>
                    </p>
                    <div>
                        <p class="text-base capitalize mb-2">STYLE:</p>
                        <ul v-if="isLoading" class="flex flex-wrap gap-2">
                            <li
                                class="skelaton h-9 w-20 text-sm text-white bg-[#ddd3c4] font-medium capitalize px-4 py-2 rounded-2xl">
                            </li>
                            <li
                                class="skelaton h-9 w-20 text-sm text-white bg-[#ddd3c4] font-medium capitalize px-4 py-2 rounded-2xl">
                            </li>
                        </ul>
                        <ul v-else class="flex flex-wrap gap-2">
                            <li v-for="style in inforCategory.styles" :key="style"
                                class="text-sm text-white bg-dark font-medium capitalize px-4 py-2 rounded-2xl">
                                {{ style.name }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="py-10">
                <h2 class="md:text-2xl text-xl font-medium capitalize pb-2 mb-5 border-[#282828] border-b">
                    Item in your design
                </h2>

                <div>
                    <div class="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3" v-if="isLoading">
                        <LoadingSkelatonItem v-for="(item, index) in [...new Array(16)]" :key="index" />
                    </div>

                    <div v-else class="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
                        <div v-for="product in inforCategory.productItems" :key="product.id"
                            class="p-4 w-full hover:shadow-lg border-2 rounded-md transition-all ease-linear duration-100">
                            <a :href="`/product/${product.link}`" target="_blank"
                                class="block relative h-48 rounded overflow-hidden">
                                <img width="100" height="100" :title="product.name" :alt="product.name"
                                    class="object-cover object-center w-full h-full block" :data-src="product.picture"
                                    v-lazy-load>
                            </a>
                            <div class="mt-4">
                                <div class="flex items-center gap-2">
                                    <p v-for="category in product.categories" :key="category"
                                        class="text-gray-500 text-xs tracking-widest title-font mb-1">{{ category.name }}
                                    </p>
                                </div>
                                <NuxtLink :to="`/product/${product.link}`"
                                    class="block text-gray-900 title-font text-lg font-medium truncate">
                                    {{ product.name }}
                                </NuxtLink>
                                <!-- <p class="mt-1">${{ product.price.toFixed(2) }}</p> -->
                            </div>
                        </div>
                    </div>
                </div>

                <h3 v-show="showMessage" class="text-xl font-medium text-center">{{ showMessage }}</h3>

                <Pagination v-if="!isLoading && inforCategory?.productItems.length > PAGE_SIZE"
                    :currentPage="Number(route.query.page) || 1" :totalItems="inforCategory?.productItems.length"
                    :pageSize="16" :url="route.path" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { Navigation } from 'swiper';

import LoadingSkelatonItem from "~/components/LoadingSkelatonItem";
import Pagination from "~/components/Pagination";

const config = useRuntimeConfig();
const route = useRoute();

const btnPrevtRef = ref(null);
const btnNextRef = ref(null);

const PAGE_SIZE = ref(16)
const isLoading = ref(true);
const showMessage = ref(null);

const inforCategory = ref({});

const handleGetProduct = async () => {
    try {
        const data = await $fetch(`${config.public.apiEndpoint}/project/getbylink/${route.params.slug}`, {cache: 'force-cache'});
        if (data.productItems.length === 0) {
            showMessage.value = `No item in category ${route.params.slug}`;
        }
        inforCategory.value = data;
        isLoading.value = false;
    } catch (error) {
        console.log(error)
        isLoading.value = false;
        showMessage.value = `Error server`;
    }
}

onMounted(() => {
    handleGetProduct();
})

useSeoMeta({
    title: inforCategory.name,
    ogTitle: inforCategory.name,
    description: 'Furnidepot is the nation’s largest supplier of structural building products, value-added components and services to the professional market for new residential construction and repair and remodeling.',
    ogDescription: 'Furnidepot is the nation’s largest supplier of structural building products, value-added components and services to the professional market for new residential construction and repair and remodeling.',
    ogImage: inforCategory.picture
})
</script>