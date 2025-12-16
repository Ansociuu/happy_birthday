    function showSurprise() {
        alert("🎂 Chúc bạn tuổi mới luôn cười nhiều hơn, thành công hơn và hạnh phúc hơn nhé! 💖🎉");
        createBalloons();
    }

    function createBalloons() {
        for (let i = 0; i < 20; i++) {
            let balloon = document.createElement("div");
            balloon.className = "balloon";
            balloon.style.left = Math.random() * 100 + "vw";
            balloon.style.background = randomColor();
            balloon.style.animationDuration = 3 + Math.random() * 3 + "s";
            document.body.appendChild(balloon);

            setTimeout(() => {
                balloon.remove();
            }, 6000);
        }
    }

    function randomColor() {
        const colors = ["#ff5e7e", "#ffd56b", "#6bcBef", "#a66bff", "#7bed9f"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("nav").classList.remove("hidden");
    document.getElementById("home").classList.remove("hidden");
    }, 10000);
