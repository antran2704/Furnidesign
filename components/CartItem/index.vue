<template>
    <NuxtLink :to="data.slug" class="lg:w-1/12 sm:w-6/12 w-10/12">
        <img :src="data.thumbnail" alt="image cart" class="w-full" />
    </NuxtLink>
    <div class="lg:w-4/12 w-full lg:text-start text-center">
        <NuxtLink :to="data.slug" class="text-base font-medium hover:text-primary">
            {{ data.productName }}
        </NuxtLink>
    </div>
    <p class="lg:w-1/12 w-full text-base text-center">${{ data.price }}.00</p>
    <div class="lg:w-2/12 w-full">
        <ProductQuantity :current-count="data.quantity" :save-in-local="true" :handle-save-count="handleSaveCount"
            :index="index" />
    </div>
    <p class="lg:w-1/12 w-full text-base text-center">
        ${{ data.price * data.quantity }}.00
    </p>
    <div @click="() => handleDeleteCartItem(index)"
        class="flex items-center justify-center lg:w-1/12 w-full cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path
                d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
    </div>
</template>

<script setup>
import ProductQuantity from "~/components/ProductQuantity";

const props = defineProps({
    data: {
        type: Object
    },
    index: {
        type: Number
    },
    handleSaveCount: {
        type: Function
    },
    handleDeleteCartItem: {
        type: Function
    }
});
</script>