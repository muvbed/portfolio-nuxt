<template>
  <footer class="contacts menu-section">
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
      <h2 class="subtitle">
        Контакты
      </h2>
      <form class="contacts__form" @submit.prevent="onSubmit">
        <input
          v-model="name"
          class="contacts__input"
          name="name"
          type="text"
          placeholder="Ваше имя*"
          required
        />
        <input
          v-model="subname"
          class="contacts__input"
          name="subname"
          type="text"
          placeholder="Ваша фамилия*"
          required
        />
        <input
          v-model="email"
          class="contacts__input"
          name="email"
          type="email"
          placeholder="E-mail*"
          required
        />
        <textarea
          v-model="message"
          class="contacts__input"
          name="message"
          rows="10"
          placeholder="Введите ваше сообщение*..."
          required
        />
        <button class="contacts__btn" type="submit">
          Отправить
        </button>
      </form>
      <div class="contacts__wrapper">
        <a
          v-for="link in links"
          :key="link.id"
          class="contacts__link"
          :href="link.href"
          :aria-label="link.text"
          target="blank"
        >
          <svg-icon :name="link.icon" />
        </a>
      </div>
    </div>
    <div ref="modal" class="contacts__modal">
      <div v-if="success" class="contacts__alert">
        Сообщение отправлено!
      </div>
      <div v-else class="contacts__alert">
        Ошибка отправления!
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from "vuex";
import Parallax from "parallax-js";

export default {
  name: "Contacts",
  data() {
    return {
      name: "",
      subname: "",
      email: "",
      message: "",
      success: false
    };
  },
  computed: {
    ...mapState({
      links: state => state.contacts.links
    })
  },
  mounted() {
    new Parallax(this.$refs.scene);
  },
  methods: {
    async onSubmit() {
      const formBuff = {
        name: this.name,
        subname: this.subname,
        email: this.email,
        message: this.message
      };

      await fetch("~/static/post.php", {
        method: "post",
        body: JSON.stringify(formBuff)
      })
        .then(() => (this.success = true))
        .catch(() => (this.success = false));

      this.$refs.modal.classList.add("contacts__modal_active");
      setTimeout(() => {
        this.$refs.modal.classList.remove("contacts__modal_active");
      }, 1500);
    }
  }
};
</script>

<style lang="stylus">
.contacts
  position relative
  min-height 100vh
  padding 4vh 0 125px
  font-size 18px
  border-top 30px solid #000
  box-sizing border-box
  overflow hidden

  .subtitle
    &:before,
    &:after
      content 'Контакты'

  .scene__bg
    background-image url("~/assets/images/contacts.png")

  &__form
    padding-top 8vh

  &__input
    padding 15px 20px
    font-family Arial, Helvetica, sans-serif
    font-size inherit
    letter-spacing 1px
    color #fff
    background rgba(0,0,0,0.5)
    border 3px solid #8a8a8a
    border-radius 30px
    box-sizing border-box
    outline 0
    cursor url('~/assets/images/text.cur'), text
    transition .1s

    &:focus
      border-color #fff
      box-shadow 0px 0px 8px 4px #EE1AFF

  [name="name"]
    width calc(50% - 5px)

  [name="subname"]
    float right
    width calc(50% - 5px)

  [name="email"]
    width 100%
    margin 10px 0

  [name="message"]
    width 100%
    resize none
    overflow auto

  &__btn
    position relative
    width 100%
    margin-top 10px
    padding 15px 0
    text-transform uppercase
    font-family PressStart2P-Regular
    font-weight 900
    font-size inherit
    color #EE1AFF
    background rgba(0,0,0,0.5)
    border 3px solid #8a8a8a
    border-radius 30px
    outline 0
    overflow hidden
    cursor url('~/assets/images/link.cur'), pointer
    transition .25s

    &:hover
      border-color #fff
      box-shadow 0px 0px 8px 4px #EE1AFF

      &:before
        left -15%
        background-color rgba(255,255,255,1)

    &:before
      content ""
      position absolute
      top 0
      left -25%
      display block
      width 250px
      height 250px
      background-color rgba(255,255,255,0.5)
      transform rotate(45deg) translateY(-143px)
      transition .25s

  &__wrapper
    display flex
    justify-content center
    margin-top 20px

  &__link
    display block
    width 60px
    height 60px
    margin-left 20px
    fill #EE1AFF
    border-radius 50%
    outline 0
    cursor url('~/assets/images/link.cur'), pointer
    transition .25s

    svg
      width 100%
      height 100%

    &:first-child
      margin-left 0

    &:hover
      box-shadow 0px 0px 4px 2px #D49ACB

  &__modal
    position fixed
    top 0
    left 0
    bottom 0
    z-index 3
    display flex
    flex-direction column
    justify-content center
    width 100%
    padding 0 15px
    text-align center
    background-color rgba(0,0,0,0.75)
    box-sizing border-box
    visibility hidden
    opacity 0

    &_active
      animation modal-open 1.5s linear

  &__alert
    font-size 48px
    font-family PressStart2P-Regular
    color rgba(224, 224, 224, 0.75)
    text-shadow 5px 5px 2px #4C0054

@keyframes modal-open
  0%, 100%
    visibility hidden
    opacity 0

  15%, 85%
    visibility visible
    opacity 1

@media (max-width 1199px)
  .contacts
    &__alert
      font-size 38px

@media (max-width 991px)
  .contacts
    &__btn
      &:hover
        &:before
          left -25%

      &:before
        left -35%

    &__alert
      font-size 32px

@media (max-width 767px)
  .contacts
    font-size 16px

    &__form
      padding-top 4vh

    &__btn
      &:hover
        &:before
          left -290px

      &:before
        left -330px
        transform rotate(45deg) translateY(-145px)

@media (max-width 479px)
  .contacts
    padding-bottom 100px
    font-size 12px

    &__input
      padding 12px 16px

      &:focus
        box-shadow 0px 0px 6px 3px #EE1AFF

    &__btn
      padding 12px 0

      &:hover
        box-shadow 0px 0px 6px 3px #EE1AFF

        &:before
          left -345px

      &:before
        left -360px
        transform rotate(45deg) translateY(-152px)

    &__link
      width 45px
      height 45px

    &__alert
      font-size 20px
</style>
