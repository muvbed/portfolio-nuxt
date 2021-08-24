<template>
  <section class="skills menu-section">
    <div class="container">
      <h2 class="subtitle">
        Навыки
      </h2>
      <div class="skills__wrapper">
        <SkillItem v-for="skill in skills" :key="skill.id" :skill="skill" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import SkillItem from "./SkillItem.vue";

export default {
  name: "Skills",
  components: {
    SkillItem
  },
  computed: {
    ...mapState({
      skills: state => state.skills.skills
    })
  }
};
</script>

<style lang="stylus" scoped>
.skills
  min-height 100vh
  padding 4vh 0 100px
  border-top 30px solid #000
  box-sizing border-box

  .subtitle
    &:before,
    &:after
      content 'Навыки'

  &__wrapper
    display flex
    flex-wrap wrap
    justify-content center
    padding-top 2vh

  /deep/.skillItem
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(6),
    &:nth-child(9),
    &:nth-child(11),
    &:nth-child(12),
    &:nth-child(16),
    &:nth-child(18),
    &:nth-child(20)
      .skillItem__img
        &_active
          animation rotate-minus .5s ease

    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(7),
    &:nth-child(8),
    &:nth-child(10),
    &:nth-child(13),
    &:nth-child(14),
    &:nth-child(15),
    &:nth-child(17),
    &:nth-child(19)
      .skillItem__img
        &_active
          animation rotate-plus .5s ease

  @keyframes rotate-plus
    0%
      opacity 0
      transform rotate(90deg)

    100%
      opacity 1
      transform rotate(0)

  @keyframes rotate-minus
    0%
      opacity 0
      transform rotate(-90deg)

    100%
      opacity 1
      transform rotate(0)
</style>
