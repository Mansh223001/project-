let index = 0;
const banner = document.getElementById("banner");
const images = document.querySelectorAll(".banner img");
const total = images.length;

function showSlide() {
    banner.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    index = (index + 1) % total;
    showSlide();
}

function prevSlide() {
    index = (index - 1 + total) % total;
    showSlide();
}

setInterval(nextSlide, 3000); // Auto-slide every 3 seconds