<script setup>
const config = useRuntimeConfig();
const contact = ref({
  name: "",
  phone: "",
  email: "",
  subject: "",
  note: ""
})

const sendContact = async () => {
  // Make the POST request to the API endpoint
  await $fetch(`${config.public.apiEndpoint}/contact`, {
    method: 'POST',
    body: JSON.stringify(contact.value)
  })
    .then(data => {
      alert("send contact success !")
      contact.value = {
        name: "",
        phone: "",
        email: "",
        subject: "",
        note: ""
      }
    })
    .catch(error => {
      console.error(error);
    });

}

</script>

<template>
  <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex lg:flex-nowrap flex-wrap items-start justify-between mt-10 gap-10">
        <div class="lg:w-5/12 w-full">
          <h2 class="md:text-4xl sm:text-3xl text-2xl font-cormorantGaramond font-bold text-dark mb-5">Contact With Us</h2>
          <p class="md:text-lg text-sm text-justify">
            It's very easy to get in touch with us. Just use the contact form or pay us a visit for a coffee at the
            office. Dynamically innovate competitive technology after an expanded array of leadership.
          </p>

          <ul class="mt-5">
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 min-w-[20px]">
                <path
                  d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path
                  d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              <span class="block lg:text-lg text-base font-bold">Office</span>
            </div>
            <li class="lg:text-lg text-sm mt-2">
              <span>US:</span>
              6883 Mission Gorge Rd, San Diego, CA 92120
            </li>
            <li class="lg:text-lg text-sm mt-2">
              <span>VN 1: </span>
              334/20 Nguyen Van Nghi, Ward 7, District Go Vap, Ho Chi Minh City
            </li>
            <li class="lg:text-lg text-sm mt-2">
              <span>VN 2: </span>
              558/16 Binh Quoi, Ward 28, District Binh Thanh, Ho Chi Minh City
            </li>
            <li class="lg:text-lg text-sm mt-2">
              <span>VN 3: </span>
              Street 3, Bao Vinh, Long Khanh City, Đong Nai Province.
            </li>
          </ul>

          <ul class="mt-5">
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path
                  d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <span class="block lg:text-lg text-base font-bold">Email</span>
            </div>
            <li class="lg:text-lg text-sm mt-2">
              support@furnidesign.co
            </li>
          </ul>

          <ul class="mt-5">
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                <path fill-rule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clip-rule="evenodd" />
              </svg>
              <span class="block lg:text-lg text-base font-bold">Phone</span>
            </div>
            <li class="lg:text-lg text-sm mt-2">
              <span>US:</span>
              (619) 853-2039
            </li>
          </ul>
        </div>
        <form @submit.prevent="sendContact"
          class="lg:w-6/12 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Contact</h2>

          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input v-model="contact.name" required type="text" id="name" name="name"
              class="w-full bg-white rounded border border-gray-300 focus:border-gray-600 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input v-model="contact.email" required type="email" id="email" name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-gray-600 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
            <textarea v-model="contact.note" required id="message" name="message"
              class="w-full bg-white rounded border border-gray-300 focus:border-gray-600 focus:ring-2 focus:ring-gray-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button type="submit"
            class="text-white bg-dark border-0 py-2 px-6 focus:outline-none hover:bg-dark rounded text-lg">Send</button>

        </form>
      </div>
    </div>
</section></template>