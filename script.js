function showLetter() {
    const letter = document.getElementById("letter");

    if (letter.style.display === "none" || letter.style.display === "") {
        letter.style.display = "block";
        letter.style.animation = "fadeIn 1s ease";
    } else {
        letter.style.display = "none";
    }
}
