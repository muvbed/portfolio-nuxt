<template>
  <section class="projects menu-section">
    <div class="container">
      <h2 class="subtitle">
        Проекты
      </h2>
      <div class="projects__wrapper">
        <ProjectItem
          v-for="(project, index) in projects"
          :key="index"
          :background="project.background"
          :name="project.name"
          @show="iframeToggle(index)"
        />
      </div>
    </div>
    <ProjectModal
      :src="currentSrc"
      :class="{ projectModal_active: currentSrc }"
      @close="iframeToggle"
    />
  </section>
</template>

<script>
import { mapState } from "vuex";
import ProjectItem from "~/components/ProjectItem.vue";
import ProjectModal from "~/components/ProjectModal.vue";

export default {
  name: "Projects",
  components: {
    ProjectItem,
    ProjectModal
  },
  data() {
    return {
      currentSrc: ""
    };
  },
  computed: {
    ...mapState({
      projects: state => state.projects.projects
    })
  },
  mounted() {
    window.addEventListener("keydown", this.keyCodeHide);
  },
  destroyed() {
    window.removeEventListener("keydown", this.keyCodeHide);
  },
  methods: {
    keyCodeHide(event) {
      event.keyCode === 27 && this.currentSrc && this.iframeToggle();
    },
    iframeToggle(i = null) {
      if (i !== null) {
        this.currentSrc = this.projects[i].src;
        document.body.style.paddingRight =
          window.innerWidth - document.body.clientWidth + "px";
        document.body.classList.add("scrollHidden");
      } else {
        this.currentSrc = "";
        setTimeout(() => {
          document.body.style.paddingRight = "0px";
          document.body.classList.remove("scrollHidden");
        }, 200);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.projects
  min-height 100vh
  padding 4vh 0 100px
  border-bottom 30px solid #000
  box-sizing border-box

  .subtitle
    &:before,
    &:after
      content 'Проекты'

  &__wrapper
    display flex
    justify-content center

@media (max-width 767px)
  .projects
    &__wrapper
      flex-direction column
      align-items center
</style>
