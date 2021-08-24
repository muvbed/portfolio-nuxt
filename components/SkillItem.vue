<template>
  <figure class="skillItem">
    <img
      class="skillItem__img scrollClassAddElem"
      :src="skill.image"
      :alt="`${skill.name} muvbed skill`"
      data-scroll-class-add-class="skillItem__img_active"
      :data-scroll-class-add-delay="skill.animation_delay"
      data-scroll-class-add-offset="50"
    />
    <figcaption
      class="skillItem__name scrollClassAddElem"
      data-scroll-class-add-class="skillItem__name_active"
      :data-scroll-class-add-delay="skill.animation_delay"
      data-scroll-class-add-offset="50"
    >
      {{ skill.name }}
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: "SkillItem",
  props: {
    skill: {
      type: Object,
      require: true,
      default: () => {}
    }
  }
};
</script>

<style lang="stylus" scoped>
.skillItem
  display flex
  flex-direction column
  align-items center
  width 140px
  height 140px
  margin 20px
  text-align center

  &__img
    width 105px
    height 91px

  &__name
    width 100%
    margin 15px 0 0
    font-size 14px
    word-break break-all
    letter-spacing 0
    color #fff
    opacity 0
    transition .25s .5s

    &_active
      opacity 1

@media (max-width 991px)
  .skillItem
    width 110px
    height 110px
    margin 18px

    &__img
      width 89px
      height 77px

@media (max-width 767px)
  .skillItem
    margin 14px

    &__name
      margin 8px 0 0

@media (max-width 479px)
  .skillItem
    width 80px
    height 80px
    margin 8px

    &__img
      width 63px
      height 54px

    &__name
      font-size 10px
</style>
