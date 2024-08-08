<template>
    <div>
        <div class="relative w-full md:h-[400px] h-[300px] pt-[100px] bg-no-repeat bg-cover bg-center"
            style="background-image: url('/services/banner.jpg');">
            <h2 class="absolute md:text-5xl text-4xl text-white text-center font-medium uppercase md:bottom-12 md:left-16 top-1/2 left-1/2 md:translate-x-0 md:translate-y-0 -translate-y-1/2 -translate-x-1/2"
                style="text-shadow: 2px 10px 60px rgba(0, 0, 0, 0.9);">OUR SERVICES</h2>
        </div>
        <div class="container py-10 px-5 mx-auto">
            <h2 class="md:text-2xl text-xl font-medium text-black uppercase mb-4">All categories</h2>
            <ul class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-5 gap-8">
                <li class="bg-gray-100 p-5 rounded-lg hover:shadow-lg transition-all ease-linear duration-200">
                    <NuxtLink to="/services/test">
                        <div class="md:h-[200px] h-[300px] overflow-hidden rounded">
                            <img class="w-full h-full hover:scale-110 object-cover object-center mb-6 transition-all ease-linear duration-200"
                                data-src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG9tZSUyMGRlY29yfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                                alt="content" v-lazy-load>
                        </div>
                        <h2 class="text-xl text-gray-900 font-medium title-font py-2">Delivery and Pick-Up</h2>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>