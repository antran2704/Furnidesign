<template>
    <nav id="nav" class="lg:max-h-[120px] z-[999]"
        :class="[isFixed || route.name != 'index' ? 'bg-[#ffffffbf] backdrop-blur fixed' : 'fixed bg-opacity-10 bg-white ', ' text-white z-50 w-full shadow-lg border-gray-200 dark:border-gray-600', 'px-5 py-3 transition-all ease-linear duration-200']">
        <div class=" container flex items-center justify-between mx-auto gap-10">
            <NuxtLink to="/" class="w-[80px] md:w-[90px]">
                <img src="/logo_dark.png" class="w-full" alt="Logo" title="Logo" width="100" height="100"/>
            </NuxtLink>

            <div @click="handleShowNav" class="lg:hidden block text-2xl text-black cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                </svg>

            </div>

            <ul class="lg:flex hidden items-center xl:gap-3 gap-1">
                <li class="navItem" v-for="item, index in narbarItems" :key="index">
                    <a :href="item.link"
                        class="flex items-center xl:text-lg text-base text-[#1E1E1E] hover:text-gray-800 xl:px-3 px-2 py-2 transition-all ease-linear duration-100 whitespace-nowrap cursor-pointer">
                        {{ item.Name }}
                        <svg v-if="item.Items && item.Items.length > 0" class="w-5 h-5 mt-1" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </a>

                    <ul v-if="item.Items && item.Items.length > 0"
                        class="megaMenu absolute left-0 flex items-start justify-between w-screen bg-white py-5 px-32 shadow-lg border-t border-gray-300">
                        <div v-for="item, index in item.Items" :key="index" class="flex flex-col items-start">
                            <a v-if="item.title" :href="(item.link)" class="text-lg text-dark font-medium px-3 py-1">{{
                                item.title }}</a>
                            <li v-for="item, index in item.data" :key="index">
                                <a :href="item.link"
                                    class="flex items-center text-base text-gray-500 dark:text-gray-400 hover:text-gray-800 px-3 py-1 transition-all ease-linear duration-100">
                                    {{ item.Name }}
                                </a>
                            </li>
                        </div>
                        <NuxtLink v-if="item.Items.length <= 2" to="#"
                            class="self-center w-4/12 p-8 text-left bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken"
                            style="background-image: url(https://d17axom7zrjq3q.cloudfront.net/20210413/8fa72d7f45634c1893a2f2c1e8b04e9b.jpg)">
                            <p class="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white">Preview the all
                            </p>
                            <button type="button"
                                class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-700">
                                Get started
                                <svg class="w-4 h-4 ml-1 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </NuxtLink>
                    </ul>
                </li>
                <li>
                    <NuxtLink to="/get-a-quote"
                        class="bg-dark flex items-center text-gray-100 px-3 shadow-xl rounded-md text-sm whitespace-nowrap py-2 gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                        Get A Quote
                    </NuxtLink>
                </li>
            </ul>
        </div>

        <!-- navbar on tablet && mobile -->
        <div :class="[{ 'show': isShowNav }]" class="navbarMobile fixed top-0 left-0 w-full h-screen">
            <div @click="handleShowNav" class="layoutClose absolute top-0 left-0 right-0 bottom-0 bg-slate-950 z-40"></div>
            <div class="navbarMobileContent absolute top-0 bottom-0 sm:w-1/2 w-3/4 bg-white z-50">
                <div class="flex items-center justify-between text-black text-2xl px-5 py-4 cursor-pointer">
                    <NuxtLink @click="handleShowNav" to="/" class="w-[80px]">
                        <img src="/logo_dark.png" class="w-full" alt="Logo" title="Logo" width="100" height="100" />
                    </NuxtLink>

                    <svg @click="handleShowNav" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <ul class="scroll max-h-[90vh] items-center pb-5 overflow-y-auto gap-3">
                    <li class="navItem px-5 opacity-70 hover:opacity-100 transition-all ease-linear duration-100" v-for="item, index in narbarItems" :key="index">
                        <div class="flex items-center justify-between">
                            <NuxtLink @click="handleShowNav" :to="item.link"
                                class="w-10/12 text-lg text-black font-medium py-2 transition-all ease-linear duration-100">
                                {{ item.Name }}
                            </NuxtLink>
                            <svg @click="handleShowCollap" v-if="item.Items && item.Items.length > 0"
                                class="navIcon w-5 h-5 text-black mt-1 cursor-pointer rotate-180 transition-all ease-linear duration-200"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>

                        <ul v-if="item.Items && item.Items.length > 0"
                            class="collapsible h-0 overflow-hidden transition-all ease-linear duration-200">
                            <div v-for="item, index in item.Items" :key="index" class="flex flex-col items-start px-2">
                                <p v-if="item.title" class="w-full text-base text-dark py-1 border-b border-gray-200">{{ item.title }}</p>
                                <li v-for="item, index in item.data" :key="index" class="w-full">
                                    <a :href="item.link"
                                        class="flex w-full items-center text-base text-gray-500 dark:text-gray-400 hover:text-gray-800 px-3 py-1 transition-all ease-linear duration-100">
                                        {{ item.Name }}
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </li>
                    <li class="px-5">
                        <NuxtLink to="/get-a-quote" class="bg-dark flex items-center px-3 rounded-md text-base py-2 mt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                            Get A Quote
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
const route = useRoute();
const isFixed = ref(false);
const isShowNav = ref(false);

