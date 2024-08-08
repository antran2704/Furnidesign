<template>
  <div>
    <footer class="bg-dark text-gray-200 body-font">
      <div
        class="container px-5 md:pt-20 md:pb-10 py-10 mx-auto flex items-start lg:flex-nowrap justify-between flex-wrap gap-10">
        <div class="w-full md:w-3/12 lg:w-3/12 text-center md:text-left">
          <a href="/" class="flex title-font font-medium items-center md:justify-start justify-center text-gray-200">
            <img src="/logo_white.png" title="Logo" alt="Logo" width="100" height="100" class="md:w-[100px] w-[90px]">

          </a>
          <p class="pt-4 md:text-sm text-xs text-gray-200">FURNI DESIGN - Matching Your Vibes</p>
          <!-- Contact section -->


        </div>
        <div class="flex lg:flex-nowrap flex-wrap justify-between items-start lg:w-8/12 w-full lg:gap-5 gap-0">
          <div class="lg:w-1/3 w-1/2">
            <h2 class="title-font font-medium text-gray-200 tracking-widest md:text-base text-sm mb-3">INFORMATIONS</h2>
            <nav class="list-none mb-10">
              <li>
                <NuxtLink to="/" class="md:text-base text-sm text-gray-200 hover:hover:text-gray-300 cursor-pointer">Home
                  Page</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about-us"
                  class="md:text-base text-sm text-gray-200 hover:hover:text-gray-300 cursor-pointer">About
                  Us</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact"
                  class="md:text-base text-sm text-gray-200 hover:hover:text-gray-300 cursor-pointer">Contact Us
                </NuxtLink>
              </li>

            </nav>
          </div>

          <div class="lg:w-1/3 w-1/2">
            <h2 class="title-font font-medium text-gray-200 tracking-widest md:text-base text-sm mb-3">PRODUCTS</h2>
            <nav class="list-none mb-10">
              <li>
                <NuxtLink to="/product?category=doors"
                  class="md:text-base text-sm text-gray-200 hover:hover:text-gray-300 cursor-pointer">Doors</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/product?category=cabinets-countertops"
                  class="md:text-base text-sm text-gray-200 hover:hover:text-gray-300 cursor-pointer">Cabinets
                  Countertops</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/product?category=lumber"
                  class="md:text-base text-sm text-gray-200 hover:hover:text-gray-300 cursor-pointer">Lumber</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/product?category=home-decoration-supplies"
                  class="md:text-base text-sm text-gray-200 hover:hover:text-gray-300 cursor-pointer">Home Decoration
                  Supplies</NuxtLink>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/3 w-1/2">
            <h2 class="title-font font-medium text-gray-200 tracking-widest md:text-base text-sm mb-3">SUPPORT</h2>
            <nav class="list-none mb-10">
              <li>
                <NuxtLink to="/" class="md:text-base text-sm text-gray-200 hover:hover:text-gray-300 cursor-pointer">Help
                  Center</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact"
                  class="md:text-base text-sm text-gray-200 hover:hover:text-gray-300 cursor-pointer">Contact Us
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/#FAQ" class="md:text-base text-sm text-gray-200 hover:hover:text-gray-300 cursor-pointer">
                  FAQ</NuxtLink>
              </li>

            </nav>
          </div>
        </div>
      </div>

      <!-- copyright -->
      <div class="bg-dark border-t border-gray-400 container mx-auto">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p class="text-gray-200 text-sm text-center sm:text-left">© 2023 Furni Design
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a target="_blank" aria-label="Facebook Furnidesign" href="https://www.facebook.com/furnidesign0619"
              class="text-gray-200">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6"
                viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a target="_blank" aria-label="Instagram Furnidesign" href="https://www.instagram.com/furnidesign_/"
              class="ml-3 text-gray-200">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                class="w-6 h-6" viewBox="0 0 30 30">
                <path
                  d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z">
                </path>
              </svg>
            </a>
            <a target="_blank" aria-label="Youtube Furnidesign" href="https://www.youtube.com/@FurniDesign"
              class="ml-3 text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="0" class="w-6 h-6" viewBox="0 0 30 30">
                <path
                  d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z">
                </path>
              </svg>
            </a>
            <a target="_blank" aria-label="Mail Furnidesign" href="mailto:admin@furnidesign.co"
              class="ml-3 text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="0" class="w-6 h-6" viewBox="0 0 30 30">
                <path
                  d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z">
                </path>
              </svg>
            </a>
          </span>
        </div>
    </div>
  </footer>
</div></template>