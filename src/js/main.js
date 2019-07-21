$(document).ready(function() {
  $('img, a').on('dragstart', function(event) {
      event.preventDefault();
  });
  var t = $(".header-search"),
      e = $(".header-form"),
      s = $(".header-form__close");
  t.on("click", function() {
      e.addClass("header-form__active active");
  }), s.on("click", function() {
      e.removeClass("header-form__active active");
  }), $(".header-form__input").keyup(function() {
      "" == $(".header-form__input").val() ? $(".header-search-items").css("display", "none") : $(".header-search-items").css("display", "block");
      var t = $(this).val();
      $(".header-search-items li a").each(function() {
          $(this).text().indexOf(t) > 0 ? $(this).parents("li").show() : $(this).parents("li").hide()
      }), $(".header-search-items li:last").show();
  });
  $(".toggleCatalog");
  var i = $(".m_activeItem"),
      a = $(".toggleCatalog__bg"),
      d = $(".open"),
      r = $(".close"),
      l = $(".active-menu__active"),
      o = $(".m_header-catalog__subItem"),
      c = $(".callme"),
      h = $(".header-modal"),
      m = $(".header-modal__close");
  $(".active-menu");
  $(".m_header-catalog").on("click", ".active-menu__active", function() {
      var t = l.index($(this));
      o.eq(t).toggleClass("catalog__subItem-active active"), o.eq(t).hasClass("catalog__subItem-active") ? l.eq(t).css({
          color: "#a50103"
      }) : l.eq(t).attr("style", "")
  }), $(".m_header-nav__link").on("click", function() {
      $(this).find(".m_activeItem").hasClass("catalog__active") ? ($(this).find(".toggleCatalog__bg").removeClass("toggleCatalog__bg-active"), $(this).find(".m_activeItem").removeClass("catalog__active"), $(this).find(".close").hide(), $(this).find(".open").show()) : ($(".toggleCatalog__bg").removeClass("toggleCatalog__bg-active"), $(".m_activeItem").removeClass("catalog__active"), $(".m_header-nav .open").show(), $(".m_header-nav .close").hide(), $(this).find(".toggleCatalog__bg").toggleClass("toggleCatalog__bg-active"), $(this).find(".m_activeItem").toggleClass("catalog__active"), $(this).find(".m_activeItem").hasClass("catalog__active") ? ($("body").css({
          background: "#000000ba"
      }), $(this).find(".toggleCatalog__bg").addClass("toggleCatalog__bg-active"), $(this).find(".close").show(), $(this).find(".open").hide()) : ($("body").attr("style", ""), a.eq(n).removeClass("toggleCatalog__bg-active"), $(this).find(".close").hide(), $(this).find(".open").show()));
  }), $(".toggleCatalog__bg-active").click(function() {
      i.removeClass("catalog__active"), a.removeClass("toggleCatalog__bg-active"), d.show(100), r.hide(100);
  }), c.on("click", function() {
      h.addClass("header-modal__active active"), $("body").css({
          background: "#000000ba"
      }), h.css({
          background: "#000000ba"
      })
  }), m.on("click", function() {
      h.removeClass("header-modal__active active"), $("body").attr("style", ""), h.attr("style", "");
  });
  $(".header-modal__textarea").attr("placeholder", "Сообщение"), $(".header-modal__textarea").attr("required", "required"), $(".header-modal__textarea").focus(function() {
      "Сообщение" === $(this).val() && $(this).attr("value", "");
  }), $(".header-modal__textarea").blur(function() {
      "" === $(this).val() && $(this).attr("value", "Сообщение");
  }), $(function(t) {
      t(document).mouseup(function(e) {
          !t(".header-modal__box").is(e.target) & 0 === t(".header-modal__box").has(e.target).length && (h.removeClass("header-modal__active"), t("body").attr("style", ""))
      });
  });
  var p = $(".ftslider").width();
  $(".ftslide").width(p), $(".ftslider-wrapper").width(3 * p),
      function t() {
          setTimeout(function() {
              $(".ftslider-wrapper").css("transform", "translateX(-" + p * f + "px)"), $(".ftslider .ftslider-dot").removeClass("ftslider-dot__active"), $(".ftslider .ftslider-dot-" + f).addClass("ftslider-dot__active"), ++f < 3 ? t() : (f = 0, t())
          }, 4e3)
      }();
  var f = 1;
  if ($(".ftslider-dot").click(function() {
          f = $(this).data("item"), $(".ftslider-wrapper").css("transform", "translateX(-" + p * f + "px)"), $(".ftslider .ftslider-dot").removeClass("ftslider-dot__active"), $(".ftslider .ftslider-dot-" + f).addClass("ftslider-dot__active")
      }), window.matchMedia("(min-width: 1200px)").matches) var _ = 6,
      w = 4,
      u = 4,
      g = 4,
      v = 4;
  if (window.matchMedia("(max-width: 1199px)").matches) _ = 5, w = 3, u = 3, g = 3, v = 3;
  if (window.matchMedia("(max-width: 992px)").matches) _ = 4, w = 2, u = 2, g = 2;
  if (window.matchMedia("(max-width: 768px)").matches) {
      _ = 3;
      $(".sdslider").css("width", "80%");
      v = 2
  }
  if (window.matchMedia("(max-width: 576px)").matches) _ = 2, w = 1, u = 1, g = 1;
  if (window.matchMedia("(max-width: 420px)").matches) _ = 1, v = 1;
  var b = 1 / _ * $(".sdslider").width();
  $(".sdslide").width(b - 20);
  var x = $(".sdslider-wrapper .sdslide:last").data("item");
  $(".sdslider-wrapper").width(b * x);
  var C, k = 0;
  $(".sdslider-arrow-right").click(function() {
      x - (k += _) >= _ ? $(".sdslider-wrapper").css("transform", "translateX(-" + b * k + "px)") : (k = k + (x - k) - _, $(".sdslider-wrapper").css("transform", "translateX(-" + b * k + "px)")), C = k / (x - _) * $(".main-second-line-wrapper").width(), $(".main-second-line").width(C)
  });
  var y = new Hammer(document.querySelector(".sdslider"));
  y.get("swipe"), y.on("swipeleft", function() {
      $(".sdslider-arrow-right").click()
  }), $(".sdslider-arrow-left").click(function() {
      (k -= _) < 0 ? (k = 0, $(".sdslider-wrapper").css("transform", "translateX(-" + b * k + "px)")) : $(".sdslider-wrapper").css("transform", "translateX(-" + b * k + "px)"), C = k / (x - _) * $(".main-second-line-wrapper").width(), $(".main-second-line").width(C)
  });
  var X = new Hammer(document.querySelector(".sdslider"));
  X.get("swipe"), X.on("swiperight", function() {
      $(".sdslider-arrow-left").click()
  });
  var q = 1 / w * $(".tdslider-1").width();
  $(".tdslide-1").width(q - 30);
  var H = $(".tdslider-wrapper-1 .tdslide-1:last").data("item");
  $(".tdslider-wrapper-1").width(q * H);
  var S = 0,
      I = 1 / u * $(".tdslider-2").width();
  $(".tdslide-2").width(I - 30);
  var M = $(".tdslider-wrapper-2 .tdslide-2:last").data("item");
  $(".tdslider-wrapper-2").width(I * M);
  var O = 0,
      T = 1 / g * $(".tdslider-3").width();
  $(".tdslide-3").width(T - 30);
  var j = $(".tdslider-wrapper-3 .tdslide-3:last").data("item");
  $(".tdslider-wrapper-3").width(T * j);
  var z = 0,
      A = 1 / v * $(".news-slider").width();
  $(".news-slide").width(A - 20);
  var B = $(".news-slider-wrapper .news-slide:last").data("item");
  $(".news-slider-wrapper").width(A * B);
  var D = 0;
  $(".main-third-top__button-right-1").click(function() {
      ++S + w < H ? $(".tdslider-wrapper-1").css("transform", "translateX(-" + q * S + "px)") : (S = H - w, $(".tdslider-wrapper-1").css("transform", "translateX(-" + q * S + "px)"))
  });
  var E = new Hammer(document.querySelector(".tdslider-1"));
  E.get("swipe"), E.on("swipeleft", function() {
      $(".main-third-top__button-right-1").click()
  }), $(".main-third-top__button-right-2").click(function() {
      ++O + u < M ? $(".tdslider-wrapper-2").css("transform", "translateX(-" + I * O + "px)") : (O = M - u, $(".tdslider-wrapper-2").css("transform", "translateX(-" + I * O + "px)"))
  });
  var F = new Hammer(document.querySelector(".tdslider-2"));
  F.get("swipe"), F.on("swipeleft", function() {
      $(".main-third-top__button-right-2").click();
  }), $(".main-third-top__button-right-3").click(function() {
      ++z + g < j ? $(".tdslider-wrapper-3").css("transform", "translateX(-" + T * z + "px)") : (z = j - g, $(".tdslider-wrapper-3").css("transform", "translateX(-" + T * z + "px)"));
  });
  var G = new Hammer(document.querySelector(".tdslider-3"));
  G.get("swipe"), G.on("swipeleft", function() {
      $(".main-third-top__button-right-3").click()
  }), $(".news-top__button-right").click(function() {
      ++D + v < B ? $(".news-slider-wrapper").css("transform", "translateX(-" + A * D + "px)") : (D = B - v, $(".news-slider-wrapper").css("transform", "translateX(-" + A * D + "px)"))
  });
  var J = new Hammer(document.querySelector(".news-slider"));
  J.get("swipe"), J.on("swipeleft", function() {
      $(".news-top__button-right").click()
  }), $(".main-third-top__button-left-1").click(function() {
      --S > 0 ? $(".tdslider-wrapper-1").css("transform", "translateX(-" + q * S + "px)") : (S = 0, $(".tdslider-wrapper-1").css("transform", "translateX(-" + q * S + "px)"))
  });
  var K = new Hammer(document.querySelector(".tdslider-1"));
  K.get("swipe"), K.on("swiperight", function() {
      $(".main-third-top__button-left-1").click()
  }), $(".main-third-top__button-left-2").click(function() {
      --O > 0 ? $(".tdslider-wrapper-2").css("transform", "translateX(-" + I * O + "px)") : (O = 0, $(".tdslider-wrapper-2").css("transform", "translateX(-" + I * O + "px)"))
  });
  var L = new Hammer(document.querySelector(".tdslider-2"));
  L.get("swipe"), L.on("swiperight", function() {
      $(".main-third-top__button-left-2").click()
  }), $(".main-third-top__button-left-3").click(function() {
      --z > 0 ? $(".tdslider-wrapper-3").css("transform", "translateX(-" + T * z + "px)") : (z = 0, $(".tdslider-wrapper-3").css("transform", "translateX(-" + T * z + "px)"))
  });
  var N = new Hammer(document.querySelector(".tdslider-3"));
  N.get("swipe"), N.on("swiperight", function() {
      $(".main-third-top__button-left-3").click()
  }), $(".news-top__button-left").click(function() {
      --D > 0 ? $(".news-slider-wrapper").css("transform", "translateX(-" + A * D + "px)") : (D = 0, $(".news-slider-wrapper").css("transform", "translateX(-" + A * D + "px)"))
  });
  var P = new Hammer(document.querySelector(".news-slider"));
  P.get("swipe"), P.on("swiperight", function() {
      $(".news-top__button-left").click()
  }), $(".tdslide").on("mouseenter", function() {
      if ($(this).find(".more-button").addClass("dflex"), $(this).find(".instock-button").hide(), $(this).find(".instock-button").removeClass("dflex"), window.matchMedia("(max-width: 992px)").matches);
      else {
          var t = $(this).find(".tdslide-desc-addition ul").height();
          $(this).find(".tdslide-desc-addition").css("height", t + 20), $(this).find(".tdslide-buybuttons").addClass("dflex")
      }
      $(this).find(".tdslide-icons").addClass("dflex")
  }), $(".tdslide").on("mouseleave", function() {
      $(this).find(".instock-button").addClass("dflex"), $(this).find(".more-button").removeClass("dflex"), window.matchMedia("(max-width: 992px)").matches || ($(this).find(".tdslide-desc-addition").css("height", "0"), $(this).find(".tdslide-buybuttons").removeClass("dflex")), $(this).find(".tdslide-icons").removeClass("dflex")
  }), $(".tdslide-mobbutons-icons, .tdslide-mobbuton").click(function() {
      $(this).find(".tdslide-mobbutons-icons__open").toggleClass("dnone"), $(this).find(".tdslide-mobbutons-icons__close").toggleClass("dblock"), $(this).next().find(".tdslide-mobbutons-icons__open").toggleClass("dnone"), $(this).next().find(".tdslide-mobbutons-icons__close").toggleClass("dblock"), $(this).prev().find(".tdslide-mobbutons-icons__open").toggleClass("dnone"), $(this).prev().find(".tdslide-mobbutons-icons__close").toggleClass("dblock");
      var t = $(this).parents(".tdslide").find(".tdslide-desc-addition ul").height();
      $(this).find(".tdslide-mobbutons-icons__open").hasClass("dnone") ? $(this).parents(".tdslide").find(".tdslide-desc-addition").css("height", t + 20) : $(this).parents(".tdslide").find(".tdslide-desc-addition").css("height", "0"), $(this).parents(".tdslide").find(".tdslide-buybuttons").toggleClass("dflex")
  }), $(".tdslide-icon-1").hover(function() {
      $(this).next().addClass("dflex")
  }, function() {
      $(this).next().removeClass("dflex")
  })
});