<template>
    <div class="container mx-auto px-5 pt-[100px]">
        <div class="flex lg:flex-nowrap flex-wrap items-start justify-between pb-10 gap-10 pt-10">
            <div class="lg:w-4/12 w-full">
                <Image classProps="w-full mb-4" :src="product.picture" :alt="product.name" />
                <div v-if="product.gallery?.length > 0" ref="container"
                    class="scroll flex flex-nowrap items-center md:h-[120px] h-[100px] gap-2 overflow-auto">
                    <a v-for="(image, index) in product.gallery" :key="image" @click="() => {
                        showFancyBox = !showFancyBox;
                        currentIndexImage = index;
                    }" class="w-1/4 min-w-[25%] h-full border-2 rounded-lg hover:shadow-lg cursor-pointer">
                        <Image v-if="index <= 4" classProps="w-full h-full object-cover" :src="product.picture"
                            :alt="product.name" />
                        <Image v-else classProps="w-full h-full object-cover" :src="image"
                            :alt="product.name" />
                    </a>
                </div>
            </div>
            <div class="lg:w-7/12 w-full">
                <div class="pb-5 mb-5 border-b border-borderColor">
                    <h3 class="text-2xl font-medium">{{ product.name }}</h3>
                    <div class="flex flex-wrap items-end my-3 gap-3">

                    </div>
                    <p class="text-base text-[#071c1f]">
                        {{ product.overview }}
                    </p>
                </div>
                <div class="pb-5 mb-5 border-b border-borderColor">
                    <div class="flex items-center text-sm mb-5">
                        <span class="text-base font-medium min-w-[100px]">
                            Stock:
                        </span>

                        <p v-if="product.inStock === 1">In stock</p>
                        <p v-else>Out of stock</p>
                    </div>
                    <div class="flex items-center text-sm mb-5">
                        <span class="text-base font-medium min-w-[100px]">
                            Sold:
                        </span>
                        <p>100</p>
                    </div>
                    <div class="flex items-center text-sm mb-5">
                        <span class="text-base font-medium min-w-[100px]">
                            Brand:
                        </span>
                        <p>{{ product.brand || 'updating' }}</p>
                    </div>
                    <div class="flex items-center text-sm mb-5">
                        <span class="text-base font-medium min-w-[100px]">
                            Quantity:
                        </span>
                        <p>99</p>
                    </div>
                    <div class="flex items-center text-sm mb-5">
                        <span class="text-base font-medium min-w-[100px]">
                            Price:
                        </span>

                        <p class="text-md font-medium text-red-700">
                            Contact
                        </p>
                    </div>
                </div>

                <!-- quantity -->
                <div class="pb-5 mb-5 border-b border-borderColor">
                    <div class="flex flex-wrap items-center gap-3">
                        <div class="lg:w-3/12 w-6/12">
                            <ProductQuantity :handle-set-count="handleSetCount" :current-count="currentCount" />
                        </div>
                        <div class="lg:w-8/12 sm:flex-nowrap flex-wrap w-full flex items-center gap-3">
                            <button @click="hanldeAddCart" class="sm:w-6/12 w-full h-14">
                                <p
                                    class="flex items-center justify-center w-full h-full text-base font-medium text-white bg-black px-4 opacity-80 hover:opacity-100 gap-2 border border-primary hover:border-dark transition-all ease-linear duration-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="w-8 h-8">
                                        <path
                                            d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                                    </svg>
                                    Add to cart
                                </p>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col gap-5">
                    <DetailProduct class="text-lg bg-[#e6e1de]" v-show="product.description !== null" title="DESCRIPTION">
                        <div class="text-base px-5 py-2" v-html="product.description">
                        </div>
                    </DetailProduct>
                    <DetailProduct class="text-lg bg-[#e6e1de]" title="DETAILS">
                        <p class="text-base px-5 py-2">
                            <strong>Dimensions :</strong>
                            {{ product.dimensions || 'updating' }}
                        </p>
                        <p class="text-base px-5 py-2">
                            <strong>Color :</strong>
                            {{ product.color || 'updating' }}
                        </p>
                        <p class="text-base px-5 py-2">
                            <strong>Materials :</strong>
                            {{ product.materials || 'updating' }}
                        </p>
                    </DetailProduct>
                    <DetailProduct class="text-lg bg-[#e6e1de]" title="SHIPPING & RETURNS">
                        <div class="flex flex-col text-base px-5 py-2 gap-1">
                            <strong class="block">Shipping</strong>
                            <p>
                                We are also delighted to offer free shipping wherever our brand partners typically do.
                                Besides
                                that, we offer 3 shipping types:
                            </p>
                            <ul class="list-disc px-8">
                                <li>
                                    10% of the item's cost for small parcel items
                                </li>
                                <li>
                                    13% of the item's cost for freight deliveries
                                </li>
                                <li>
                                    20% of the item's cost for white glove deliveries
                                </li>
                            </ul>
                        </div>
                        <div class="flex flex-col text-base px-5 py-2 gap-1">
                            <strong class="block">Return Policy</strong>
                            <p>
                                Collov allows returns within the following guidelines:
                            </p>
                            <ul class="list-disc px-8">
                                <li>
                                    You have 30 days to return after your item has shipped.
                                </li>
                                <li>
                                    You may cancel your order within 24hrs. A 3% cancellation fee will apply. We are unable
                                    to
                                    cancel orders after 24hrs.
                                </li>
                                <li>
                                    Return shipping fees will apply.
                                </li>
                                <li>
                                    A 25% restocking fee will apply.
                                </li>
                                <li>
                                    Damages must be reported within 24 hours.
                                </li>
                                <li>
                                    For products that need assembly and White Glove deliveries, please note these items are
                                    subject to review by the vendor and may not be allowed for returns.
                                </li>
                                <li>
                                    Items must be returned in their original packaging, including white glove deliveries.
                                </li>
                                <li>
                                    Made-to-order, Clearance, and select full-priced items are not eligible for return.
                                </li>

                            </ul>
                        </div>
                    </DetailProduct>
                </div>
            </div>
        </div>

        <!-- show popup when add to cart -->
        <Popup :show="showModal" :onClick="handleShowModal">
            <div
                class="lg:min-w-[500px] lg:max-w-[600px] lg:w-auto w-full bg-white py-6 px-8  shadow-sm rounded-md transition-all ease-linear duration-300 ">
                <div @click="handleShowModal" class="w-fit ml-auto cursor-pointer mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" class="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div class="flex md:flex-row flex-col items-center gap-5">
                    <img width="100" height="100" :title="product.name" :data-src="product.picture" :alt="product.name"
                        class="w-[100px] h-100px" v-lazy-load />
                    <div class="w-full">
                        <h2 class="w-full text-lg md:text-start text-center font-medium mb-2">
                            {{ product.name }}
                        </h2>
                        <p class="flex items-center text-base gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="w-6 h-6 text-[#28a745]">
                                <path fillRule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                    clipRule="evenodd" />
                            </svg>
                            Successfully added to your Cart
                        </p>
                        <div class="flex items-center mt-5 gap-5">
                            <NuxtLink to="/cart"
                                class="flex md:flex-none flex-1 items-center justify-center text-sm font-medium text-black hover:text-white bg-white hover:bg-dark px-4 py-2 gap-2 border border-primary hover:border-dark transition-all ease-linear duration-100">
                                View cart
                            </NuxtLink>
                            <NuxtLink to="/checkout"
                                class="flex md:flex-none flex-1 items-center justify-center text-sm font-medium text-white bg-dark px-4 py-2 transition-all ease-linear border border-transparent duration-100 gap-2">
                                Check out
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </Popup>

        <FancyBox v-if="showFancyBox" :isShow="showFancyBox" :gallery="product.gallery"
            :onClose="() => showFancyBox = !showFancyBox" :currentIndex="currentIndexImage" />

        <OtherProducts :url="`${config.public.apiEndpoint}/product`" />
    </div>
</template>

<script setup>
import { useStore } from '~/store/index';
import FancyBox from "~/components/FancyBox";
import Popup from "~/components/Popup";
import DetailProduct from "~/components/DetailProduct";
import ProductQuantity from "~/components/ProductQuantity";
import OtherProducts from "~/components/OtherProducts";

const route = useRoute();
const store = useStore();

const container = ref(null);
const currentCount = ref(1);
const currentIndexImage = ref(0);

const showModal = ref(false);
const showFancyBox = ref(false);

const config = useRuntimeConfig();
const product = await $fetch(`${config.public.apiEndpoint}/product/getbylink/${route.params.slug}`, {cache: "force-cache"});

const hanldeAddCart = () => {
    let exitIndex = 0;
    const dataProduct = {
        productId: product.id,
        productName: product.name,
        slug: route.path,
        quantity: currentCount.value,
        price: product.price,
        thumbnail: product.picture,
    };
    const listCarted = JSON.parse(localStorage.getItem("listCart"));

    if (listCarted) {
        const exitItem = listCarted.find((item, index) => {
            if (item.productName === dataProduct.productName && item.slug === dataProduct.slug) {
                exitIndex = index;
                return item;
            }
        });

        if (exitItem) {
            listCarted[exitIndex] = {
                ...exitItem,
                quantity: exitItem.quantity + dataProduct.quantity,
            };
            localStorage.setItem("listCart", JSON.stringify(listCarted));
        } else {
            listCarted.push(dataProduct);
            localStorage.setItem("listCart", JSON.stringify(listCarted));
        }
    } else {
        localStorage.setItem("listCart", JSON.stringify([dataProduct]));
    }

    store.getListCart();
    showModal.value = true;
};

const handleShowModal = () => {
    showModal.value = !showModal.value;
}

const handleSetCount = (value) => {
    currentCount.value = value;
}

useSeoMeta({
    title: product.name,
    ogTitle: product.name,
    description: product.description,
    ogDescription: product.description,
    ogImage: product.picture
})
</script>