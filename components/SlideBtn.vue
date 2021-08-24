<template>
  <button class="slideBtn" title="Навигация">
    <svg-icon name="next" class="slideBtn__icon" />
  </button>
</template>

<script>
export default {
  name: "SlideBtn"
};
</script>

<style lang="stylus" scoped>
.slideBtn
  position fixed
  left 75px
  bottom 50px
  z-index 2
  width 55px
  height 55px
  padding 0
  border 4px solid rgb(255, 255, 255)
  border-radius 50%
  box-shadow 0px 0px 2px 1px #fff
  outline 0
  cursor url('~/assets/images/link.cur'), pointer
  transform rotate(-180deg)
  transition .5s

  &__icon
    width 100%
    height 100%

  &_stat
    animation button-anim 1.6s infinite linear

  &_open
    transform rotate(0deg)

@keyframes button-anim
  0%, 100%
    border-color rgb(255, 255, 255)
    box-shadow 0px 0px 4px 1px #fff

  50%
    border-color rgb(144, 144, 144)
    box-shadow 0px 0px 0px 0px #fff

@keyframes button-anim__max479
  0%, 100%
    border-color rgb(255, 255, 255)
    box-shadow 0px 0px 2px 1px #fff

  50%
    border-color rgb(144, 144, 144)
    box-shadow 0px 0px 0px 0px #fff

@media (max-width 479px)
  .slideBtn
    left 45px
    bottom 20px
    width 35px
    height 35px
    border 3px solid rgb(255, 255, 255)

    &_stat
      animation button-anim__max479 1.6s infinite linear

@media (max-height 479px)
  .slideBtn
    bottom 35px
</style>
