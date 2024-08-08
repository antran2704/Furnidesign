<template>
    <div class="max-w-[1200px] py-[120px] px-5 mx-auto">
        <section class="w-full h-[500px]">
            <Swiper :modules="[SwiperAutoplay, SwiperPagination, Navigation, PaginationSW]" :slides-per-view="1"
                :loop="true" :autoplay="{
                    delay: 5000,
                }" :space-between="20" :pagination="{ clickable: true }" :navigation="false"
                class="w-full h-full rounded-md overflow-hidden">
                <SwiperSlide class="w-full h-full">
                    <NuxtLink href="/blog/test"
                        class="relative block w-full h-full bg-cover bg-center bg-no-repeat rounded-md overflow-hidden"
                        style="background-image: url('https://blog.collov.com/hubfs/1-1.jpg');">
                        <div
                            class="absolute bottom-0 left-0 w-full px-5 py-10 bg-[rgba(255,255,255,0.65)]">
                            <h2 class="lg:text-4xl md:text-3xl text-2xl text-[#2c2b3c] font-bold pb-2 truncate">
                                The Pros & Cons of Traditional Interior Design
                            </h2>
                            <p class="text-lg text-[#64646b]">
                                <span>By Antran</span>
                                <span> / </span>
                                <span>Jun 12, 2023</span>
                            </p>
                        </div>
                    </NuxtLink>
                </SwiperSlide>
                <SwiperSlide class="w-full h-full">
                    <NuxtLink href="/blog/test"
                        class="relative block w-full h-full bg-cover bg-center bg-no-repeat rounded-md overflow-hidden"
                        style="background-image: url('https://blog.collov.com/hubfs/1-1.jpg');">
                        <div
                            class="absolute bottom-0 left-0 right-0 w-full px-5 py-10 bg-[rgba(255,255,255,0.65)]">
                            <h2 class="lg:text-4xl md:text-3xl text-2xl text-[#2c2b3c] font-bold pb-2 truncate">
                                The Pros & Cons of Traditional Interior Design
                            </h2>
                            <p class="text-lg text-[#64646b]">
                                <span>By Antran</span>
                                <span> / </span>
                                <span>Jun 12, 2023</span>
                            </p>
                        </div>
                    </NuxtLink>
                </SwiperSlide>
                <SwiperSlide class="w-full h-full">
                    <NuxtLink href="/blog/test"
                        class="relative block w-full h-full bg-cover bg-center bg-no-repeat rounded-md overflow-hidden"
                        style="background-image: url('https://blog.collov.com/hubfs/1-1.jpg');">
                        <div
                            class="absolute bottom-0 left-0 right-0 w-full px-5 py-10 bg-[rgba(255,255,255,0.65)]">
                            <h2 class="lg:text-4xl md:text-3xl text-2xl text-[#2c2b3c] font-bold pb-2 truncate">
                                The Pros & Cons of Traditional Interior Design
                            </h2>
                            <p class="text-lg text-[#64646b]">
                                <span>By Antran</span>
                                <span> / </span>
                                <span>Jun 12, 2023</span>
                            </p>
                        </div>
                    </NuxtLink>
                </SwiperSlide>
            </Swiper>

        </section>

        <section class="w-full py-10 ">
            <h2 class="lg:text-2xl md:text-xl text-base font-bold mb-5">
                Blogs
            </h2>
            <div class="grid lg:grid-cols-3 grid-cols-2 w-full gap-5">
                <NuxtLink href="/blog/test"
                    class="block bg-[#efeff1] hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden transition-all ease-linear duration-200">
                    <div class="w-full md:h-[350px] sm:h-[300px] h-[200px]">
                        <Image classProps="w-full h-full" src="https://lh4.googleusercontent.com/rkgdoIeSeW1aNwFQdqkFkdu9u-xKzKo4LFvbzfR58bPKig-tGFlLrOtS7ThqKLcBf_73RxF9FVDV3fb3c-9CDT7r2zcNdEmk8ZW3xKUMSCLaKr1XJHnG9904KT63wehaWSE-s8qR=s0" alt="image" />
                    </div>
                    <div class="w-full px-3 py-5">
                        <h2 class="lg:text-2xl md:text-xl text-lg text-[#2c2b3c] font-bold pb-2 line-clamp-2">
                            The Pros & Cons of Traditional Interior Design
                        </h2>
                        <p class="text-base text-[#64646b] line-clamp-2">
                            <span>By Antran</span>
                            <span> / </span>
                            <span>Jun 12, 2023</span>
                        </p>
                    </div>
                </NuxtLink>
                <NuxtLink href="/blog/test"
                    class="block bg-[#efeff1] hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden transition-all ease-linear duration-200">
                    <div class="w-full md:h-[350px] sm:h-[300px] h-[200px]">
                        <Image classProps="w-full h-full" src="https://lh4.googleusercontent.com/rkgdoIeSeW1aNwFQdqkFkdu9u-xKzKo4LFvbzfR58bPKig-tGFlLrOtS7ThqKLcBf_73RxF9FVDV3fb3c-9CDT7r2zcNdEmk8ZW3xKUMSCLaKr1XJHnG9904KT63wehaWSE-s8qR=s0" alt="image" />
                    </div>
                    <div class="w-full px-3 py-5">
                        <h2 class="lg:text-2xl md:text-xl text-lg text-[#2c2b3c] font-bold pb-2 line-clamp-2">
                            The Pros & Cons of Traditional Interior Design
                        </h2>
                        <p class="text-base text-[#64646b] line-clamp-2">
                            <span>By Antran</span>
                            <span> / </span>
                            <span>Jun 12, 2023</span>
                        </p>
                    </div>
                </NuxtLink>
                <NuxtLink href="/blog/test"
                    class="block bg-[#efeff1] hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden transition-all ease-linear duration-200">
                    <div class="w-full md:h-[350px] sm:h-[300px] h-[200px]">
                        <Image classProps="w-full h-full" src="https://lh4.googleusercontent.com/rkgdoIeSeW1aNwFQdqkFkdu9u-xKzKo4LFvbzfR58bPKig-tGFlLrOtS7ThqKLcBf_73RxF9FVDV3fb3c-9CDT7r2zcNdEmk8ZW3xKUMSCLaKr1XJHnG9904KT63wehaWSE-s8qR=s0" alt="image" />
                    </div>
                    <div class="w-full px-3 py-5">
                        <h2 class="lg:text-2xl md:text-xl text-lg text-[#2c2b3c] font-bold pb-2 line-clamp-2">
                            The Pros & Cons of Traditional Interior Design
                        </h2>
                        <p class="text-base text-[#64646b] line-clamp-2">
                            <span>By Antran</span>
                            <span> / </span>
                            <span>Jun 12, 2023</span>
                        </p>
                    </div>
                </NuxtLink>
            </div>

            <Pagination :totalItems="100" :currentPage="Number(route.params.page) || 1" :pageSize="16" url="/blog/page" />
        </section>
    </div>
</template>

<script setup>
import { Navigation, Pagination as PaginationSW } from 'swiper';

import Pagination from "~/components/Pagination";

const route = useRoute();
</script>
