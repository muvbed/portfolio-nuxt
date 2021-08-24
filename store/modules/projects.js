export default {
  namespaced: true,
  state() {
    return {
      projects: [
        {
          src: "http://rusheffect.eu5.net/",
          name: "Rush Effect",
          background: require("~/assets/images/fitness.png")
        },
        {
          src: "http://sunrisehotel.eu5.net/",
          name: "Sunrise Hotel",
          background: require("~/assets/images/hotel.png")
        },
        {
          src: "http://aionsalvation.eu5.net/",
          name: "Aion Salvation",
          background: require("~/assets/images/aion.png")
        }
      ]
    };
  }
};
