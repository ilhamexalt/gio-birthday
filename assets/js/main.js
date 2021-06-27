const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        splash.classList.add('.display-none');
    }, 2000);
})


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});
sr.reveal('.display-3', {});
sr.reveal('.display-4', {});
sr.reveal('.display-5', {});
sr.reveal('.image', { delay: 400 });
sr.reveal('.prokes', { delay: 400 });
sr.reveal('.info', { interval: 200 });
sr.reveal('.testimoni', {});



