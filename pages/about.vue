<template>
  <div id="about">
    <h2>About me</h2>
    <p>
      Hi, my name is Hugh Hoang and I am a technical lead at
      <a target="_blank" href="https://www.augensoftwaregroup.com/">
        Augen Software Group
        <icon :fa-icon="['fas', 'external-link-alt']"></icon>
      </a>
    </p>
    <p>
      I live in
      <a target="_blank" href="https://www.google.co.nz/maps/place/Auckland">
        Auckland, New Zealand
        <icon :fa-icon="['fas', 'external-link-alt']"></icon>
      </a>
      that could give a hint why
      <span class="covid19board">COVID-19 Board</span>
      is all about NZ! Are we also talking about a global COVID-19 Board? I am
      all ears!
    </p>
    <br />
    <p>
      I guess just like many of us, we all have been united and fighting again
      this pandemic, and a "daily" task is to check the status of the event such
      as the trends and the number of cases etc.
    </p>
    <br />
    <p>
      So COVID-19 Board is born, with the idea of having some custom query on
      your hand
      <a
        target="_blank"
        href="https://www.howtogeek.com/196087/how-to-add-websites-to-the-home-screen-on-any-smartphone-or-tablet/"
      >
        Yes! it works really well on your phones!
        <icon :fa-icon="['fas', 'external-link-alt']"></icon>
      </a>
      then you can check them every morning just with a finger swipe.
    </p>
    <br />
    <p>
      I will keep contributing to COVID-19 Board with you all supports.
    </p>
    <br />
    <p>
      Thank you and stay safe and drop me a line at
      <a href="mailto:hugh.hoang@gmail.com?Subject=COVID-19%20Board">
        hugh.hoang@gmail.com
      </a>
      if you found an issue or just want to chat!
    </p>
    <div class="copy">Copyright &copy; {{ now }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      now: new Date().getFullYear(),
    }
  },
}
</script>

<style lang="scss" scoped>
.copy {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-weight: 700;
  color: $primaryColor;
  padding: 10px 0;
}
</style>
