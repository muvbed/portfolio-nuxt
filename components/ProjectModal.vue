<template>
  <div class="projectModal" @click.self="$emit('close')">
    <div class="container">
      <div class="projectModal__positioner">
        <iframe class="projectModal__iframe" :src="src" />
        <button
          class="projectModal__exit"
          aria-label="Закрыть"
          @click="$emit('close')"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectModal",
  props: {
    src: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="stylus" scoped>
.projectModal
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  z-index 3
  background-color rgba(0,0,0,0.75)
  opacity 0
  visibility hidden
  transition .3s

  &_active
    opacity 1
    visibility visible

  &__positioner
    position relative
    width 96%
    height 86vh
    margin 7vh auto
    background #fff
    border 2px solid #fff
    box-shadow 0px 0px 4px 2px #fff
    box-sizing border-box

  &__iframe
    width 100%
    height 100%
    border 0

  &__exit
    position absolute
    top 0
    right 0
    width 35px
    height 35px
    background #000
    border 2px solid #fff
    border-radius 50%
    box-shadow 0px 0px 4px 2px #fff
    cursor pointer
    transition .25s
    transform translateX(50%) translateY(-50%)

    &:hover
      transform translateX(50%) translateY(-50%) scale(1.1)

    &:before,
    &:after
      content ""
      position absolute
      top 42%
      left 10%
      width 80%
      height 15%
      background #fff
      transform rotate(45deg)

    &:after
      bottom 42%
      transform rotate(-45deg)

@media (max-width 479px)
  .projectModal
    &__modal
      .container
        padding 0 10px

    &__positioner
      width 100%

    &__exit
      right 12px
</style>
