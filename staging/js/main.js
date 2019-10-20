const contactForm = document.querySelector('.contact-form')
const ctas = document.querySelectorAll('.cta')
const closeFormOverlay = document.querySelector('.close-form-overlay')


function openOverlay () {
    contactForm.classList.add('show')
}

function closeOverlay () {
    contactForm.classList.remove('show')
}

// click on cta
ctas.forEach(cta => cta.addEventListener('click', openOverlay))

// click on close
closeFormOverlay.addEventListener('click', closeOverlay)
