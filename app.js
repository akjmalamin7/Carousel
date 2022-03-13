(()=>{
    let counter = 0;
    let size = 100;
    let transition = 1;
    let speed = 2000;
    let parentDiv;
    let sliderTrueFalse = true;
    
    let wrapper = document.getElementById("containerId");
    parentDiv = wrapper;
    
    let firstSliderItem = parentDiv.firstElementChild;
    let lastSliderItem = parentDiv.lastChild;
    
    // clone first item and insert before last item
    let cloneFirstItem = firstSliderItem.cloneNode(true);
    cloneFirstItem.id = "first_item";
    parentDiv.appendChild(cloneFirstItem);
    
    // clone last item and insert before first item
    let cloneLastItem = lastSliderItem.cloneNode(true);
    cloneLastItem.id = "last_item";
    parentDiv.insertBefore(cloneLastItem, parentDiv.firstChild);
    
    let carouselSlide = wrapper;
    let carouselItem = [...document.getElementsByClassName("content_box")];
    carouselSlide.style.transform = "translateY(" + -size * counter + "%)";
    let k = 0;
    // console.log(carouselSlide)
    
    function changer() {
      removeActiveClass();
      if (counter >= carouselItem.length - 1) return;
      carouselSlide.style.transition = `transform ${transition}s ease-in-out`;
      counter++;
      carouselSlide.style.transform = "translateY(" + -size * counter + "%)";
      k++;
      if (k >= [...document.getElementsByClassName("nav_item")].length) {
        k = 0;
      }
      document.getElementById(`carouselId_${k}`).classList.add("active");
    }
    
    carouselSlide.addEventListener("transitionend", function () {
      if (carouselItem[counter].id === "first_item") {
        carouselSlide.style.transition = "none";
        counter = carouselItem.length - counter - 1;
        carouselSlide.style.transform = "translateY(" + -size * counter + "%)";
      }
    });
    
    if (sliderTrueFalse === true) {
      let carouselTranslate = setInterval(changer, speed);
    }
    
    [...document.getElementsByClassName("nav_item")].forEach((indicator, index) => {
      indicator.addEventListener("click", function () {
        removeActiveClass();
        indicator.classList.add("active");
        carouselSlide.style.transition = `transform ${transition}s ease-in-out`;
        carouselSlide.style.transform = "translateY(" + -size * index + "%)";
        k = index;
        counter = index;
      });
    });
    console.log(document.querySelectorAll(".nav_item"));
    
    function removeActiveClass() {
      [...document.getElementsByClassName("nav_item")].forEach((indicators) => {
        [...document.getElementsByClassName("nav_item")].forEach((children) => {
          children.classList.remove("active");
        });
      });
    }
    
})()