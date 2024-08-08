<template>
    <div>
        <section>
            <video ref="bannerRef" data-src="/video_bg.mp4" loop="true" muted="true" webkit-playsinline="true"
                playsinline="true" class="w-full" v-lazy-load>
                <track src="captions_en.vtt" kind="captions" srclang="en" label="english_captions">
                <track src="captions_es.vtt" kind="captions" srclang="es" label="spanish_captions">
            </video>
        </section>

        <section class="container px-5 my-6 mx-auto">
            <div data-aos="fade-up" data-aos-duration="1000" class="flex flex-col items-center justify-center w-full mb-8">
                <h2
                    class="md:text-4xl sm:text-3xl text-2xl text-center font-cormorantGaramond font-bold  mb-2 text-gray-900">
                    Furni Design - Matching Your Vibes
                </h2>
                <div class="h-1 w-20 bg-dark rounded"></div>
            </div>
            <div class="grid flex-wrap lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
                <div v-if="projects.length > 0" v-for="(item, index) in projects" :key="item.id" data-aos="fade-up"
                    data-aos-duration="1000" :data-aos-delay="100 * index">
                    <ProjectHomePage :project="item" />
                </div>
                <div v-else v-for="(item, index) in [...new Array(8)]" :key="index">
                    <LoadingSkelatonItem />
                </div>
            </div>
        </section>

        <!-- Why choose FN -->
        <section class="container w-full py-6 px-5 mx-auto">
            <div data-aos="fade-up" data-aos-duration="1000" class="flex flex-col items-center justify-center w-full mb-8">
                <h2
                    class="md:text-4xl sm:text-3xl text-2xl text-center font-cormorantGaramond font-bold mb-2 text-gray-900">
                    Why choose Furni Design
                </h2>
                <div class="h-1 w-20 bg-dark rounded"></div>
            </div>
            <div class="flex md:flex-row flex-col items-center justify-between mt-5 gap-10">
                <ul class="md:w-6/12 w-full flex flex-col items-start text-base md:gap-3 gap-4">
                    <li v-for="(content, index) in listWhyChoose" data-aos="fade-right" data-aos-duration="1000"
                        :data-aos-delay="100 * index" class="flex items-start gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                            stroke="currentColor" class="min-w-[30px] h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {{ content }}
                    </li>
                </ul>
                <div data-aos="fade-left" data-aos-duration="1000" class="md:w-6/12 w-full">
                    <img class="w-full"
                        data-src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="image" title="image" width="100" height="100" v-lazy-load />
                </div>
            </div>
        </section>

        <section class="container w-full bg-contain py-10 px-5 mx-auto">
            <div data-aos="fade-up" data-aos-duration="1000" class="flex flex-col items-center justify-center w-full mb-8">
                <h2
                    class="md:text-4xl sm:text-3xl text-2xl text-center font-cormorantGaramond font-bold mb-2 text-gray-900">
                    Statistics</h2>
                <div class="h-1 w-20 bg-dark rounded"></div>
            </div>
            <div class="flex lg:flex-nowrap flex-wrap items-center gap-10">
                <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:w-1/2 w-full content-start gap-2">
                    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"
                        class="p-3 w-full text-center text-[#CB9564] bg-[#FFF3E8] rounded-md border">
                        <h2 class=" font-medium text-3xl" id="count1">2.7K</h2>
                        <p class="leading-relaxed">Our Customers</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"
                        class="p-3 w-full text-center text-[#4A48B2] bg-[#F1F0FF] rounded-md border">
                        <h2 class=" font-medium text-3xl">200+</h2>
                        <p class="leading-relaxed">Location</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"
                        class="p-3 w-full text-center text-[#177BC0] bg-[#E2F3FF] rounded-md border">
                        <h2 class=" font-medium text-3xl">20</h2>
                        <p class="leading-relaxed">Services</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400"
                        class="p-3 w-full text-center text-[#30711A] bg-[#EDFFE7] rounded-md border">
                        <h2 class=" font-medium text-3xl">50+</h2>
                        <p class="leading-relaxed">Products</p>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-out"
                    class="flex lg:w-1/2 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                    <img class="bject-cover object-center w-full h-96"
                        data-src="https://images.unsplash.com/photo-1616137148650-4aa14651e02b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                        alt="image" title="image" v-lazy-load width="100" height="100" />
                </div>
            </div>
        </section>

        <!-- work follow -->
        <section class="text-gray-600 body-font">
            <div class="md:w-[700px] w-full mx-auto rounded-lg my-6 overflow-hidden">
                <iframe width="100%" height="450" data-src="https://www.youtube.com/embed/vmyxV3XNX_s?autoplay=1&mute=1"
                    title="FURNI DESIGN - GIẢI PHÁP CHO NGÀNH XÂY DỰNG ĐÃ CHÍNH THỨC CÓ MẶT TRÊN ĐƯỜNG ĐUA TẠI HOA KỲ"
                    frameborder="0" allow="autoplay; encrypted-media" allowfullscreen class="px-5" v-lazy-load></iframe>
            </div>
            <div class="container px-5 py-6 mx-auto flex flex-wrap">
                <div class="flex flex-col items-center justify-center w-full mb-8">
                    <h1
                        class="md:text-4xl sm:text-3xl text-2xl text-center font-cormorantGaramond font-bold text-gray-900 mb-2">
                        Our Work-follow</h1>
                    <div class="h-1 w-20 bg-dark rounded"></div>
                </div>
                <div class="flex flex-wrap w-full">
                    <div class="relative md:w-[400px] w-[260px] md:h-[1680px] h-[1180px] pt-14 bg-contain bg-no-repeat mx-auto"
                        style="background-image: url('/timeline/ThanhChinh.png');">
                        <!-- step1 -->
                        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"
                            class="relative md:h-[170px] h-[130px] md:top-0 md:right-7 right-0 -top-5">
                            <img src="/timeline/Thanh1.png" class="absolute w-full top-6 right-0" title="timeline"
                                alt="timeline" width="100" height="100">
                            <img src="/timeline/Icon1.png" alt="timeline" title="timeline"
                                class="absolute md:-top-2 top-0 md:-left-16 -left-10 md:w-16 md:h-16 w-12 h-12" width="100"
                                height="100">
                            <div class="flex items-center justify-center md:gap-5 gap-2">
                                <h2 class="md:w-2/12 w-3/12 lg:text-lg text-base text-center font-bold uppercase">Step 1
                                </h2>
                                <p class="md:w-8/12 w-7/12 md:text-base text-xs">
                                    Tell us about your aesthetic,
                                    lifestyle, and goals so that
                                    our talented consulant can
                                    understand your true needs.
                                </p>
                            </div>
                        </div>
                        <!-- step2 -->
                        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600"
                            class="relative md:top-0 -top-5 -left-1 md:h-[180px] h-[150px]">
                            <img src="/timeline/Thanh2.png" class="w-full" title="timeline" alt="timeline" width="100"
                                height="100">
                            <img src="/timeline/Icon2.png"
                                class="absolute md:-top-8 -top-6 md:-right-16 -right-10 md:w-16 md:h-16 w-12 h-12"
                                title="timeline" alt="timeline" width="100" height="100">
                            <div
                                class="absolute md:-top-2 -top-4 md:right-5 right-0 flex flex-row-reverse items-center md:gap-5 gap-2">
                                <h2 class="md:w-2/12 w-3/12 lg:text-lg text-base text-center font-bold uppercase">Step 2
                                </h2>
                                <p class="md:w-8/12 w-7/12 md:text-base text-xs">
                                    When you’re head - over
                                    - heels in love with the
                                    design, approve the start
                                    of the process.
                                </p>
                            </div>
                        </div>
                        <!-- step3 -->
                        <div data-aos="fade-up" data-aos-duration="1000"
                            class="relative md:top-0 -top-10 md:right-7 right-0 md:h-[200px] h-[100px]">
                            <img src="/timeline/Thanh3.png" class="w-full" title="timeline" alt="timeline" width="100"
                                height="100">
                            <img src="/timeline/Icon3.png" title="timeline" alt="timeline" width="100" height="100"
                                class="absolute md:-top-2 -top-6 md:-left-16 -left-10 md:w-16 md:h-16 w-12 h-12">
                            <div class="absolute -top-16 left-5 flex items-center gap-5">
                                <h2 class="md:w-2/12 w-3/12 lg:text-lg text-base text-center font-bold uppercase">Step 3
                                </h2>
                                <p class="md:w-8/12 w-7/12 md:text-base text-xs">
                                    We’ll craft a Concept design
                                    and Layout that will take your
                                    breath away. If you don’t have
                                    any ideas, don’t worry - our
                                    talented designers will help
                                    you based on a few questions
                                    about your preferences.
                                </p>
                            </div>
                        </div>
                        <!-- step4 -->
                        <div data-aos="fade-up" data-aos-duration="1000" class="relative -left-1 md:h-[170px] h-[110px]">
                            <img src="/timeline/Thanh4.png" class="w-full" title="timeline" alt="timeline" width="100"
                                height="100">
                            <img src="/timeline/Icon4.png" title="timeline" alt="timeline" width="100" height="100"
                                class="absolute md:-top-8 -top-6 md:-right-16 -right-10 md:w-16 md:h-16 w-12 h-12">
                            <div class="absolute md:-top-4 -top-8 right-5 flex flex-row-reverse items-center gap-5">
                                <h2 class="md:w-2/12 w-3/12 lg:text-lg text-base text-center font-bold uppercase">Step 4
                                </h2>
                                <p class="md:w-8/12 w-7/12 md:text-base text-xs">
                                    We’ll create a 3D interior
                                    design that will make you
                                    smile. As a surprise, we’ll
                                    provide editing services
                                    until you are satisfied.
                                </p>
                            </div>
                        </div>
                        <!-- step5 -->
                        <div data-aos="fade-up" data-aos-duration="1000"
                            class="relative md:right-7 right-0 md:h-[180px] h-[130px]">
                            <img src="/timeline/Thanh5.png" class="w-full" title="timeline" alt="timeline" width="100"
                                height="100">
                            <img src="/timeline/Icon5.png" ctitle="timeline" alt="timeline" width="100" height="100"
                                class="absolute d:-top-2 -top-6 md:-left-16 -left-10 md:w-16 md:h-16 w-12 h-12">
                            <div class="absolute md:-top-8 -top-8 left-5 flex items-center gap-5">
                                <h2 class="md:w-2/12 w-3/12 lg:text-lg text-base text-center font-bold uppercase">Step 5
                                </h2>
                                <p class="md:w-8/12 w-7/12 md:text-base text-xs">
                                    A construction drawing sheet
                                    and accurate quotation for the
                                    entire process will be sent to
                                    you promptly.
                                </p>
                            </div>
                        </div>
                        <!-- step6 -->
                        <div data-aos="fade-up" data-aos-duration="1000" class="relative -left-1 md:h-[180px] h-[120px]">
                            <img src="/timeline/Thanh6.png" class="w-full" title="timeline" alt="timeline" width="100"
                                height="100">
                            <img src="/timeline/Icon6.png" title="timeline" alt="timeline" width="100" height="100"
                                class="absolute md:-top-8 -top-6 md:-right-16 -right-10 md:w-16 md:h-16 w-12 h-12">
                            <div class="absolute md:-top-2 -top-12 right-5 flex flex-row-reverse items-center gap-5">
                                <h2 class="md:w-2/12 w-3/12 lg:text-lg text-base text-center font-bold uppercase">Step 6
                                </h2>
                                <p class="md:w-8/12 w-7/12 md:text-base text-xs">
                                    Shop for all of the items
                                    in your design from our
                                    accurate quotation.
                                    Once you approve the
                                    price list, you can sign
                                    the contract and begin
                                    producing the furniture.
                                </p>
                            </div>
                        </div>
                        <!-- step7 -->
                        <div data-aos="fade-up" data-aos-duration="1000"
                            class="relative md:right-7 right-0 md:h-[130px] h-[90px]">
                            <img src="/timeline/Thanh7.png" class="w-full" title="timeline" alt="timeline" width="100"
                                height="100">
                            <img src="/timeline/Icon7.png" title="timeline" alt="timeline" width="100" height="100"
                                class="absolute d:-top-2 -top-8 md:-left-16 -left-10 md:w-16 md:h-16 w-12 h-12">
                            <div class="absolute md:-top-4 -top-6 left-5 flex items-center gap-5">
                                <h2 class="md:w-2/12 w-3/12 lg:text-lg text-base text-center font-bold uppercase">Step 7
                                </h2>
                                <p class="md:w-8/12 w-7/12 md:text-base text-xs">
                                    After the factory has completed
                                    production of your order, the
                                    shipping process will begin.
                                </p>
                            </div>
                        </div>
                        <!-- step8 -->
                        <div data-aos="fade-up" data-aos-duration="1000" class="relative -left-1 md:h-[150px] h-[100px]">
                            <img src="/timeline/Thanh8.png" class="w-full" title="timeline" alt="timeline" width="100"
                                height="100">
                            <img src="/timeline/Icon8.png" title="timeline" alt="timeline" width="100" height="100"
                                class="absolute md:-top-8 -top-6 md:-right-16 -right-10 md:w-16 md:h-16 w-12 h-12">
                            <div class="absolute -top-4 right-5 flex flex-row-reverse items-center gap-5">
                                <h2 class="md:w-2/12 w-3/12 lg:text-lg text-base text-center font-bold uppercase">Step 8
                                </h2>
                                <p class="md:w-8/12 w-7/12 md:text-base text-xs">
                                    During this time, you’ll
                                    receive a construction
                                    and installation quotation.
                                </p>
                            </div>
                        </div>
                        <!-- step9 -->
                        <div data-aos="fade-up" data-aos-duration="1000"
                            class="relative md:right-7 right-0 md:h-[150px] h-[110px]">
                            <img src="/timeline/Thanh9.png" class="w-full" title="timeline" alt="timeline" width="100"
                                height="100">
                            <img src="/timeline/Icon9.png" title="timeline" alt="timeline" width="100" height="100"
                                class="absolute d:-top-2 -top-6 md:-left-16 -left-10 md:w-16 md:h-16 w-12 h-12">
                            <div class="absolute md:-top-4 -top-8 left-5 flex items-center gap-5">
                                <h2 class="md:w-2/12 w-3/12 lg:text-lg text-base text-center font-bold uppercase">Step 9
                                </h2>
                                <p class="md:w-8/12 w-7/12 md:text-base text-xs">
                                    Sign the construction and
                                    installation contract if you’re
                                    happy with it. Installation
                                    and construction will begin
                                    immediately.
                                </p>
                            </div>
                        </div>
                        <!-- step10 -->
                        <div data-aos="fade-up" data-aos-duration="1000" class="relative -left-1">
                            <img src="/timeline/Thanh10.png" class="w-full" title="timeline" alt="timeline" width="100"
                                height="100">
                            <img src="/timeline/Icon10.png" title="timeline" alt="timeline" width="100" height="100"
                                class="absolute md:-top-8 -top-6 md:-right-16 -right-10 md:w-16 md:h-16 w-12 h-12">
                            <div class="absolute md:top-0 -top-2 right-4 flex flex-row-reverse items-center gap-5">
                                <h2 class="md:w-2/12 w-3/12 lg:text-lg text-base text-center font-bold uppercase">Step
                                    10</h2>
                                <p class="md:w-8/12 w-7/12 md:text-base text-xs">
                                    Finish the whole process
                                    and rejoice in the amazing
                                    result.
                                </p>
                            </div>
                        </div>
                    </div>
                    <img class="lg:w-1/2 w-full object-cover object-center rounded-lg md:mt-0 mt-12 mx-auto"
                        data-src="https://collov.com/img/bg.a2330ca3.svg" alt="step" title="step" width="100" height="100"
                        v-lazy-load />
                </div>
            </div>
        </section>

        <section class="w-full bg-[#f0ede9] py-10 px-5">
            <div class="container mx-auto gap-10">
                <div class="lg:w-1/2 w-full mx-auto ">
                    <div class="flex flex-col items-center w-full gap-3">
                        <img data-src="https://collov.com/webIndex/img/frame.3a9ca883.svg" alt="imag" title="image"
                            width="100" height="100" v-lazy-load />
                        <p class="md:text-xl text-base text-center text-[#5a6066] font-medium">FIND YOUR VIBE</p>
                        <h2
                            class="md:text-4xl sm:text-3xl text-2xl font-cormorantGaramond font-semibold text-center text-[#171819]">
                            80% of people don’t know their interior design style. Do you?
                        </h2>
                    </div>
                    <div class="relative flex items-center justify-between w-full my-10 gap-3">
                        <p class="md:text-lg text-base font-medium uppercase">
                            SORT OF
                        </p>
                        <input type="range" min="1" max="100" value="45" class="flex-1" />
                        <p class="md:text-lg text-base font-medium uppercase">
                            YES
                        </p>
                    </div>
                    <button
                        class="flex items-center justify-center md:w-fit sm:w-1/2 w-full h-[50px] bg-dark  rounded-md md:text-lg text-base text-white font-bold px-5 py-2 mx-auto uppercase">
                        TAKE THE STYLE QUIZ
                    </button>
                </div>
            </div>
        </section>

        <section class="text-gray-600 body-font">
            <div class="container px-5 py-10 mx-auto">
                <div data-aos="fade-up" data-aos-duration="1000"
                    class="flex flex-col items-center justify-center w-full mb-8">
                    <h2 class="md:text-4xl sm:text-3xl text-2xl font-cormorantGaramond font-bold mb-2 text-gray-900">
                        CUSTOMER FEEDBACK
                    </h2>
                    <div class="h-1 w-20 bg-dark rounded"></div>
                </div>
                <div class="w-full" data-aos="fade-up" data-aos-duration="1000">

                    <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]" :slides-per-view="1"
                        :breakpoints="{
                            '640': {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            '1024': {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }" :loop="true" :spaceBetween="30" :autoplay="{
    delay: 8000,
    disableOnInteraction: true,
}">
                        <SwiperSlide v-for="item in testimonials" :key="item.Id">
                            <div class="w-full">
                                <div class="flex flex-col justify-between bg-gray-100 h-[240px] rounded p-4">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                            class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                                            <path
                                                d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                                            </path>
                                        </svg>
                                        <p data-width="2" class="leading-relaxed mb-6 line-clamp-4">{{ item.Feedback }}</p>
                                    </div>
                                    <div class="inline-flex items-center">
                                        <img class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                                            :data-src="item.Avatar" alt="Feed back" title="Feed back" width="100" height="100" v-lazy-load />
                                        <span class="flex-grow flex flex-col pl-4">
                                            <span class="font-medium text-gray-900">{{ item.Name }}</span>
                                            <span class="text-gray-500 text-sm ">{{ item.Role }}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>

        <section data-aos="fade-right" class="text-gray-600 body-font">
            <div class="container px-5 mx-auto">
                <div data-aos="fade-up" data-aos-duration="1000"
                    class="flex flex-col items-center justify-center w-full mb-8">
                    <h2 class="md:text-4xl sm:text-3xl text-2xl font-cormorantGaramond font-bold mb-2 text-gray-900">
                        Customers</h2>
                    <div class="h-1 w-20 bg-dark rounded"></div>
                </div>
                <div class="w-full py-4">
                    <Swiper :modules="[SwiperAutoplay, SwiperPagination]" :slides-per-view="2" :breakpoints="{
                        '768': {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        '768': {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        '1024': {
                            slidesPerView: 6,
                            spaceBetween: 30,
                        },
                    }" :loop="true" :autoplay="{
    delay: 3000,
    disableOnInteraction: true,
}" class="h-28">
                        <SwiperSlide class="h-full" v-for="(c, index) in customers" :key="c">
                            <div class="flex items-center justify-center w-full h-full">
                                <img :key="index" class="w-28 h-full object-contain" :data-src="c.Img" alt="customer"
                                    title="customer" width="100" height="100" v-lazy-load />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>

        <section id="FAQ" class="w-full bg-[#7585a4] py-20 mt-10 px-5">
            <div class="container mx-auto gap-10">
                <div class="lg:w-1/2 w-full mx-auto ">
                    <div class="flex flex-col items-center w-full gap-3">
                        <h2
                            class="md:text-4xl sm:text-3xl text-2xl font-cormorantGaramond font-bold text-center text-white">
                            Frequently Asked Questions
                        </h2>
                        <p class="md:text-lg text-base text-center text-white">
                            At Furni Design, you’re the star, and we listen to you. Have a question or two about our online
                            interior design services? We’re here to help.
                        </p>
                    </div>
                    <ul class="flex flex-col items-start w-full mt-10 gap-5">
                        <li v-for="question in questions" class="w-full">
                            <DetailProduct class="text-lg bg-[#e6e1de]" :title="question.title">
                                <p class="text-base text-white text-justify mt-3 px-5">
                                    {{ question.content }}
                                </p>
                                <ul v-if="question.children" v-for="content in question.children"
                                    class="w-4/5 text-base text-justify list-disc mx-auto">
                                    <li class="text-white my-2">
                                        {{ content }}
                                    </li>
                                </ul>
                            </DetailProduct>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <Popup :show="showModal" :onClick="handleShowModal">
            <form @submit.prevent="handleShowModal"
                class="relative flex items-center lg:min-w-[780px] w-full bg-white mx-auto shadow-sm rounded-md transition-all ease-linear duration-300 overflow-hidden">
                <div @click="handleShowModal" class="absolute right-2 top-2 w-fit cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" class="w-12 h-12 md:text-white text-dark">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </div>
                <div class="md:w-1/2 w-full md:px-5 px-10 md:py-10 py-14">
                    <h2 class="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold text-center text-[#373f47] mb-4">
                        SAVE UP TO 20% OFF ALL DESIGN
                    </h2>
                    <p class="md:text-lg text-base text-center text-[#373f47]">
                        Sign up now for beautiful design inspiration, order status, and special offers in your inbox.
                    </p>

                    <div class="flex items-center flex-wrap w-full mt-5 gap-2">
                        <input placeholder="Enter your email..." required type="email"
                            class="w-full h-[50px] text-lg px-4 border-2 border-gray-400 rounded-md">
                        <button
                            class="flex items-center justify-center w-full h-[50px] bg-dark  rounded-md md:text-xl sm:text-lg text-base text-white font-bold px-3 ">
                            Continue
                        </button>
                    </div>
                </div>
                <div class="md:block hidden w-1/2 h-[540px]"
                    style="background-image: url('https://d3k81ch9hvuctc.cloudfront.net/company/XaXiNq/images/a4084a8f-34b6-4885-857d-69c3f6357d77.jpeg'); background-position: center; background-repeat: no-repeat; background-size: cover;">
                </div>
            </form>
        </Popup>
    </div>
</template>
<script setup>
import Popup from "~/components/Popup";
import DetailProduct from "~/components/DetailProduct";

const listWhyChoose = ref([
    "We are the only company that sticks to 3D design from 99% to 100%",
    "We have a factory that allows us to optimize costs",
    "We also make sure to comply with the contract, have a team of highly experienced and professional designers who are ready to edit unlimited 3D designs until you are satisfied, and have a good production and construction team who can manage even the most complex designs.",
    "We also provide 24/7 customer care service, ensuring absolute satisfaction and solving any construction problems. So, choose Furni Design for a worry-free and stress-free experience!"
])

const testimonials = ref([
    {
        Id: 1,
        Avatar: "/feedback/customer1.jpg",
        Name: "Travish Dinh",
        Role: "Customer",
        Feedback: "Amazing company.  The attention to detail and level of response is unmatchable.  They helped me redesign my business and came up with very creative ideas.  I have worked with other designers and no one compares to this type of quality."
    },
    {
        Id: 2,
        Avatar: "/feedback/customer2.jpg",
        Name: "Hoa Jang",
        Role: "Customer",
        Feedback: "A hidden gem in SD with superb interior ideas for both budget conscious and discriminating customers. Excellent availability of items. Wide range of eclectic choices. Ask for Ms Hanna when you get there for great ideas."
    },
    {
        Id: 3,
        Avatar: "/feedback/customer3.jpg",
        Name: "T & A Hair Studio",
        Role: "Customer",
        Feedback: "The customer service I received was exceptional. The staff was knowledgeable, attentive, and genuinely interested in helping me find the pieces that would best suit my space and preferences. They were patient in answering my questions and guiding me through the different options available."
    },
    {
        Id: 4,
        Avatar: "/feedback/customer4.jpg",
        Name: "Pizza Paradise",
        Role: "Customer",
        Feedback: "I called to ask about remodeling my kitchen a couple weeks back. They were very kind, answered all my questions well, and gave me some great ideas in general. Would 100% recommend working with Furni Design, they have made my decision making process so awesome."
    },
    {
        Id: 5,
        Avatar: "/feedback/customer5.jpg",
        Name: "Galaxy Nail Salon",
        Role: "Customer",
        Feedback: "Had a great experience here choosing furniture for my new nail salon! Furni Design was very helpful and gave great direction suggestions! The ordering process is quick and easy. The interior is beautifully and meticulously made!"
    },
    {
        Id: 6,
        Avatar: "/feedback/customer6.jpg",
        Name: "Galaxy Nail Salon",
        Role: "Customer",
        Feedback: "Furni Design is a true professional - knowledgeable, responsive, diligent, thorough, and meticulous."
    },
    {
        Id: 7,
        Avatar: "/feedback/customer7.jpg",
        Name: "Gochew Grill Restaurant",
        Role: "Customer",
        Feedback: "I have a new restaurant that needs furniture. I was lucky enough to meet Furni Design. They were talented, professional, and a good listener. They helped me come up with interior ideas to suit my needs. I highly recommend Furni Design!"
    },
    {
        Id: 8,
        Avatar: "/feedback/customer8.jpg",
        Name: "Center Hotel",
        Role: "Customer",
        Feedback: "Furni Design was professional and knowledgeable. They answered any questions I had and gave the best ideas"
    },
    {
        Id: 9,
        Avatar: "/feedback/customer9.jpg",
        Name: "Beauty Nails",
        Role: "Customer",
        Feedback: "Furni Design was very professional and it went better then I could of ever hoped for. If you are looking for a company to do your next remodel, this is the company to go with."
    },
    {
        Id: 10,
        Avatar: "/feedback/customer10.jpg",
        Name: "Mommy's Kitchen & Coffee",
        Role: "Customer",
        Feedback: "What I really liked was how they cover lots of bases. They can create cool building designs that make you feel like you're already inside."
    },
    {
        Id: 11,
        Avatar: "/feedback/customer11.jpg",
        Name: "Marufuku Ramen",
        Role: "Customer",
        Feedback: "I would give 6 stars if I could. Their types of furnitures are truly beautiful and high quality. I highly recommend!"
    },
    {
        Id: 12,
        Avatar: "/feedback/customer12.jpg",
        Name: "Fashion Nails",
        Role: "Customer",
        Feedback: "We have invested a lot of money to get the house remodeled with some best features to reflect our personality and choices and Furni Design had helped us to get the best ever service which worth our investment."
    },
])

const customers = ref([{
    Img: "customers/vrbo-logowordmarkfull-coloron-light-ts-2019-03-26t131136800-0500_750xx.png"
},
{
    Img: "customers/HomeAway-Logo-2.jpg"
},
{
    Img: "customers/Bookingcom-logo-super-bowl.png"
},
{
    Img: "customers/6033d94df82f810004782c92.png"
},
{
    Img: "customers/ckaus0qixhppnso60oua.png"
},
{
    Img: "customers/Wimdu_logo.png"
},
{
    Img: "customers/2038136.png"
},
{
    Img: "customers/Onefinestay_Logo_2016.png"
},
{
    Img: "customers/CouchSurfing_logo.png"
},
{
    Img: "customers/png-transparent-peerspace-coupon-business-discounts-and-allowances-logo-business-angle-text-service-thumbnail.png"
}
])

const questions = ref([
    {
        title: "Is there an effective way to manage construction costs within my budget?",
        content: "At Furni Design, we believe in tailored solutions. Discussing your projected budget with us before embarking on interior design is a pivotal step in our process. Our dedicated team will invest ample time in consultations during the interior design phase to help you maintain budgetary control while ensuring the creation of a truly distinctive design that suits your needs."
    },
    {
        title: "I lack any initial ideas; can Furni Design assist in inspiring concepts for constructing my new home and Airbnb?",
        content: "Furni Design's exceptional team of architects is proficient in generating preliminary design concepts and spatial planning based on architectural schematics, optimizing your living environment. Crafting Airbnb properties is one of our core competencies, supported by a proven track record of successful projects that yield substantial profits for property owners. You can trust us to guide you every step of the way."
    },
    {
        title: "Do you handle interior production and construction subsequent to the interior design phase? How can we consolidate everything under one company?",
        content: "What truly distinguishes us is our comprehensive approach. We're not just an interior design firm; we're a fully integrated company that manages interior production and construction. This is why our clients refer to us as the ultimate solution for design and construction needs in the United States. We are unwavering in our commitment to delivering 100% of our product to perfection in reality."
    },
    {
        title: "Do I have to purchase the items in my design proposal?",
        content: "You are not obligated to purchase the items in your design proposal. We will provide you with detailed construction drawings and an accurate cost estimate. You can use this to obtain quotes from other providers and make comparisons. If our pricing fits within your budget, we would be delighted to produce the furniture for you. If not, that's perfectly fine too. We are more than happy to assist you in your design and construction project. If you are concerned that our furniture prices may be higher than other providers, you may be pleased to know that we guarantee the most competitive market prices and provide an accurate 100% cost estimate, ensuring the most cost-effective solution for you. Even if the lowest price for decorating your home still seems too high for you, we can offer alternative products at a price that aligns with your preferences, all while maintaining the discerning eye of our talented architects and helping you save money."
    },
    {
        title: "Do I have the opportunity to speak with my designer?",
        content: "Absolutely! You will have a online direct meeting with your designer to discuss design preferences, style, colors, specific measurements, dimensions, and the budget you have in mind. From there, we will assist you in ensuring that your budget aligns with your expectations"
    },
])

let myTimeout;
let popupTimeoutId;

const showModal = ref(false);
const bannerRef = ref(null);
// const projects = await $fetch(`/api/projectHomePage`, { cache: "force-cache" });
const projects = [];

const handleShowModal = () => {
    const popupStorage = JSON.parse(localStorage.getItem("pl"));
    if (!popupStorage) {
        localStorage.setItem("pl", JSON.stringify(true))
    }
    showModal.value = !showModal.value;
}

onMounted(async () => {
    const popupStorage = JSON.parse(localStorage.getItem("pl"));

    popupTimeoutId = setTimeout(() => {
        bannerRef.value.play();
    }, 100)

    if (!popupStorage) {
        setTimeout(() => {
            showModal.value = true;
        }, 1600);
    }
});

onBeforeRouteLeave(() => {
    clearInterval(myTimeout);
    clearTimeout(popupTimeoutId);
})

useSeoMeta({
    title: 'Furni Design',
    ogTitle: 'Furni Design',
    description: 'Furnidepot is the nation’s largest supplier of structural building products, value-added components and services to the professional market for new residential construction and repair and remodeling.',
    ogDescription: 'Furnidepot is the nation’s largest supplier of structural building products, value-added components and services to the professional market for new residential construction and repair and remodeling.',
    ogImage: "/logo_dark.png"
})
</script>

<style>
input[type="range"] {
    -webkit-appearance: none;
    height: 2px;
    border-radius: 5px;
    background-image: linear-gradient(30deg, #ffa572, #f68080);
    background-repeat: no-repeat;
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
    box-shadow: 0 0 2px 0 #555;
}

input[type=range]::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
}
</style>