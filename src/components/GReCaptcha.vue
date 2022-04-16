<template>
  <div ref="grecaptcha"/>
</template>

<script>
export default {
  name: "GReCaptcha",
  data() {
    return {
      site_key: '6LdPgPIeAAAAAOn9eHjseqnJQ8asJOxFgJ9RjRRB',
      theme: 'light',
    }
  },
  methods: {
    loaded() {
      window.grecaptcha.render(this.$refs.grecaptcha, {
        sitekey: this.site_key,
        theme: this.theme,
        size: "invisible",
        callback: res => {
          this.$store.dispatch('setCaptchaToken', res)
        }
      });
    }
  },
  mounted() {
    switch (localStorage.getItem('theme')) {
      case '0' :
        this.theme = 'light'
        break
      case '1' :
        this.theme = 'dark'
        break
      case '2' :
        this.theme = window.matchMedia && window.matchMedia('prefers-color-scheme: dark').matches ? 'dark' : 'light'
    }
    window.ReCaptchaLoaded = this.loaded;
    let script = document.createElement("script");
    script.src = "https://recaptcha.net/recaptcha/api.js?onload=ReCaptchaLoaded&render=explicit";
    document.head.appendChild(script);
  },
}
</script>

<style scoped>

</style>