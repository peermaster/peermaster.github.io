const gra = function(min, max) {
  return Math.random() * (max - min) + min;
};
const init = function() {
  let items = document.querySelectorAll("li");
  for (let i = 0; i < items.length; i++) {
    items[i].style.minHeight = "100vh";
    // items[i].style.background = '#' + Math.floor(Math.random()*16777215).toString(16); //randomColor({ luminosity: "light" });
  }

  //cssScrollSnapPolyfill();
};
document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    init();
  }
}
