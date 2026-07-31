function showLetter() {
    const letter = document.getElementById("letter");

    if (letter.style.display === "none" || letter.style.display === "") {
        letter.style.display = "block";
        letter.style.animation = "fadeIn 1s ease";
    } else {
        letter.style.display = "none";
    }
}
function finalSurprise() {
    document.body.innerHTML = `
    <div style="
        min-height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        text-align:center;
        background:linear-gradient(135deg,#ff4b91,#8b5cf6);
        color:white;
        font-family:Arial,sans-serif;
        padding:30px;
    ">
        <div>
            <h1>❤️ Happy National Girlfriend's Day ❤️</h1>

            <h2>To My Babeee 💖</h2>

            <p style="font-size:22px;line-height:1.8;">
                Thank you for being the best part of my life.<br><br>

                From our first classroom interaction...
                <br>
                "@ndi b@ndi sh@ndi..." 😄😭
                <br><br>

                To our first meeting on 31 December 2024...
                <br><br>

                And to our beautiful relationship that began on
                <b>20 September 2025</b> ❤️🫶
                <br><br>

                Every memory with you is my favorite memory.
                <br><br>

                No matter how far apart we are,
                my heart will always choose you.
                <br><br>

                <b>I Loveeeeee Youuuuu Forever ❤️🥰🧿</b>
            </p>

            <h2>— Your Azeeb Insan 🫣</h2>
        </div>
    </div>
    `;
}
function playMusic() {
    let music = new Audio("arctic_monkey_-_i_wanna_be_yours_(mp3.pm)-[AudioTrimmer.com].mp3");
    music.play();
}
