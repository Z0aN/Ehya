$(document).ready(function () {
  // Меню
  var menuButton = $(".navbar-mobile");
  menuButton.on("click", function (event) {
    event.preventDefault;
    $(".navbar").toggleClass("navbar--visible");
    $(this).toggleClass("navbar-mobile--active");
  });
  // Табы
  var tabsItem = $(".trending-tabs__link");
  var contentItem = $(".trending-store");

  tabsItem.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass("trending-tabs__link--active");
    contentItem.removeClass("trending-store--active");
    $(activeContent).addClass("trending-store--active");
    $(this).addClass("trending-tabs__link--active");
  });
  // Слайдер
  var reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 7000,
    },
    on: {
      init() {
        this.el.addEventListener("mouseenter", () => {
          this.autoplay.stop();
        });

        this.el.addEventListener("mouseleave", () => {
          this.autoplay.start();
        });
      },
    },
  });
  var storiesSlider = new Swiper(".stories-slider", {
    // Optional parameters
    direction: "vertical",
    loop: true,
    // Кол-во слайдов
    slidesPerView: 2,
    slidesPerGroup: 2,
    // Navigation arrows
    navigation: {
      nextEl: ".stories-button__next",
      prevEl: ".stories-button__prev",
    },
    breakpoints: {
      481: { direction: "horizontal" },
    },
  });
  // Hover Эффект Кнопки
  $(".stories-button__prev").on("mouseenter", function (e) {
    $(".stories-button__image--prev").addClass("stories-button__image--active");
  });
  $(".stories-button__prev").on("mouseleave", function (e) {
    $(".stories-button__image--prev").removeClass(
      "stories-button__image--active"
    );
  });
  $(".stories-button__next").on("mouseenter", function (e) {
    $(".stories-button__image--next").addClass("stories-button__image--active");
  });
  $(".stories-button__next").on("mouseleave", function (e) {
    $(".stories-button__image--next").removeClass(
      "stories-button__image--active"
    );
  });
});
