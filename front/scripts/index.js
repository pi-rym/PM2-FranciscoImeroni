const carouselContainer = document.querySelector('.carousel-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = document.querySelectorAll('.carousel-slide');

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

const moviesContainer = document.getElementById("movies-container")

$.get("https://students-api.2.us-1.fl0.io/movies", (data) => {
  renderCards(data)
});

const renderCards = (data) => {
  data.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("card")

    const title= document.createElement("h3");
    title.classList.add("card-title");
    title.innerHTML = movie.title;

    const poster = document.createElement("img");
    poster.classList.add("card-imaage");
    poster.src = movie.poster;

    const year = document.createElement("p")
    year.classList.add("card-text");
    year.innerHTML = movie.year;

    card.appendChild(poster);
    card.appendChild(title);
    card.appendChild(year);

    moviesContainer.appendChild(card);
  });
}