
<template>
    <div>
        <div class="relative w-full md:h-[400px] h-[300px] pt-[100px] bg-no-repeat bg-cover bg-center"
            style="background-image: url('/services/banner2.webp')">
        </div>

        <div class="container flex flex-col px-5 py-10 mx-auto lg:gap-14 gap-10">
            <div>
                <h2 class="md:text-3xl text-2xl font-bold text-black mb-4">{{ slug }}</h2>
                <p class="text-base text-black sm:text-left text-justify">Our innovative component designs and systems are a
                    reliable and value-add
                    solution for builders. Offering many advantages, roof and floor trusses add efficiencies to the framing
                    process. In addition, our line of EWP (Engineered Wood Products) can help alleviate labor issues and
                    reduce build time. We also offer in-house structural design services to assist during the design
                    process.
                </p>
            </div>

            <div class="flex lg:flex-nowrap flex-wrap items-start justify-between gap-6">
                <div class="lg:w-4/12 w-full">
                    <h2 class="md:text-3xl text-2xl font-bold text-black mb-4">PROFESSIONALS RELY ON OUR INSTALLATION
                        SERVICES
                    </h2>
                    <p class="text-base text-black sm:text-left text-justify">
                        Our Installation Services give you the confidence that the job will be done correctly the first
                        time, on
                        schedule, and without the hassle of coordinating product ordering and scheduling labor separately.
                    </p>

                    <div class="mt-4">
                        <p class="text-base text-black mb-2">Save time and money while enjoying these benefits:</p>
                        <ul class="flex flex-col list-disc pl-5 gap-2">
                            <li class="text-base text-black">
                                Turnkey material and labor estimates eliminate budget variance
                            </li>
                            <li class="text-base text-black">
                                Turnkey material and labor estimates eliminate budget variance
                            </li>
                            <li class="text-base text-black">
                                Turnkey material and labor estimates eliminate budget variance
                            </li>
                            <li class="text-base text-black">
                                Turnkey material and labor estimates eliminate budget variance
                            </li>
                        </ul>
                    </div>

                </div>
                <div class="lg:w-7/12 w-full">
                    <img class="w-full"
                        data-src="https://cdn.media.amplience.net/i/stock/BLDR_Services_Installation_Professionals_D?fmt=webp&maxW=1440&qlt=60"
                        alt="image services" v-lazy-load>
                </div>
            </div>

            <div class="flex lg:flex-nowrap flex-wrap-reverse items-start justify-between gap-6">
                <div class="lg:w-7/12 w-full">
                    <img class="w-full"
                        data-src="https://cdn.media.amplience.net/i/stock/BLDR_Services_Installation_Professionals_D?fmt=webp&maxW=1440&qlt=60"
                        alt="image services" v-lazy-load>
                </div>

                <div class="lg:w-4/12 w-full">
                    <h2 class="md:text-3xl text-2xl font-bold text-black mb-4">PROFESSIONALS RELY ON OUR INSTALLATION
                        SERVICES
                    </h2>
                    <p class="text-base text-black sm:text-left text-justify">
                        Our Installation Services give you the confidence that the job will be done correctly the first
                        time, on
                        schedule, and without the hassle of coordinating product ordering and scheduling labor separately.
                    </p>

                    <div class="mt-4">
                        <p class="text-base text-black mb-2">Save time and money while enjoying these benefits:</p>
                        <ul class="flex flex-col list-disc pl-5 gap-2">
                            <li class="text-base text-black">
                                Turnkey material and labor estimates eliminate budget variance
                            </li>
                            <li class="text-base text-black">
                                Turnkey material and labor estimates eliminate budget variance
                            </li>
                            <li class="text-base text-black">
                                Turnkey material and labor estimates eliminate budget variance
                            </li>
                            <li class="text-base text-black">
                                Turnkey material and labor estimates eliminate budget variance
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

        <div class="container px-5 py-10 mx-auto">
            <h2 class="md:text-2xl text-xl text-center font-bold uppercase text-black mb-4">EXPLORE OTHER SERVICES</h2>

            <Swiper :modules="[SwiperAutoplay, SwiperPagination, Navigation]" :slides-per-view="1" :loop="true" :autoplay="{
                    delay: 8000,
                }" :space-between="20" :navigation="{
            enabled: false,
            nextEl: '#nextBtn',
            prevEl: '#prevBtn'
        }" :breakpoints="{ 565: { slidesPerView: 2 }, 768: { slidesPerView: 3, navigation: { enabled: true } }, 1025: { slidesPerView: 4, navigation: { enabled: true } } }"
                class="relative">
                <button id="prevBtn"
                    class="md:flex hidden absolute items-center justify-center text-3xl w-12 h-12 left-0 top-1/2 bg-orange-600 text-white rounded-full -translate-y-1/2 opacity-80 hover:opacity-100 z-30 transition-all ease-linear duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
                        <path fillRule="evenodd"
                            d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                            clipRule="evenodd" />
                    </svg>
                </button>
                <button id="nextBtn"
                    class="md:flex hidden absolute items-center justify-center text-3xl w-12 h-12 right-0 top-1/2 bg-orange-600 text-white rounded-full -translate-y-1/2 opacity-80 hover:opacity-100 z-30 transition-all ease-linear duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
                        <path fillRule="evenodd"
                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                            clipRule="evenodd" />
                    </svg>
                </button>
                <SwiperSlide>
                    <div class="bg-gray-100 p-5 rounded-lg hover:shadow-lg transition-all ease-linear duration-200">
                        <NuxtLink to="/design/detail">
                            <div class="md:h-[200px] h-[300px] overflow-hidden rounded">
                                <img class="w-full h-full hover:scale-110 object-cover object-center mb-6 transition-all ease-linear duration-200"
                                    data-src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG9tZSUyMGRlY29yfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                                    alt="content" v-lazy-load>
                            </div>
                            <h2 class="text-xl text-gray-900 font-medium title-font py-2">Delivery and Pick-Up</h2>
                        </NuxtLink>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="bg-gray-100 p-5 rounded-lg hover:shadow-lg transition-all ease-linear duration-200">
                        <NuxtLink to="/design/detail">
                            <div class="md:h-[200px] h-[300px] overflow-hidden rounded">
                                <img class="w-full h-full hover:scale-110 object-cover object-center mb-6 transition-all ease-linear duration-200"
                                    data-src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG9tZSUyMGRlY29yfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                                    alt="content" v-lazy-load>
                            </div>
                            <h2 class="text-xl text-gray-900 font-medium title-font py-2">Delivery and Pick-Up2</h2>
                        </NuxtLink>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="bg-gray-100 p-5 rounded-lg hover:shadow-lg transition-all ease-linear duration-200">
                        <NuxtLink to="/design/detail">
                            <div class="md:h-[200px] h-[300px] overflow-hidden rounded">
                                <img class="w-full h-full hover:scale-110 object-cover object-center mb-6 transition-all ease-linear duration-200"
                                    data-src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG9tZSUyMGRlY29yfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                                    alt="content" v-lazy-load>
                            </div>
                            <h2 class="text-xl text-gray-900 font-medium title-font py-2">Delivery and Pick-Up3</h2>
                        </NuxtLink>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="bg-gray-100 p-5 rounded-lg hover:shadow-lg transition-all ease-linear duration-200">
                        <NuxtLink to="/design/detail">
                            <div class="md:h-[200px] h-[300px] overflow-hidden rounded">
                                <img class="w-full h-full hover:scale-110 object-cover object-center mb-6 transition-all ease-linear duration-200"
                                    data-src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG9tZSUyMGRlY29yfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                                    alt="content" v-lazy-load>
                            </div>
                            <h2 class="text-xl text-gray-900 font-medium title-font py-2">Delivery and Pick-Up4</h2>
                        </NuxtLink>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="bg-gray-100 p-5 rounded-lg hover:shadow-lg transition-all ease-linear duration-200">
                        <NuxtLink to="/design/detail">
                            <div class="md:h-[200px] h-[300px] overflow-hidden rounded">
                                <img class="w-full h-full hover:scale-110 object-cover object-center mb-6 transition-all ease-linear duration-200"
                                    data-src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG9tZSUyMGRlY29yfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                                    alt="content" v-lazy-load>
                            </div>
                            <h2 class="text-xl text-gray-900 font-medium title-font py-2">Delivery and Pick-Up</h2>
                        </NuxtLink>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="bg-gray-100 p-5 rounded-lg hover:shadow-lg transition-all ease-linear duration-200">
                        <NuxtLink to="/design/detail">
                            <div class="md:h-[200px] h-[300px] overflow-hidden rounded">
                                <img class="w-full h-full hover:scale-110 object-cover object-center mb-6 transition-all ease-linear duration-200"
                                    data-src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG9tZSUyMGRlY29yfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                                    alt="content" v-lazy-load>
                            </div>
                            <h2 class="text-xl text-gray-900 font-medium title-font py-2">Delivery and Pick-Up</h2>
                        </NuxtLink>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="bg-gray-100 p-5 rounded-lg hover:shadow-lg transition-all ease-linear duration-200">
                        <NuxtLink to="/design/detail">
                            <div class="md:h-[200px] h-[300px] overflow-hidden rounded">
                                <img class="w-full h-full hover:scale-110 object-cover object-center mb-6 transition-all ease-linear duration-200"
                                    data-src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG9tZSUyMGRlY29yfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                                    alt="content" v-lazy-load>
                            </div>
                            <h2 class="text-xl text-gray-900 font-medium title-font py-2">Delivery and Pick-Up</h2>
                        </NuxtLink>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<script setup>
import { Navigation } from 'swiper';
import 'swiper/css/navigation';

const route = useRoute();
const slug = route.params.slug;
</script>