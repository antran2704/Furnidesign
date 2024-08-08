<template>
    <div class="container px-5 mx-auto">
        <div class="pt-[100px]">
            <h2 class="md:text-4xl sm:text-3xl text-2xl font-cormorantGaramond font-bold text-center mb-4 mt-6">Products</h2>
            <p class="text-base text-center text-[#44484c]">
                FurniDesign - Find Product
            </p>
        </div>

        <div :class="{ 'show': isShowSelect }" class="categoryMobile flex items-start justify-between pt-8 pb-10 gap-10">
            <!-- layout close select category -->
            <div @click="handleShowSelect"
                class="categoryLayoutClose fixed top-0 left-0 right-0 bottom-0 bg-slate-950 z-[999]"></div>
            <div
                class="lg:w-3/12 lg:flex hidden lg:relative fixed top-0 bottom-0 left-0 flex-col bg-white  capitalize px-5 gap-4 z-[100]">
                <!-- list categories -->
                <div class="flex flex-col items-start justify-between gap-4">
                    <div class="w-full">
                        <p class="block text-lg text-[#000000a6] font-medium pb-1 mb-4 border-[#282828] border-b uppercase">
                            Categories
                        </p>
                        <ul class="flex flex-col px-3 gap-2">
                            <li v-for="category in listCategories" :key="category.Id"
                                class="flex items-center text-md text-[#25282b] cursor-pointer gap-2">
                                <input @change="(e) => handleChangeFilter(e)"
                                    :checked="categories.includes(category.link) ? true : false" type="checkbox"
                                    name="categories" :value="category.link">
                                {{ category.name }}
                            </li>
                        </ul>
                    </div>

                    <div class="w-full">
                        <p class="block text-lg text-[#000000a6] font-medium pb-1 mb-4 border-[#282828] border-b uppercase">
                            Price
                        </p>
                        <ul class="flex flex-col px-3 gap-2">
                            <li v-for="category in listPrice" :key="category.id"
                                class="flex items-center text-md text-[#25282b] cursor-pointer gap-2">
                                <input @change="(e) => handleChangeFilter(e)" type="checkbox"
                                    :checked="price.includes(String(category.value)) ? true : false" :value="category.value"
                                    name="budget">
                                {{ category.name }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- select category on mobile && tablet -->
            <div
                class="categoryMobileContent sm:w-1/2 w-4/5 fixed top-0 bottom-0 left-0 flex-col bg-white shadow-xl capitalize px-5 pt-2 pb-5 gap-4 z-[999]">
                <div @click="handleShowSelect" class="flex items-center justify-end text-black text-2xl m-5 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd"
                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <!-- list categories -->
                <div class="scroll flex flex-col max-h-[80vh] items-start justify-between gap-4 overflow-auto">
                    <div class="w-full">
                        <p class="block text-lg text-[#000000a6] font-medium pb-1 mb-4 border-[#282828] border-b uppercase">
                            Categories
                        </p>
                        <ul class="flex flex-col px-3 gap-2">
                            <li v-for="category in listCategories" :key="category.id"
                                class="flex items-center text-lg text-[#25282b] cursor-pointer gap-2">
                                <input @change="(e) => handleChangeFilter(e)" type="checkbox"
                                    :checked="categories.includes(category.link) ? true : false" name="categories"
                                    :value="category.link">
                                {{ category.name }}
                            </li>
                        </ul>
                    </div>

                    <div class="w-full">
                        <p class="block text-lg text-[#000000a6] font-medium pb-1 mb-4 border-[#282828] border-b uppercase">
                            Price
                        </p>
                        <ul class="flex flex-col px-3 gap-2">
                            <li v-for="category in listPrice" :key="category.id"
                                class="flex items-center text-lg text-[#25282b] cursor-pointer gap-2">
                                <input @change="(e) => handleChangeFilter(e)" type="checkbox"
                                    :checked="price.includes(String(category.value)) ? true : false" :value="category.value"
                                    name="price">
                                {{ category.name }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- content left -->
            <div class="lg:w-9/12 w-full">
                <div class="flex items-center lg:mb-0 mb-4 gap-10">
                    <span class="lg:hidden block cursor-pointer">
                        <svg @click="handleShowSelect" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            fill="currentColor" class="w-8 h-8">
                            <path fillRule="evenodd"
                                d="M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z"
                                clipRule="evenodd" />
                        </svg>
                    </span>
                </div>
                <slot />

                <h3 v-show="showMessage && store.listItemsFilter.length === 0" class="text-md font-medium text-center">{{
                    showMessage }}</h3>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useProductStore } from "~/store/product";

const store = useProductStore();
const config = useRuntimeConfig();

const route = useRoute();
const router = useRouter();

const listPrice = [
    {
        name: "<$2,500",
        value: 1
    },
    {
        name: "$2,500 - $5,000",
        value: 2
    },
    {
        name: "$5,000 - $10,000",
        value: 3
    },
    {
        name: "$10,000 - $20,000",
        value: 4
    },
    {
        name: ">$20,000",
        value: 5
    },
]

const { categories, price } = store.filters;

const isShowSelect = ref(false);
const showMessage = ref(null);

const listCategories = await $fetch(`${config.public.apiEndpoint}/category`, {cache: "force-cache"});

const handleChangeFilter = async (e) => {
    const filters = store.filters;
    const path = route.fullPath;
    const { category } = route.query;
    const name = e.target.name;
    const value = e.target.value;

    if (!filters[name].includes(value)) {
        store.addFilter(name, value);

        if (category) {
            router.push(path + `&category=${value}`)
        } else {
            router.push(path + `?category=${value}`)
        }

    } else {
        store.deleteFilter(name, value);

        if (typeof category === "string") {
            router.push(route.path);
        } else {
            let oldPath = route.path;

            category.reduce((init, item) => {
                if (item !== value) {
                    init = !init.includes("?") ? init + `?category=${item}` : init + `&category=${item}`;
                    router.push(init);
                    return init;
                }
                return init;
            }, oldPath);
        }
    }

    await store.getItemInFilter(`${config.public.apiEndpoint}/product`);

    if (store.listItemsFilter.length === 0) {
        showMessage.value = `No item in category`;
    }
}
const handleShowSelect = () => {
    isShowSelect.value = !isShowSelect.value;
}

onMounted(async () => {
    const { category } = route.query;
    if (category) {
        if (typeof category === "string") {
            store.addFilter("categories", category);
        } else {
            category.map((item) => {
                store.addFilter("categories", item);
            });
        }
        await store.getItemInFilter(`${config.public.apiEndpoint}/product`);
    }

    if (store.listItemsFilter.length === 0) {
        showMessage.value = `No item in category`;
    }
})
</script>

<style>
.categoryLayoutClose {
    opacity: 0;
    pointer-events: none;
    transition: all linear 0.2s;
}

.categoryMobileContent {
    left: -100%;
    transition: all linear 0.3s;
}

.categoryMobile.show .categoryMobileContent {
    left: 0;
}

.categoryMobile.show .categoryLayoutClose {
    opacity: 0.6;
    pointer-events: inherit;
}
</style>