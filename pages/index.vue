<template>
  <div>
    <Home />
    <Audio />
    <Aside :class="{ aside_active: asideFlag }" />
    <SlideBtn
      :class="{ slideBtn_open: asideFlag, slideBtn_stat: !asideFlag }"
      @click.native="asideFlag = !asideFlag"
    />
    <main class="bg">
      <Skills />
      <Projects />
    </main>
    <Contacts />
  </div>
</template>

<script>
import Home from "~/components/Home.vue";
import Audio from "~/components/Audio.vue";
import Aside from "~/components/Aside.vue";
import SlideBtn from "~/components/SlideBtn.vue";
import Skills from "~/components/Skills.vue";
import Projects from "~/components/Projects.vue";
import Contacts from "~/components/Contacts.vue"

export default {
  components: {
    Home,
    Audio,
    Aside,
    SlideBtn,
    Skills,
    Projects,
    Contacts
  },
  data() {
    return {
      asideFlag: false
    };
  },
  mounted() {
    this.$ancScroller({
      ancors: document.querySelectorAll(".menu-section"),
      links: document.querySelectorAll(".aside__item"),
      height: 899
    });
  }
};
</script>

<style lang="stylus" scoped>
.bg
  background url("~/assets/images/textolite.png") repeat bottom
  animation bg-anim 600s infinite linear

@keyframes bg-anim
  0%
    background-position-y 0%

  100%
    background-position-y 1500%

@media (max-width 1199px)
  .bg
    animation none
</style>
