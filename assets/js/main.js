document.addEventListener("DOMContentLoaded", function () {
  // navbar start
  const navbar = document.querySelector(".navbar-container");
  const siteLogo = navbar.querySelector(".site-logo");

  const navItems = navbar.querySelectorAll(".navbar-container .nav-item");
  const loaderVideo = document.getElementById("loader-video");

  const loaderWindowWidth = window.matchMedia("(min-width: 1000px)");

  if (gsap && loaderWindowWidth.matches) {
    const navTl = gsap.timeline();

    const siteLogoWidth = 1100;

    const animationDelay = 2.89;

    gsap.to(loaderVideo, {
      display: "none",
      duration: 0,
      delay: 3,
    });

    // gsap.from(siteLogo, {
    //   width: siteLogoWidth,
    //   marginLeft: `calc(50% - ${siteLogoWidth / 2}px)`,
    //   ease: "power2.out",
    //   delay: animationDelay,
    //   duration: 2,
    // });

    gsap.fromTo(
      siteLogo,
      {
        width: siteLogoWidth,
        ease: "power2.out",
        delay: animationDelay,
        duration: 2,
      },
      {
        width: "300px",
        marginLeft: 0,
        ease: "power2.out",
        delay: animationDelay,
        duration: 2,
      }
    );

    navTl.from(navbar, {
      height: "100vh",
      ease: "power2.out",
      delay: animationDelay,
      duration: 2,
    });

    navTl.from(navItems, {
      width: 0,
      opacity: 0,
      y: 20,
      stagger: 0.1,
      ease: "sine.inOut",
      duration: 0.5,
    });
  }

  const sidebar = document.querySelector("div.sidebar");
  const sidebarOpenBtn = document.getElementById("menu-open-btn");
  const sidebarCloseBtn = document.getElementById("menu-close-btn");

  if (sidebar && sidebarOpenBtn && sidebarCloseBtn) {
    sidebarOpenBtn.addEventListener("click", function () {
      sidebar.classList.add("show");
    });

    sidebarCloseBtn.addEventListener("click", function () {
      sidebar.classList.remove("show");
    });
  }

  if (navItems.length > 0) {
    navItems.forEach((navItem) => {
      const navItemText = navItem.textContent;

      navItem.innerHTML = "";

      for (let i = 0; i < navItemText.length; i++) {
        const latterSpan = document.createElement("span");
        if (navItemText[i] === " ") {
          latterSpan.className = "gap";
        }
        latterSpan.innerText = navItemText[i];
        latterSpan.setAttribute("aria-hidden", true);
        navItem.appendChild(latterSpan);
      }
    });
  }
  // navbar end

  // customer say section carousel start
  const customerCarousel = $(".customer-carousel");
  if (customerCarousel.length > 0) {
    customerCarousel.owlCarousel({
      loop: true,
      margin: 40,
      dots: true,
      autoplay: true,
      autoplayTimeout: 4000,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  }
  // customer say section carousel end

  // media page first three news item start
  const newsMediaItems = document.querySelectorAll("div.news-media-item");

  if (newsMediaItems.length > 0) {
    newsMediaItems.forEach((newsMedia) => {
      newsMedia.addEventListener("click", function (e) {
        e.stopPropagation();
        window.location.href = this.dataset.link;
      });
    });
  }
  // media page first three news item end

  // media item carousel start
  const mediaItemCarousel = $("div.media-item-carousel");
  if (mediaItemCarousel.length > 0) {
    mediaItemCarousel.owlCarousel({
      dots: true,
      items: 1,
      margin: 14,
      nav: true,
      autoplay: true,
      autoplayTimeout: 45000,
    });
  }
  // media item carousel end

  const newsArticleItem = document.querySelector(".news-article-item");
  if (newsArticleItem) {
    newsArticleItem.addEventListener("click", function (e) {
      e.stopPropagation();
      window.location.href = this.dataset.link;
    });
  }
});
