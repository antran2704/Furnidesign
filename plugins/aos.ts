import AOS from "aos"

import "aos/dist/aos.css"

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== "undefined") {
    nuxtApp.AOS = AOS.init({
        once: true,
        easing: 'ease-out-back',
				duration: 1000
    }) // eslint-disable-line new-cap
  }
})