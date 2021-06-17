if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
  }
window.onload = function dev() {

    (function () {
      (function a() {
        try {
          (function b(i) {
            if (('' + (i / i)).length !== 1 || i % 20 === 0) {
              (function () { }).constructor('debugger')()
            } else {
              debugger
            }
            b(++i)
          }
          )(0)
        } catch (e) {
          setTimeout(a, 5000)
        }
      }
      )()
    }
    )(); $(document).ready(function () {
      $('#d').on('', function (e) {
        e.preventDefault();
      });
    });
  }
  window.onload = function () {
    // console.clear()
    document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    }, false);
    document.addEventListener("keydown", function (e) {

      if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        disabledEvent(e);
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        disabledEvent(e);
      }
      if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        disabledEvent(e);
      }
      if (e.ctrlKey && e.keyCode == 85) {
        disabledEvent(e);
      }
      if (event.keyCode == 123) {
        disabledEvent(e);
      }
    }, false);
    function disabledEvent(e) {
      if (e.stopPropagation) {
        e.stopPropagation();
      } else if (window.event) {
        window.event.cancelBubble = true;
      }
      e.preventDefault();
      return false;
    }
  };
