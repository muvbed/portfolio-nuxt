<template>
  <aside class="aside">
    <ul class="aside__list">
      <li
        v-for="link in links"
        :key="link.id"
        ref="links"
        class="aside__item"
        :title="link.title"
      >
        <svg-icon :name="link.icon" class="aside__icon" />
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "Aside",
  data() {
    return {
      links: [
        {
          title: "Главная",
          icon: "homepage"
        },
        {
          title: "Навыки",
          icon: "skills"
        },
        {
          title: "Проекты",
          icon: "briefcase"
        },
        {
          title: "Контакты",
          icon: "chat"
        }
      ]
    };
  },
  mounted() {
    this.asideMarker();
    window.addEventListener("resize", this.asideMarker);
    window.addEventListener("scroll", this.asideMarker);
  },
  destroyed() {
    window.removeEventListener("resize", this.asideMarker);
    window.removeEventListener("scroll", this.asideMarker);
  },
  methods: {
    asideMarker() {
      const nodes = [".home", ".skills", ".projects", ".contacts"];
      const links = this.$refs.links;

      nodes.forEach((node, index) => {
        if (
          pageYOffset + window.innerHeight / 4 >=
          document.querySelector(node).getBoundingClientRect().top + pageYOffset
        ) {
          links.forEach(link => {
            link.style.fill = "#EE1AFF";
          });

          links[index].style.fill = "#FFF";
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.aside
  position fixed
  top 0
  left 0
  z-index 1
  width 200px
  height 100vh
  padding-left 75px
  background-color #000
  box-sizing border-box
  transform translateX(-100%)
  transition .5s

  &_active
    transform translateX(0)

  &__list
    margin 10vh 0 0
    padding 0
    list-style-type none

  &__item
    width 50px
    height 50px
    margin 6vh 0
    text-align center
    fill #EE1AFF
    cursor url('~/assets/images/link.cur'), pointer
    transition .3s

    &:hover
      transform scale(1.1)

  &__icon
    width 100%
    height 100%

@media (max-height 479px), (max-width 479px)
  .aside
    width 122px
    padding-left 45px

    &__item
      width 32px
      height 32px
</style>
