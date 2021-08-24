<template>
  <header class="home menu-section">
    <div class="scene">
      <div
        ref="scene"
        class="scene__wrapper"
        data-relative-input="true"
        data-invert-y="true"
        data-invert-x="true"
        data-hover-only="true"
      >
        <div class="scene__bg" data-depth="0.2" />
      </div>
    </div>
    <div class="container">
      <div
        class="home__name scrollClassAddElem"
        data-scroll-class-add-class="home__name_left"
        data-scroll-class-add-delay="1000"
        data-scroll-class-add-offset="50"
      >
        Васильев
      </div>
      <div
        class="home__name scrollClassAddElem"
        data-scroll-class-add-class="home__name_right"
        data-scroll-class-add-delay="1250"
        data-scroll-class-add-offset="50"
      >
        Александр
      </div>
      <h1
        class="home__caption scrollClassAddElem"
        data-scroll-class-add-class="home__caption_visible"
        data-scroll-class-add-delay="1650"
        data-scroll-class-add-offset="50"
      >
        <span class="home__symb">&lt;</span>Frontend-разработчик<span
          class="home__symb"
          >/&gt;
        </span>
        <span class="home__leftLayout">
          <span class="home__symb">&lt;</span>Frontend-разработчик<span
            class="home__symb"
            >/&gt;</span
          >
        </span>
        <span class="home__rightLayout">
          <span class="home__symb">&lt;</span>Frontend-разработчик<span
            class="home__symb"
            >/&gt;</span
          >
        </span>
      </h1>
      <p
        class="home__description scrollClassAddElem"
        data-scroll-class-add-class="home__description_visible"
        data-scroll-class-add-delay="1400"
        data-scroll-class-add-offset="50"
      >
        Здесь вы сможете ознакомиться со списком моих навыков, просмотреть
        выполненные мною работы, а также задать свои вопросы.
      </p>
    </div>
  </header>
</template>

<script>
import Parallax from "parallax-js";

export default {
  name: "Home",
  mounted() {
    new Parallax(this.$refs.scene);
  }
};
</script>

<style lang="stylus" scoped>
.home
  position relative
  min-height 100vh
  padding 4vh 0 100px
  text-align center
  color white
  border-bottom 30px solid #000
  box-sizing border-box
  overflow hidden

  .scene__bg
    background-image url("~/assets/images/home.png")

  .container
    perspective 1000px

  &__name
    position relative
    text-align right
    font-family PressStart2P-Regular
    font-size 24px
    font-weight 100
    line-height 1.2
    color #ddd
    text-shadow 5px 5px 2px #4C0054
    cursor url('~/assets/images/text.cur'), text

    &:first-letter
      color #D400EB

    &_left
      animation name-left .5s ease-out

    &_right
      animation name-right .5s ease-out

  &__caption
    position relative
    margin 24vh 0 75px
    font-family MagistralC-Bold
    font-size 72px
    font-style italic
    color rgb(224, 224, 224)
    text-shadow 5px 5px 5px rgba(0,0,0,0.5)
    opacity 0
    transition .5s

    &_visible
      opacity 1

  &__leftLayout,
  &__rightLayout
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    font-size inherit
    text-shadow 5px 5px 5px rgba(0,0,0,0.5)
    animation glitch 3s infinite linear

  &__leftLayout
    left 4px

  &__rightLayout
    right 4px

  &__symb
    color #D400EB

  &__description
    width 60%
    margin 0 auto
    padding 20px
    line-height 2
    font-size 20px
    font-weight 400
    color #D49ACB
    background rgba(0, 0, 0, 0.4)
    border 2px solid rgb(208, 208, 208)
    border-radius 25px
    cursor url('~/assets/images/text.cur'), text

    &_visible
      animation p-rotatex .5s ease-out, bloom 2s infinite linear

@keyframes name-left
  0%
    opacity 0
    transform translateX(-15%)

  100%
    opacity 1
    transform translateX(0)

@keyframes name-right
  0%
    opacity 0
    transform translateX(15%)

  100%
    opacity 1
    transform translateX(0)

@keyframes p-rotatex
  0%
    opacity 0
    transform rotateX(90deg)

  100%
    opacity 1
    transform rotateX(0)

@keyframes bloom
  0%, 45%, 55%
    border-color rgb(255, 255, 255)
    box-shadow 0px 0px 15px 5px #EE1AFF

  5%, 50%, 100%
    border-color rgb(208, 208, 208)
    box-shadow 0px 0px 10px 2px #D400EB

@media (max-width 1199px)
  .home
    &__caption
      font-size 48px

    &__leftLayout,
    &__rightLayout
      display none

    &__description
      font-size 16px

@media (max-width 991px)
  .home
    &__name
      font-size 20px

    &__description
      font-size 14px

@media (max-width 767px)
  .home
    &__name
      font-size 18px

    &__caption
      margin 12vh 0 40px
      font-size 32px

    &__leftLayout
      left 2px

    &__rightLayout
      right 2px

    &__description
      width 70%
      padding 15px

@media (max-width 479px)
  .home
    &__name
      font-size 16px

    &__description
      width 80%
      font-size 12px
</style>
