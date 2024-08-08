<template>
    <div>

        <CategoryLayout :title="title" :description="description">
        <div class="grid md:grid-cols-2 grid-cols-1 gap-5">
            <div v-if="store.filterLoading" v-for="(item, index) in [...new Array(16)]" :key="index">
                <LoadingSkelatonItem />
            </div>


            <div v-else v-for="product in projects" :key="product.id"
                class="p-4 w-full hover:shadow-lg border-2 rounded-md transition-all ease-linear duration-100">
                <NuxtLink :to="`/project/${product.link}`">
                    <img width="100" height="100" class="h-64 rounded w-full object-cover object-center mb-6" :data-src="product.picture" alt="content" v-lazy-load>
                    <h2 class="text-xl text-gray-900 font-medium title-font mb-4 truncate">{{ product.name }}</h2>
                    <ul class="flex flex-wrap gap-2">
                        <li v-for="style in product.styles" :key="style"  class="text-sm text-[#282828] font-medium capitalize bg-[#f4f3f0] px-4 py-1 rounded-2xl">{{style.name }}</li>
                    </ul>
                </NuxtLink>
            </div>
        </div>
        <h3 v-show="showMessage" class="text-xl font-medium text-center">{{ showMessage }}</h3>

        <Pagination v-show="store.listItemsFilter.length > 0" :totalItems="store.listItemsFilter.length || 0" :currentPage="Number(route.query.page) || 1" :pageSize="16" :url="route.path"/>
    </CategoryLayout>
    </div>

</template>

<script setup>
const title=ref('US Home Hotel')
const description=ref(`Start designing your dream home, one designer package and one decoration at a time. At Furni Design, we’ve got interior designs and furniture, all to mix and match to your distinct taste and budget. Whether your ideal
                    designs are bold and eccentric, cozy and comfortable, or all-out glam, our luxury furnishings are for
                everybody, all in one place. Fill your home with love, and let us help with the rest.`)
import CategoryLayout from "~/layouts/categoryLayout";
import LoadingSkelatonItem from "~/components/LoadingSkelatonItem";
import Pagination from "~/components/Pagination";
import { useStore } from "~/store";

const config = useRuntimeConfig();
const route = useRoute();
const store = useStore();
const projects = computed(()=>{
const projectList =  store.listItemsFilter.filter(obj => obj.rooms.some(room => room.link === "us-home-hotel"));
return projectList.slice((route.query.page ? Number(route.query.page) - 1 : 0) * 16, (route.query.page ? Number(route.query.page) : 1) * 16)
});
const showMessage = ref(null);

const handleGetProduct = async () => {
    await store.getItemInFilter(`${config.public.apiEndpoint}/project`);

    if (store.listItemsFilter.length === 0) {
        showMessage.value = `No item in category ${route.params.slug}`;
    }
}

onMounted(() => {
    handleGetProduct();
})
</script>