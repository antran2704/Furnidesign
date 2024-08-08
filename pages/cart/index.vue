<template>
    <div class="container mx-auto px-5 py-[100px]">
        <h2 class="md:text-5xl sm:text-3xl text-2xl font-cormorantGaramond font-bold text-center mb-4">Cart</h2>

        <section>
            <div v-show="listCarts.length > 0">
                <ul class="flex flex-col items-start my-10 lg:gap-5 gap-10">
                    <li v-for="cart, index in listCarts" :key="index"
                        class="flex lg:flex-row flex-col items-center justify-between w-full lg:pb-5 p-5 border border-borderColor gap-5">
                        <CartItem :data="cart" :handle-save-count="handleSaveCount"
                            :handle-delete-cart-item="handleDeleteCartItem" :index="index" />
                    </li>
                </ul>
                <div class="flex lg:flex-nowrap flex-wrap items-start justify-between gap-5">
                    <div class="lg:w-4/12 w-full">
                        <button @click="handleClearCart" class="flex items-center justify-center sm:w-auto w-full text-lg font-medium text-white
                            whitespace-nowrap bg-dark opacity-80 hover:opacity-100 px-8 py-2 gap-2 border
                            border-gray-600 hover:border-dark transition-all ease-linear duration-100">
                            Clear cart
                        </button>
                    </div>
                    <div class="lg:w-6/12 w-full sm:mt-0 mt-8">
                        <h3 class="text-xl font-medium mb-5">Cart Totals</h3>
                        <table class="table-auto flex items-center">
                            <thead class="w-6/12 md:text-lg text-base">
                                <tr class="block w-full">
                                    <th class="block w-full text-start p-4 border border-borderColor">
                                        Total
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="w-6/12 md:text-lg text-base">
                                <tr class="block w-full">
                                    <td class="block w-full text-start p-4 border border-borderColor">
                                        ${{ store.totalPrice }}.00
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <NuxtLink to="/checkout"
                            class="flex items-center justify-center w-full text-lg font-medium text-white whitespace-nowrap bg-dark opacity-80 hover:opacity-100 px-8 py-3 mt-4 gap-2 border border-gray-600 hover:border-dark transition-all ease-linear duration-100">
                            Proceed to Checkout
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <div v-show="isLoading">
                <ul class="flex flex-col items-start my-10 lg:gap-5 gap-10">
                    <li v-for="(item, index) in [...new Array(6)]" :key="index"
                        class="flex lg:flex-row flex-col items-center justify-between w-full lg:pb-5 p-5 border border-borderColor gap-5">
                        <CartItemLoading />
                    </li>
                </ul>
            </div>
            <div v-show="isShowMessage" class="py-10">
                <h2 class="text-3xl font-medium">Shopping Cart</h2>
                <h3 class="text-xl font-medium mt-2">
                    Your cart is currently empty.
                </h3>
            </div>
        </section>
    </div>
</template>

<script setup>
import { useStore } from '~/store/index';
import CartItem from "~/components/CartItem";
import CartItemLoading from "~/components/CartItem/CartItemLoading.vue";

const store = useStore();
const listCarts = ref([]);
const isShowMessage = ref(false);
const isLoading = ref(true);

const handleSaveCount = (totalCount, index) => {
    const currentListCarts = [...listCarts.value];
    const oldData = currentListCarts[index];
    currentListCarts[index] = {
        ...oldData,
        quantity: totalCount,
    };
    listCarts.value = currentListCarts;
    localStorage.setItem("listCart", JSON.stringify(currentListCarts));
    store.getListCart();
}

const handleDeleteCartItem = (index) => {
    store.deleteProductInCart(index);
    store.getListCart();
    listCarts.value = store.listCarts;
    console.log(listCarts.value)
    if (listCarts.value.length === 0) {
        isShowMessage.value = true;
    }
}

const handleClearCart = () => {
    store.clearCart();
    listCarts.value = [];
    isShowMessage.value = true;
}

onMounted(() => {
    listCarts.value = store.listCarts;
    if (listCarts.value.length === 0) {
        isShowMessage.value = true;
    }
    isLoading.value = false;
})
</script>