export default (ctx, inject) => {
  inject("ancScroller", arg => {
    var ancScrollerMin,
      ancScrollerCount,
      timeFlag = true;

    if (window.innerHeight > arg.height) {
      setTimeout(function() {
        ancScrollerAutoBinding();
      }, 400);
    }

    for (var i = 0; i < arg.ancors.length; i++) {
      (function(i) {
        arg.links[i].addEventListener("click", function() {
          ancScrollerCount = i;
          arg.ancors[i].scrollIntoView({ behavior: "smooth" });
        });
      })(i);
    }

    window.addEventListener("resize", function() {
      if (window.innerHeight > arg.height) {
        setTimeout(function() {
          ancScrollerAutoBinding();
        }, 400);
      } else {
        document.removeEventListener("wheel", ancScrollerWheelFunc, {
          passive: false
        });
      }
    });

    function ancScrollerAutoBinding() {
      ancScrollerMin = Math.abs(arg.ancors[0].getBoundingClientRect().top);
      ancScrollerCount = 0;

      for (var i = 0; i < arg.ancors.length; i++) {
        if (
          Math.abs(arg.ancors[i].getBoundingClientRect().top) < ancScrollerMin
        ) {
          ancScrollerMin = Math.abs(arg.ancors[i].getBoundingClientRect().top);
          ancScrollerCount = i;
        }
      }

      arg.ancors[ancScrollerCount].scrollIntoView({ behavior: "smooth" });
      document.addEventListener("wheel", ancScrollerWheelFunc, {
        passive: false
      });
    }

    function ancScrollerWheelFunc(e) {
      e.preventDefault();

      if (!timeFlag) {
        return;
      }

      timeFlag = false;

      if (e.deltaY < 0 && ancScrollerCount > 0) {
        ancScrollerCount--;
        arg.ancors[ancScrollerCount].scrollIntoView({ behavior: "smooth" });
      } else if (e.deltaY > 0 && ancScrollerCount < arg.ancors.length - 1) {
        ancScrollerCount++;
        arg.ancors[ancScrollerCount].scrollIntoView({ behavior: "smooth" });
      } else {
        timeFlag = true;
      }

      if (!timeFlag) {
        setTimeout(function() {
          timeFlag = true;
        }, 400);
      }
    }
  });
};
