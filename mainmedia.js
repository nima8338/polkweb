document.addEventListener("DOMContentLoaded", function () {

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
