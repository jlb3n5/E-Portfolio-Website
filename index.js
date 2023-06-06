// template_0kddcol
// service_rrwuk7q
// tHEjC44oqZetJRezw

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"

    emailjs
        .sendForm(
            'service_rrwuk7q',
            'template_0kddcol',
            event.target,
            'tHEjC44oqZetJRezw'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible")
            success.classList += " modal__overlay--visible"
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible")
            alert(
                "The email service is temporarily unavailable. Please contact me directly on JustinLBalino@gmail.com"
            )
        })

}