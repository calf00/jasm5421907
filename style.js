document.addEventListener("DOMContentLoaded", function() {
    const numberOfPetals = 1;

    function createPetal() {
        const petal = document.createElement("div");
        petal.className = "petal";
        petal.style.left = Math.random() * 100 + "vw";
        petal.style.animationDuration = Math.random() * 3 + 3 + "s";
        petal.style.animationDelay = Math.random() * 3 + "s";
        document.body.appendChild(petal);

        petal.addEventListener("animationend", function() {
            petal.parentElement.removeChild(petal);
        });
    }

    for (let i = 0; i < numberOfPetals; i++) {
        createPetal();
    }

    setInterval(function() {
        createPetal();
    }, 3000);
});
