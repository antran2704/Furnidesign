<script setup>
const config = useRuntimeConfig();
const getAQuote = ref({
  FullName: "",
  PhoneNumber: "",
  Company: "",
  Describes: "",
  Note: "",
});

const  handleFileUpload = (event)=> {
      const files = event.target.files;
      // Update the Attachments property with the selected files
      getAQuote.value.Attachments = Array.from(files);
    }
const sendGetAQuote =async ()=>{

const formData = new FormData();
  // Iterate over the properties of the `getAQuote` object and append them to the `formData`
  for (const key in getAQuote.value) {
  formData.append(key, getAQuote.value[key]);
}
// Make the POST request to the API endpoint
await $fetch(`${config.public.apiEndpoint}/get-a-quote`, {
  method: 'POST',
  body: formData
})
  .then(data => {
    alert("send get a quote success !")
    getAQuote.value={
  FullName: "",
  PhoneNumber: "",
  Company: "",
  Describes: "",
  Note: "",
}
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });

}

</script>

<template>
  <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1
          class="md:text-4xl sm:text-3xl text-2xl font-cormorantGaramond font-bold mb-4 mt-4 text-gray-900"
        >
          Get A Quote
        </h1>
        <p class=" mx-auto leading-relaxed text-base">
          Please complete this form, and we'll get back to you shortly.
        </p>
      </div>
      <form @submit.prevent="sendGetAQuote" class="lg:w-1/2 md:w-2/3 mx-auto">
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-full">
            <h2 class="text-xl font-medium">Contact Information</h2>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <label  class="leading-7 text-sm text-gray-600">Full Name</label>
              <input
              required
              v-model="getAQuote.FullName"
                type="text"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-600 focus:bg-white focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="" class="leading-7 text-sm text-gray-600"
                >Phone Number</label
              >
              <input
              required
               v-model="getAQuote.PhoneNumber"
                type="text"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-600 focus:bg-white focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="email" class="leading-7 text-sm text-gray-600"
                >Email</label
              >
              <input
              required
              v-model="getAQuote.Email"
                type="email"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-600 focus:bg-white focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <label for="email" class="leading-7 text-sm text-gray-600"
                >Message</label
              >
              <textarea v-model="getAQuote.note" required id="message" name="message"
            class="w-full bg-white rounded border border-gray-300 focus:border-gray-600 focus:ring-2 focus:ring-gray-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
          </div>


          <div class="p-2 w-full">
            <button
             type="submit"
              class="flex mx-auto text-white bg-dark border-0 py-2 px-8 focus:outline-none hover:bg-dark rounded text-lg"
            >
              Send
            </button>
          </div>
          <div
            class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"
          >
            <a class="text-gray-600">support@furnidesign.co</a>
            <p class="leading-normal my-5">
             US Phone: (619) 853-2039
            </p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                  ></path>
                </svg>
              </a>
              <a class="ml-4 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                  ></path>
                </svg>
              </a>
              <a class="ml-4 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                  ></path>
                </svg>
              </a>
              <a class="ml-4 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                  ></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>