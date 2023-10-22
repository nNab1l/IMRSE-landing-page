const button = document.getElementById("plus");
const navigation = document.getElementById("menu");

let isOpen = false;



button.onclick = function() {
  if(isOpen){
    isOpen = false;
    navigation.style.opacity = "1";
    navigation.style.pointerEvents = "auto";
    button.textContent = "-";
    document.body.style.overflow = "hidden";
  }
  else{
    isOpen = true;
    navigation.style.opacity = "0";
    navigation.style.pointerEvents = "none";
    button.textContent = "+";
    document.body.style.overflow = "auto";
  }
}



const elementToAnimate = document.querySelector('.tech__art');

function handleScroll() {
    const elementRect = elementToAnimate.getBoundingClientRect();

    const viewportHeight = window.innerHeight;

    let newSize = 50;

    if (elementRect.top >= 0 && elementRect.bottom <= viewportHeight) {
        newSize = 50;
    } else if (elementRect.bottom > 0 && elementRect.top < viewportHeight) {
        const elementCenterY = (elementRect.top + elementRect.bottom) / 2;
        const viewportCenterY = viewportHeight / 2;
        const distanceToCenter = Math.abs(viewportCenterY - elementCenterY);
        const maxDistance = viewportHeight / 2;
        newSize = 50 - (distanceToCenter / maxDistance) * 50;
    }

    elementToAnimate.style.width = `${newSize}%`;
}

window.addEventListener('scroll', handleScroll);

document.addEventListener("DOMContentLoaded", async function () {
  const sliders = document.querySelectorAll(".tech__fill");
  const description = document.getElementById("description");
  const heading = document.getElementById("heading");
  const image = document.getElementById("image");

const images = ["./sub/bee.jpg", "./sub/sign3.jpg", "./sub/deepmind3.jpg"]; // Add image URLs here
 const descriptions = [
  "Introducing IMRSE, your language learning\n technology in your own hands. Equipped\n with our cutting-edge technology,\n IMRSE unlocks your new world.",
  "Our OCR feature is your language companion\n in the real world. Scan and translate\n street signs, handwritten notes, or\n any text you encounter. ",
  "With continous research on language learning,\n it is our goal to reshape the future\n of how we learn languages by\n integrating cutting-edge technologies.",
];

const headings = [
  "Unlock your\n new world.",
  "Here to change\n language learning.",
  "Reimagining, one\n step at a time."
]

const headingElement = document.getElementById("heading");
headingElement.textContent = headings[0].replace(/\n/g, '\n')

let currentIndex = 0;
const descriptionElement = document.getElementById("description");
descriptionElement.textContent = descriptions[0].replace(/\n/g, '\n');


  function updateSlider(index) {
    const currentSlider = sliders[index];
    currentSlider.style.width = "0%";
    currentSlider.style.animation = "fill 5s linear forwards";

    return new Promise((resolve) => {
      setTimeout(() => {
        currentSlider.style.animation = "";
        resolve();
      }, 5000);
    });
  }

  while (true) {
    await updateSlider(currentIndex);
    currentIndex++;
    if (currentIndex >= sliders.length) {
      currentIndex = 0;
    }
    heading.textContent = headings[currentIndex];
    heading.style.textAlign = "left";
    const screenWidth = window.innerWidth;
    if (screenWidth <= 62.5 * parseFloat(getComputedStyle(document.documentElement).fontSize)) {
      headingElement.style.textAlign = "center";
  } else {
      headingElement.style.textAlign = "left";
  }
    description.textContent = descriptions[currentIndex];
    image.src = images[currentIndex];
  }
});


var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};
TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  var wrappedText = '<mark>' + this.txt + '</mark>';

  var combinedText = 'Your new world<br>in ' + wrappedText;

  var defaultTextElement = document.querySelector('.default-text');
  if (defaultTextElement) {
    defaultTextElement.innerHTML = combinedText;
  }

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};


window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #a8e7a881}";
  document.body.appendChild(css);
};


var wrappers = document.querySelectorAll(".tech__wrapper");

wrappers.forEach(function(wrapper) {
  var wrapping = wrapper.querySelector(".tech__wrapping");
  var plus = wrapping.querySelector(".tech__plus");
  var panel = wrapper.querySelector(".tech__panel");
  var isClicked = false;

  wrapping.addEventListener("click", function() {
    panel.classList.toggle("active");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

    if (isClicked) {
      plus.textContent = "+"; 
    } else {
      plus.textContent = "-"; 
    }
    isClicked = !isClicked;
  });
});



const currentTime = new Date();

const options = {
    timeZone: 'Europe/Amsterdam',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
};

const timeInDutchTimezone = currentTime.toLocaleString('en-US', options);

const liElement = document.getElementById("time");

liElement.textContent = "Netherlands: " + timeInDutchTimezone;