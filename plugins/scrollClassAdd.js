export default (ctx, inject) => {
  inject("scrollClassAdd", () => {
    var scrollClassAddElem = document.getElementsByClassName(
        "scrollClassAddElem"
      ),
      scrollClassAddOffsetBottom = window.pageYOffset + window.innerHeight,
      scrollClassAddClass = [],
      scrollClassAddOffset = [],
      scrollClassAddDelay = [],
      scrollClassAddOffsetElem = [];

    for (var i = 0; i < scrollClassAddElem.length; i++) {
      scrollClassAddElem[i].style.visibility = "hidden";
    }

    scrollClassAddLoad();
    scrollClassAddAct();

    window.addEventListener("resize", function() {
      scrollClassAddOffsetBottom = window.pageYOffset + window.innerHeight;

      scrollClassAddLoad();
      scrollClassAddAct();
    });

    window.addEventListener("scroll", function() {
      scrollClassAddOffsetBottom = window.pageYOffset + window.innerHeight;

      scrollClassAddAct();
    });

    function scrollClassAddLoad() {
      for (var i = 0; i < scrollClassAddElem.length; i++) {
        scrollClassAddClass[i] = scrollClassAddElem[i].getAttribute(
          "data-scroll-class-add-class"
        );
        scrollClassAddOffset[i] = scrollClassAddElem[i].getAttribute(
          "data-scroll-class-add-offset"
        );
        scrollClassAddDelay[i] = scrollClassAddElem[i].getAttribute(
          "data-scroll-class-add-delay"
        );

        window.pageYOffset >
        scrollClassAddElem[i].getBoundingClientRect().top + window.pageYOffset
          ? (scrollClassAddOffsetElem[i] =
              scrollClassAddElem[i].getBoundingClientRect().bottom +
              window.pageYOffset -
              parseInt(scrollClassAddOffset[i]))
          : (scrollClassAddOffsetElem[i] =
              scrollClassAddElem[i].getBoundingClientRect().top +
              window.pageYOffset +
              parseInt(scrollClassAddOffset[i]));
      }
    }

    function scrollClassAddAct() {
      for (var i = 0; i < scrollClassAddElem.length; i++) {
        if (
          scrollClassAddOffsetBottom > scrollClassAddOffsetElem[i] &&
          window.pageYOffset < scrollClassAddOffsetElem[i]
        ) {
          (function(i) {
            setTimeout(function() {
              scrollClassAddElem[i].style.visibility = "visible";
              scrollClassAddElem[i].classList.add(scrollClassAddClass[i]);
            }, scrollClassAddDelay[i]);
          })(i);
        }
      }
    }
  });
};
