export default {
  namespaced: true,
  state() {
    return {
      links: [
        {
          href: "https://github.com/muvbed",
          text: "github muvbed",
          icon: "github-link"
        },
        {
          href: "https://vk.com/muvbed",
          text: "vk muvbed",
          icon: "vk-link"
        },
        {
          href: "https://t.me/muvbed",
          text: "telegram muvbed",
          icon: "telegram-link"
        }
      ]
    };
  }
};
