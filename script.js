window.addEventListener("DOMContentLoaded", () => {

    const music = document.getElementById("bgMusic");

    music.volume = 0.5;

    document.addEventListener("click", () => {
        music.play();
    }, { once: true });

    // Confetti
    function createConfetti() {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.background = `hsl(${Math.random()*360},100%,60%)`;
        confetti.style.animationDuration = (Math.random()*3+2) + "s";
        confetti.style.width = (Math.random()*8+5) + "px";
        confetti.style.height = confetti.style.width;

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }

    setInterval(createConfetti, 120);

});