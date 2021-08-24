<template>
  <div class="projectItem" :style="{ backgroundImage: `url(${background})` }">
    <div class="projectItem__inner">
      <div
        class="projectItem__popover"
        :class="{ projectItem__popover_active: popover }"
      >
        <span class="projectItem__name">&#128270; {{ name }}</span>
      </div>
      <button
        class="projectItem__btn"
        @mouseover="popover = true"
        @mouseout="popover = false"
        @click="$emit('show')"
      >
        <svg-icon name="web" class="projectItem__btnIcon" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectItem",
  props: {
    background: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      popover: false
    };
  }
};
</script>

<style lang="stylus" scoped>
.projectItem
  width 420px
  height 600px
  margin 10px
  background no-repeat center /cover
  border 3px solid rgb(144, 144, 144)
  overflow hidden
  transform skew(4deg, 4deg)
  transition .25s

  &:hover
    border-color #fff
    box-shadow 0px 0px 8px 4px #EE1AFF

  &__inner
    position relative
    display flex
    justify-content center
    align-items center
    width 100%
    height 100%
    background-color rgba(0,0,0,0.75)
    opacity 0
    visibility hidden
    transition .25s

    ~/:hover &
      opacity 1
      visibility visible

  &__popover
    position absolute
    top 33%
    left 50%
    box-shadow 0px 0px 2px 1px #D400EB
    opacity 0
    visibility hidden
    transform skew(-3deg, -3deg) translateX(-50%)
    transition .3s

    &:after
      content ""
      position absolute
      left 50%
      bottom 0
      z-index -1
      display block
      width 20px
      height 20px
      background #EE1AFF
      box-shadow 0px 0px 2px 1px #D400EB
      transform translateY(50%) translateX(-50%) rotate(45deg)

    &_active
      opacity 1
      visibility visible
      transition .3s .3s

  &__name
    width 100%
    height 100%
    padding 4px 10px
    text-align center
    font-size 16px
    font-weight bold
    letter-spacing 0
    color #000
    background #EE1AFF
    box-sizing border-box
    cursor url('~/assets/images/normal.cur'), default

  &__btn
    width 90px
    height 90px
    background 0
    border 0
    outline 0
    cursor url('~/assets/images/link.cur'), pointer
    transform skew(-3deg, -3deg)
    transition .3s

    &:hover
      transform skew(-3deg, -3deg) scale(1.1)

  &__btnIcon
    width 100%
    height 100%
    fill #EE1AFF

@media (max-width 1199px)
  .projectItem
    width 350px
    height 350px

    &__popover
      display none

@media (max-width 991px)
  .projectItem
    width 300px
    height 315px

@media (max-width 767px)
  .projectItem
    width 420px
    height 300px
    margin 10px 0

@media (max-width 479px)
  .projectItem
    width 260px
    height 180px
</style>
