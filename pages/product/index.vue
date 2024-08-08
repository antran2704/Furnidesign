<template>
    <div>
        <ProductLayout>
            <div>
                <div v-if="store.filterLoading" class="grid md:grid-cols-4 grid-cols-2 gap-5">
                    <LoadingSkelatonItem v-for="(item, index) in [...new Array(16)]" :key="index" />
                </div>


                <div v-else class="grid md:grid-cols-4 grid-cols-2 gap-5">
                    <div v-for="product in store.listItemsFilter.slice((route.query.page ? Number(route.query.page) - 1 : 0) * 16, (route.query.page ? Number(route.query.page) : 1) * 16)"
                        :key="product.id"
                        class="p-4 w-full hover:shadow-lg border-2 rounded-md transition-all ease-linear duration-100">
                        <NuxtLink :to="`/product/${product.link}`">
                            <div class="h-54 rounded w-full object-cover object-center mb-6">
                                <Image classProps="w-full h-full"
                                    :src="product.picture" :alt="product.name" />
                            </div>
                            <h2 class="text-md text-gray-900 font-medium title-font mb-4 truncate">{{ product.name }}</h2>
                            <ul class="flex flex-wrap gap-2">
                                <li v-for="style in product.styles" :key="style"
                                    class="text-sm text-[#282828] font-medium capitalize bg-[#f4f3f0] px-4 py-1 rounded-2xl">
                                    {{ style.name }}</li>
                            </ul>
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <Pagination v-if="store.listItemsFilter.length > 16" :totalItems="store.listItemsFilter.length || 0"
                :currentPage="Number(route.params.page) || 1" :pageSize="16" url="/product/page" />
        </ProductLayout>
    </div>
</template>

<script setup>
import ProductLayout from "~/layouts/productLayout";
import LoadingSkelatonItem from "~/components/LoadingSkelatonItem";
import Pagination from "~/components/Pagination";
import { useProductStore } from "~/store/product";

const config = useRuntimeConfig();
const route = useRoute();
const store = useProductStore();

const handleGetProduct = async () => {
    await store.getItemInFilter(`${config.public.apiEndpoint}/product`);
}

onMounted(() => {
    handleGetProduct();
})

useSeoMeta({
    title: 'Furni Design Products',
    ogTitle: 'Furni Design Products',
    description: 'Furnidepot is the nation’s largest supplier of structural building products, value-added components and services to the professional market for new residential construction and repair and remodeling.',
    ogDescription: 'Furnidepot is the nation’s largest supplier of structural building products, value-added components and services to the professional market for new residential construction and repair and remodeling.',
    ogImage: "/logo_dark.png"
})
</script>