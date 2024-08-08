<template>
    <div class="container mx-auto px-5 py-[100px]">
        <div class="flex lg:flex-row flex-col-reverse items-start justify-between mt-10 gap-10">
            <div class="lg:w-6/12 w-full">
                <h3 class="lg:text-3xl md:text-2xl text-lg font-cormorantGaramond font-bold mb-3">
                    Contact
                </h3>
                <form @submit.prevent="handleSubmit" class="flex flex-col gap-3">
                    <div class="flex lg:flex-nowrap flex-wrap w-full items-center justify-between gap-3">
                        <input type="email" name="email" :value="inforForm.email" @input="(e) => handleChangeInfor(e)"
                            placeholder="Email..." class="lg:w-8/12 w-full h-12 px-4 border border-[#e5e5e5] rounded-md"
                            required />
                        <input type="text" name="phoneNumber" :value="inforForm.phoneNumber"
                            @input="(e) => handleChangeInfor(e)" placeholder="Phone number..."
                            class="lg:w-4/12 w-full h-12 px-4 border border-[#e5e5e5] rounded-md" required />
                    </div>
                    <div class="flex lg:flex-nowrap flex-wrap w-full items-center justify-between gap-3">
                        <input type="text" name="firstName" :value="inforForm.firstName"
                            @input="(e) => handleChangeInfor(e)" placeholder="First name..."
                            class="lg:w-6/12 w-full h-12 px-4 border border-[#e5e5e5] rounded-md" required />
                        <input type="text" name="lastName" :value="inforForm.lastName" @input="(e) => handleChangeInfor(e)"
                            placeholder="Last name..." class="lg:w-6/12 w-full h-12 px-4 border border-[#e5e5e5] rounded-md"
                            required />
                    </div>
                    <div class="flex lg:flex-nowrap flex-wrap w-full items-center justify-between gap-3">
                        <input type="text" name="address" :value="inforForm.address" @input="(e) => handleChangeInfor(e)"
                            placeholder="Address..." class="w-full h-12 px-4 border border-[#e5e5e5] rounded-md" required />
                    </div>
                    <div class="flex items-center w-full mt-3 cursor-pointer gap-2">
                        <input :checked="isSaveInfor" @input="handleSaveInfor" type="checkbox" id="checkSaveInfor" />
                        <label class="cursor-pointer" htmlFor="checkSaveInfor">
                            Save this information for next time
                        </label>
                    </div>

                    <div class="flex lg:flex-nowrap flex-wrap items-center w-full mt-4 sm:gap-5 gap-2">
                        <NuxtLink to="/cart"
                            class="flex items-center justify-center sm:w-auto w-full text-lg font-medium whitespace-nowrap hover:text-white bg-white hover:bg-dark px-8 py-2 gap-2 border border-primary hover:border-dark transition-all ease-linear duration-100">
                            Return your cart
                        </NuxtLink>
                        <button type="submit"
                            class="flex items-center justify-center sm:w-auto w-full text-lg font-medium text-white whitespace-nowrap bg-dark px-8 py-2 transition-all ease-linear border border-transparent duration-100 gap-2">
                            Continute payment
                        </button>
                    </div>
                </form>
            </div>
            <div class="lg:w-5/12 w-full">
                <div v-if="listCarts.length === 0 && isLoading">
                    <ul class="scroll flex flex-col lg:max-h-[600px] max-h-[400px] pt-5 overflow-auto gap-6">
                        <li v-for="(item, index) in [...new Array(4)]" :key="index"
                            class="flex items-center justify-between w-full pb-5 border-b border-borderColor gap-4">
                            <div class="w-1/2 flex items-center gap-5">
                                <div class="skelaton w-[60px] h-[60px] border rounded-xl">
                                </div>
                                <div class="w-8/12">
                                    <h3 class="skelaton w-2/4 h-5 rounded-sm">
                                    </h3>
                                    <p class="skelaton w-1/4 h-5 mt-2 rounded-sm"></p>
                                </div>
                            </div>
                            <p class="skelaton w-1/4 h-5 rounded-sm">
                            </p>
                        </li>
                    </ul>
                </div>
                <div v-if="listCarts.length > 0 && !isLoading">
                    <ul class="scroll flex flex-col lg:max-h-[600px] max-h-[400px] pt-5 overflow-auto gap-6">
                        <li v-for="(item, index) in listCarts" :key="index"
                            class="flex items-center justify-between w-full pb-5 border-b border-borderColor gap-4">
                            <div class="flex items-center gap-5">
                                <NuxtLink :to="item.slug" class="relative">
                                    <span
                                        class="flex items-center justify-center absolute -top-2 -right-2 md:w-5 md:h-5 w-4 h-4 text-xs text-white bg-dark rounded-full z-10">
                                        {{ item.quantity }}
                                    </span>
                                    <img :data-src="item.thumbnail" :alt="item.productName"
                                        class="w-[60px] h-[60px] border rounded-xl" v-lazy-load />
                                </NuxtLink>
                                <NuxtLink :to="item.slug" class="w-8/12">
                                    <h3 class="sm:text-base text-sm font-medium my-0">
                                        {{ item.productName }}
                                    </h3>
                                    <p class="sm:text-sm text-xs">${{ item.price }}.00</p>
                                </NuxtLink>
                            </div>
                            <p class="sm:text-base text-sm font-medium">
                                ${{ item.price * item.quantity }}.00
                            </p>
                        </li>
                    </ul>
                    <div class="flex items-center justify-between mt-5 gap-5">
                        <p class="text-base font-medium">Total:</p>
                        <p class="text-base font-medium">${{ totalPrice }}.00</p>
                    </div>
                </div>
                <div v-if="isShowMessage && !isLoading">
                    <h3 class="text-2xl font-medium text-center">
                        No Item
                    </h3>
                </div>
            </div>
        </div>

        <!-- show popup when add to cart -->
        <Popup :show="showModal" :onClick="handleShowModal">
            <div
                class="lg:min-w-[500px] lg:max-w-[600px] lg:w-auto w-full bg-white py-6 px-8 shadow-sm rounded-md transition-all ease-linear duration-300 ">
                <div @click="handleShowModal" class="w-fit ml-auto cursor-pointer mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" class="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <p class="flex items-center text-base gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="w-8 h-8 text-[#28a745]">
                        <path fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                            clipRule="evenodd" />
                    </svg>
                    Successfully send your infor
                </p>
            </div>

        </Popup>
    </div>
