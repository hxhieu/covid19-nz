<template>
  <div v-if="enabled" class="ga">
    <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="/__/firebase/7.13.1/firebase-app.js"></script>

    <!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
    <script src="/__/firebase/7.13.1/firebase-analytics.js"></script>

    <!-- Initialize Firebase -->
    <script src="/__/firebase/init.js"></script>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enabled: process.env.NODE_ENV === 'production',
    }
  },
  mounted() {
    if (this.enabled) {
      let retries = 0
      const firebaseCheck = setInterval(() => {
        if (window.firebase && window.firebase.analytics) {
          // Just keep trying, not sure how Nuxt handle this timing...
          try {
            window.firebase.analytics()
            clearInterval(firebaseCheck)
          } catch {}
        }
        retries++
        if (retries > 60) clearInterval(firebaseCheck)
      }, 500)
    }
  },
}
</script>
