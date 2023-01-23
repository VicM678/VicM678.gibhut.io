window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    document.querySelector(".go-top-continer").classList.add("show");
  } else {
    document.querySelector(".go-top-continer").classList.remove("show");
  }
};

document.querySelector(".go-top-continer").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
