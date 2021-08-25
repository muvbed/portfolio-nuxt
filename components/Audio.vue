<template>
  <div
    class="audio scrollClassAddElem"
    data-scroll-class-add-class="audio_visible"
    data-scroll-class-add-delay="1800"
    data-scroll-class-add-offset="50"
  >
    <marquee
      ref="name"
      class="audio__name"
      :class="{ audio__name_visible: musicOn }"
    />
    <button
      class="audio__play"
      aria-label="Включение или выключение музыки"
      @click="
        audio.paused ? audio.play() : audio.pause();
        musicOn = !musicOn;
      "
    >
      <svg-icon v-if="musicOn" name="pause-button" />
      <svg-icon v-else name="play-button" />
    </button>
    <input
      v-model="volume"
      class="audio__volume"
      type="range"
      aria-label="Громкость музыки"
      @input="audio.volume = volume / 100"
    />
  </div>
</template>

<script>
export default {
  name: "Audio",
  data() {
    return {
      track: "Celldweller_-_It_Makes_No_Difference_Who_We_Are.mp3",
      audio: null,
      volume: 20,
      musicOn: false
    };
  },
  mounted() {
    this.audio = new Audio(
      require(`~/assets/${this.track}`)
    )
    this.audio.volume = this.volume / 100;
    this.audio.loop = true;
    this.$refs.name.textContent = this.track;
  }
};
</script>

<style lang="stylus" scoped>
.audio
  position fixed
  right 3vw
  bottom 50px
  z-index 2

  &_visible
    animation translate-right .5s ease

  &__name
    display block
    width 150px
    margin-bottom 10px
    font-size 16px
    color #FFF
    opacity 0
    transition .2s

    &_visible
      opacity 1

  &__play
    width 35px
    height 35px
    vertical-align middle
    margin-right 15px
    padding 0
    background #000
    border 0
    border-radius 50%
    box-shadow 0px 0px 2px 1px #000
    outline 0
    cursor url('~/assets/images/link.cur'), pointer

    svg
      width 100%
      height 100%
      fill #FFF

  &__volume
    appearance none
    width 100px
    height 30px
    vertical-align middle
    padding 0
    background-color rgba(0, 0, 0, 0)
    cursor url('~/assets/images/horizontal.cur'), ew-resize
    outline 0

    audio__track()
      height 8px
      background linear-gradient(to left, rgba(140,46,98,1) 0%, rgba(37,37,135,1) 100%)
      border 0
      border-radius 5px
      box-shadow 0px 0px 2px 1px #000
      box-sizing border-box

    audio__thumb()
      appearance none
      width 20px
      height 20px
      background-color #000
      border 3px solid #FFF
      border-radius 50%
      box-shadow 0px 0px 2px 1px #FFF
      box-sizing border-box

    &::-webkit-slider-runnable-track
      audio__track()

    &::-moz-range-track
      audio__track()

    &::-ms-track
      audio__track()

    &::-webkit-slider-thumb
      audio__thumb()
      margin-top -7px

    &::-moz-range-thumb
      audio__thumb()

    &::-ms-thumb
      audio__thumb()
      margin-top 0

@keyframes translate-right
  0%
    right 0
    transform translateX(100%)

  100%
    right 3vw
    transform translateX(0)

@media (max-width 479px)
  .audio
    bottom 20px

    &__name
      width 110px
      margin-bottom 6px
      font-size 14px

    &__play
      width 25px
      height 25px
      margin-right 10px

    &__volume
      width 75px

      &::-webkit-slider-runnable-track
        height 6px

      &::-moz-range-track
        height 6px

      &::-ms-track
        height 6px

      &::-webkit-slider-thumb
        width 17px
        height 17px
        margin-top -5px

      &::-moz-range-thumb
        width 17px
        height 17px

      &::-ms-thumb
        width 17px
        height 17px
        margin-top 0

@media (max-height 479px)
  .audio
    bottom 35px
</style>
