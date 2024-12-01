document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        formResponse.innerHTML = "Thank you for contacting us! We will get back to you soon.";
        form.reset();
    });
});
