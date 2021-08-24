<template>
  <div>
    <div ref="preloader" class="preloader">
      <div class="preloader__inner" />
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      if (!this.$refs.preloader.classList.contains("preloader_onload")) {
        this.$refs.preloader.classList.add("preloader_onload");
        this.$scrollClassAdd();
      }
    }, 500);
  }
};
</script>

<style lang="stylus" scoped>
.preloader
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  z-index 4
  display flex
  justify-content center
  align-items center
  background #000
  transition .7s .4s

  &_onload
    transform translateY(-100%)

  &__inner
    width 256px
    height 88px
    background url('~/assets/images/preloader.gif') no-repeat center center

    ~/_onload &
      opacity 0
      transition .25s
</style>
