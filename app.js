(() => {
  let counter = 0;
  let size = 100;
  let transition = 0.5;
  let speed = 5000;
  let parentDiv;
  let slideTrueFalse = true;

  let carouselContainer = document.getElementById("carousel");
  parentDiv = carouselContainer;

  let cloneFirstItem = parentDiv.firstElementChild.cloneNode(true);
  cloneFirstItem.id = "firstItem";
  parentDiv.appendChild(cloneFirstItem);
  let slide = carouselContainer;

  let carouselItem = [...document.getElementsByClassName("item")];
  slide.style.transform = "translateY(" + (( -size * counter)) + "%)";
  let k = 0;

  function autoSlide() {
    removeActiveClass();
    if (counter >= carouselItem.length - 1) return;
    slide.style.transition = `transform ${transition}s ease-in-out`;
    counter++;
    slide.style.transform = "translateY(" + (( -size * counter)) + "%)";
    k++;
    if (k >= [...document.getElementsByClassName("indicator")].length) {
      k = 0;
    }
    document.getElementById(`carouselId_${k}`).classList.add("active");
  }

  slide.addEventListener("transitionend", function () {
    if (carouselItem[counter].id === "firstItem") {
      slide.style.transition = "none";
      counter = 0;
      slide.style.transform = "translateY(" + (( -size * counter)) + "%)";
    }
  });

  if (slideTrueFalse === true) {
    setInterval(autoSlide, speed);
  }

  [...document.getElementsByClassName("indicator")].forEach(
    (indicator, index) => {
      indicator.addEventListener("click", function () {
        removeActiveClass();
        indicator.classList.add("active");
        slide.style.transition = `transform ${transition}s ease-in-out`;
        slide.style.transform = "translateY(" +( -size * index) + "%)";
        k = index
        counter = index;
      });
    }
  );

  function removeActiveClass() {
    [...document.getElementsByClassName("indicator")].forEach((children) => {
      children.classList.remove("active");
    });
  }
  
})();

