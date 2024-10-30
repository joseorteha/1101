document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado con éxito!');
});

document.querySelector('a[href="recuerdos.html"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.body.classList.add('fade-out');
    setTimeout(function() {
        window.location.href = "recuerdos.html";
    }, 500);
});