const narbarItems = ref([
    {
        Name: "Products",
        link: "/product",
        Items: [
            {
                title: "Design & Project",
                link: "/project"
            },
            {
                title: "Free Home",
                link: "/",
            },
            {
                title: "Furniture",
                data: [
                    {
                        link: "/product?category=cabinets-countertops",
                        Name: "Cabinets & Countertops",
                    },
                    {
                        link: "/product?category=doors",
                        Name: "Doors",
                    },
                    {
                        link: "/product?category=drywall-accessories",
                        Name: "Drywall & Accessories",
                    },
                    {
                        link: "/product?category=home-decoration-supplies",
                        Name: "Home Decoration Supplies",
                    },
                ]
            },
            {
                title: "Us Home Hotel",
                link: "/",
            },
            {
                title: "Furni Customized Product",
                link: "/",
            },
        ]
    },
    {
        link: "/workflow",
        Name: "Work Flow",
    },
    {
        link: "/blog",
        Name: "Blog",
    },
    {
        link: "/contact",
        Name: "Contact Us"
    },
    {
        link: "/about-us",
        Name: "About Us"
    },
])

const handleShowNav = () => {
    const el = document.querySelector("html");
    isShowNav.value = !isShowNav.value;

    if (isShowNav.value) {
        el.style.overflowY = 'hidden';
    } else {
        el.style.overflowY = 'scroll';
    }
}

const handleShowCollap = (event) => {
    const el = event.target.closest(".navItem");
    const collapsibleEl = el.querySelector(".collapsible");
    const navIcon = el.querySelector(".navIcon");
    const currentHeight = collapsibleEl.clientHeight;

    if (currentHeight === 0) {
        collapsibleEl.style.height = collapsibleEl.scrollHeight + "px";
        navIcon.style.transform = "rotate(0deg)";
    } else {
        collapsibleEl.style.height = "0px";
        navIcon.style.transform = "rotate(180deg)";
    }
}

onMounted(() => {
    window.document.onscroll = () => {
        if (window.scrollY > 200 && route.name == 'index') {
            isFixed.value = true;
        }
        else {
            isFixed.value = false;
        }
    }
});

</script>

<style scoped>
.megaMenu {
    top: 120px;
    opacity: 0;
    pointer-events: none;
    transition: all linear 0.2s;
}

.megaMenu::after {
    content: "";
    position: absolute;
    top: -40px;
    left: 0;
    width: 100%;
    height: 40px;
    background-color: transparent;
}

.navItem:hover .megaMenu {
    top: 100px;
    opacity: 1;
    pointer-events: inherit;
}

/* navbar mobile */
.navbarMobile {
    pointer-events: none;
}

.layoutClose {
    opacity: 0;
    pointer-events: none;
    transition: all linear 0.2s;
}

.navbarMobileContent {
    right: -100%;
    transition: all linear 0.3s;
}

.navbarMobile.show {
    pointer-events: inherit;
}

.navbarMobile.show .navbarMobileContent {
    right: 0;
}

.navbarMobile.show .layoutClose {
    opacity: 0.6;
    pointer-events: inherit;
}
</style>