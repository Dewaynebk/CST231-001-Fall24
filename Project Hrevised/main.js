// Sticky Header Functionality
$(document).ready(function() {
    // Make the header sticky as users scroll down the page
    // Customize the element to make sticky by changing '.sticky-header'
    $('.sticky-header').sticky();
});

// Slick Slider Implementation for the Apparel Collection

$(document).ready(function() {
       
        // setup slick slider for apparel collection
        // options to customize autoplay speed, arrows, etc.
        $('.slider').slick({
            dots: true,             // Add dots for navigation
            infinite: true,         // Infinite scrolling
            speed: 500,             // Transition speed
            slidesToShow: 1,        // Number of slides to show at once
            autoplay: true,         // Auto-scroll feature
            autoplaySpeed: 2000     // Time between auto-scroll
        });

    // Array of background colors for each slide
    const backgroundColors = ['#eb3b7e', '#1f1c18', '#e09fb8'];

    // Change background color when the slide changes
    $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('body').css('background-color', backgroundColors[nextSlide]);
    });
});

// jQuery UI Accordion for Category Display
$(document).ready(function() {
    // Initialize accordion for displaying product categories
    $('#categories').accordion({
        collapsible: true,         // Allow sections to collapse
        active: false,             // Start with all sections collapsed
        heightStyle: "content"    // Adjust height based on content
    });
});

// Form Validation Example
$(document).ready(function() {
    // Example validation setup for a form (e.g., contact form)
    // Replace '#support-form' with your actual form ID
    $('#support-form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Your name must consist of at least 2 characters"
            },
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            message: {
                required: "Please enter a message",
                minlength: "Your message must consist of at least 10 characters"
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const updatesSection = document.getElementById('updates-section');

    // Fetch data from an external API (example: quotes API)
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            // Update the updates section with fetched data
            updatesSection.innerHTML = `
                <h3>Updates</h3>
                <blockquote>
                    "${data.content}" - <strong>${data.author}</strong>
                </blockquote>
            `;
        })
        .catch(error => {
            console.error('Error fetching updates:', error);
            updatesSection.innerHTML = '<p>Unable to load updates at this time.</p>';
        });
});

// Initialize Accordion in JavaScript 
$(document).ready(function () {
    $("#categories").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    });
});