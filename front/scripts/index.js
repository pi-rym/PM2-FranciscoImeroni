const axios = require("axios");
const renderCards = require("./RenderCards");
const carousel = require ("./MoviesCarousel")

const getFilms = require("./handler")

getFilms()






//carousel

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

setInterval(nextSlide, 12000);
//carousel end

const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/movies");
    const data = response.data;
    renderCards(data);
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
};



fetchData();