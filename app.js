let navLinks = document.querySelectorAll(".navlink ul li");


// ======making active link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        for (let i = 0; i < navLinks.length; i++){
            navLinks[i].classList.remove('active');
        }
            link.classList.add('active');
    })
})

// changing the img and h1 of the home section

const imgArray = [
    {
        img : 'images/hero-bg-1.jpg',
        text : 'Revitalize your body, rejuvenate your spirit—welcome to wellness!',
    },
    {
        img : 'images/hero-bg-2.jpg',
        text : 'Where pain meets relief and movement becomes freedom!',
    },
    {
        img : 'images/hero-bg-3.jpg',
        text : 'Rebuild, restore, and rise stronger—together we can achieve your goals!!',
    },
]
let currentIndex = 0;
let currentImageIndex = 1;

const homeImage1 = document.querySelector(".hero-bg-img-1");
const homeImage2 = document.querySelector(".hero-bg-img-2");
const homeHeader = document.querySelector(".hero-container .hero-text h1");

const heroChanger = () => {
    const nextImageIndex = (currentImageIndex === 1) ? 2 : 1;
    const nextImage = (nextImageIndex === 1) ? homeImage1 : homeImage2;
    const currentImage = (nextImageIndex === 1) ? homeImage2 : homeImage1;

nextImage.src = imgArray[currentIndex].img;
nextImage.style.opacity = 0;

setTimeout(() => {
    currentImage.style.opacity = 0;
    nextImage.style.opacity = 1;
    homeHeader.style.opacity = 0;
    homeHeader.innerHTML = imgArray[currentIndex].text;
    homeHeader.style.opacity = 1;
    currentImageIndex = nextImageIndex;
    currentIndex = (currentIndex + 1) % imgArray.length;
  }, 0);
}

setInterval(heroChanger, 5000);

// let currentIndex = 0
// const heroChanger = () => {
//     homeImage.setAttribute('src', imgArray[currentIndex].img);
//     homeHeader.innerHTML = imgArray[currentIndex].text;
//     currentIndex = (currentIndex + 1) % imgArray.length;
// }

// const heroChanger = () => {
//     randomImage = Math.floor(Math.random() * imgArray.length);
//     homeImage.style.opacity = 0; /* set the opacity to 0 before changing the image */
//     homeHeader.style.opacity = 0; /* set the opacity to 0 before changing the text */
//     setTimeout(() => {
//       homeImage.setAttribute('src', imgArray[randomImage].img);
//       homeHeader.innerHTML = imgArray[randomImage].text;
//       homeImage.style.opacity = 1; /* set the opacity to 1 after changing the image */
//       homeHeader.style.opacity = 1; /* set the opacity to 1 after changing the text */
//     }, 3000); /* use setTimeout to ensure the opacity is set to 0 before changing the image/text */
//   }
setInterval(heroChanger, 5000);