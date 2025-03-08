function toggleMenu() {
    const nav = document.querySelector('nav ul.head-li');
    const hamburger = document.querySelector('.hamburger');
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
}

let currentSlide = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const slideTexts = document.querySelectorAll('.slide-text');

function showSlide(index) {
    if (index >= slides.children.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.children.length - 1;
    } else {
        currentSlide = index;
    }
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
    animateText();
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function goToSlide(index) {
    showSlide(index);
}

function updateDots() {
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

function animateText() {
    slideTexts.forEach((text) => {
        text.style.opacity = 0;
    });
    slideTexts[currentSlide].style.opacity = 1;
    slideTexts[currentSlide].style.animation = 'slideTextAnimation 1s ease-in-out forwards';
}

// Auto-play the slider (optional)
setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Initialize the first slide's text
animateText();


document.addEventListener('DOMContentLoaded', function() {
    const contents = document.querySelectorAll('#about > div[class^="about-content"]');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function updateButtons() {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === contents.length - 1;
    }

    function showContent(index) {
        contents.forEach((content, i) => {
            content.style.display = i === index ? 'flex' : 'none';
        });
        currentIndex = index;
        updateButtons();
    }

    showContent(0); // Show the first content initially

    nextBtn.addEventListener('click', () => {
        if (currentIndex < contents.length - 1) {
            showContent(currentIndex + 1);
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            showContent(currentIndex - 1);
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const clientStats = document.querySelectorAll('.client-stat');

    clientStats.forEach(stat => {
        const numberElement = stat.querySelector('.display-2');
        let targetNumber = parseInt(numberElement.textContent);
        let currentNumber = 0;
        let intervalId; // To store the interval ID

        function animateNumber() {
            if (currentNumber < targetNumber) {
                currentNumber++;
                numberElement.textContent = currentNumber;
            } else {
                clearInterval(intervalId); // Stop the interval when target is reached
                setTimeout(() => { // Reset after a delay
                    currentNumber = 0;
                    numberElement.textContent = currentNumber;
                    intervalId = setInterval(animateNumber, 50); // Restart animation
                }, 2000); // Delay before restart (2 seconds)
            }
        }

        intervalId = setInterval(animateNumber, 50); // Start the animation with an interval of 50ms
    });
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    // Log the form data to the console
    console.log('Form Data:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Service:', service);
    console.log('Message:', message);

    // Display a pop-up message
    alert('Thank you for contacting us! We will get back to you soon.');

    // Optionally, reset the form after submission
    document.getElementById('contactForm').reset();
});