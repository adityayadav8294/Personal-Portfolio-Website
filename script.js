$(document).ready(function () {


    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });
    //smooth scroling
    $('a[href*="#"]').on('click', function (e) {

        e.preventDefault();

        $('html, body').animate({

            scrollTop: $($(this).attr('href')).offset().top,

        },
            500,
            'linear'
        );

    });


});




// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});


// Portfolio filter
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        // Remove active class from all buttons
        filterBtns.forEach(item => item.classList.remove('active'));

        // Add active class to clicked button
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});


function sendMail(){
        let params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            message: document.getElementById("message").value,
        }

        emailjs.send("service_09ccchd","template_xcc3t7u",params).then(alert ("Message sent successfully!!"))
} 


// Add focus effects to form inputs
        document.querySelectorAll('.input-group input, .input-group textarea').forEach(item => {
            item.addEventListener('focus', () => {
                item.parentElement.classList.add('focused');
            });

            item.addEventListener('blur', () => {
                if (item.value === '') {
                    item.parentElement.classList.remove('focused');
                }
            });

            // Check if inputs have values on page load (for browser autofill)
            if (item.value !== '') {
                item.parentElement.classList.add('focused');
            }
        });


document.getElementById('year').textContent = new Date().getFullYear();