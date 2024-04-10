ScrollReveal({
  distance: "150px",
  duration: 1500,
  delay: 400,
});

ScrollReveal({ duration: 1200, distance: "350px" }).reveal(".left", {
  delay: 200,
  origin: "left",
});
ScrollReveal({ duration: 1200, distance: "350px" }).reveal(".right", {
  delay: 200,
  origin: "right",
});
ScrollReveal({ duration: 1200, distance: "50px" }).reveal(".bot", {
  delay: 200,
  origin: "bottom",
});
ScrollReveal({ duration: 1200, distance: "50px" }).reveal(".top", {
  delay: 200,
  origin: "top",
});

//Reset scroll top

if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}
