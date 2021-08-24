export default {
  namespaced: true,
  state() {
    return {
      projects: [
        {
          src: "https://muvbed.github.io/rush-effect/",
          name: "Rush Effect",
          background: require("~/assets/images/fitness.png")
        },
        {
          src: "https://muvbed.github.io/sunrise-hotel/",
          name: "Sunrise Hotel",
          background: require("~/assets/images/hotel.png")
        },
        {
          src: "https://muvbed.github.io/aion-salvation/",
          name: "Aion Salvation",
          background: require("~/assets/images/aion.png")
        }
      ]
    };
  }
};