</template>

<script setup>
import { useStore } from '~/store/index';
import Popup from "~/components/Popup";

const config = useRuntimeConfig();

const store = useStore();

const initInfor = {
    email: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
    address: ""
}

const listCarts = ref([]);
const inforForm = ref(initInfor);
const totalPrice = ref(0);
const isSaveInfor = ref(false);
const isShowMessage = ref(false);
const isLoading = ref(true);
const showModal = ref(false);

const handleSubmit = async () => {
    let products = [];

    listCarts.value.map(item => products.push(
        {
            productId: item.productId,
            productName: item.productName,
            price: item.price,
            quantity: item.quantity
        }
    ))

    const data = {
        customerName: inforForm.value.firstName + inforForm.value.lastName,
        customerPhone: inforForm.value.phoneNumber,
        customerEmail: inforForm.value.email,
        address: inforForm.value.address,
        products: [...products]
    }
    try {
        const payload = await $fetch(`${config.public.apiEndpoint}/order`, {
            method: "POST",
            body: data
        })
        showModal.value = true;
    } catch (error) {
        console.log(error)
    }
}

const handleShowModal = () => {
    showModal.value = !showModal.value;
}

const handleChangeInfor = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    inforForm.value = { ...inforForm.value, [name]: value };
}

const handleSaveInfor = () => {
    if (!isSaveInfor.value) {
        localStorage.setItem("inforCus", JSON.stringify(inforForm.value));
    } else {
        localStorage.setItem("inforCus", JSON.stringify(null));
    }

    isSaveInfor.value = !isSaveInfor.value;
}

onMounted(() => {
    const inforCusLocal = JSON.parse(localStorage.getItem("inforCus"));

    if (inforCusLocal) {
        isSaveInfor.value = true;
        inforForm.value = inforCusLocal;
    }

    listCarts.value = store.listCarts;
    totalPrice.value = store.totalPrice;
    if (listCarts.value.length === 0) {
        isShowMessage.value = true;
    }

    isLoading.value = false;
})
</script>