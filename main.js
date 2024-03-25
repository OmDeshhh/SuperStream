const carousel = document.querySelector('.carousel');
let sliders = [];
let slideIndex = 0;

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }

    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    imgElement.src = movies[slideIndex].image;
    h1.textContent = movies[slideIndex].name;
    p.textContent = movies[slideIndex].des;

    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    sliders.push(slide);

    slide.addEventListener('click', function () {
        const videoFileName = movies[slideIndex].video; 
        if (videoFileName) {
            const videoSource = encodeURIComponent(videoFileName);
            window.location.href = `video.html?video=${videoSource}`;
        } else {
            console.error('Video file not found for this slide.');
        }
    });

    slide.addEventListener('mouseover', function () {
        slide.style.transform = 'scale(1.1)';
    });

    slide.addEventListener('mouseout', function () {
        slide.style.transform = 'scale(1)';
    });

    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }

    slideIndex++;
}
for (let i = 0; i <= 5; i++) { 
    createSlide();
}
setInterval(() => {
    createSlide();
}, 2000);