// Animasi mengetik sendiri
const words = [
    { word: "HTML", color: "#F06529" },
    { word: "CSS", color: "#2965F1" },
    { word: "JAVASCRIPT", color: "#F0DB4F" },
];

let wordIndex = 0;
let charIndex = 0;
const typingSpeed = 100;

function typeWord() {
    const word = words[wordIndex];
    const color = word.color;

    if (charIndex < word.word.length) {
        const span = document.createElement("span");
        span.textContent = word.word.charAt(charIndex);
        span.style.color = color;

        document.querySelector(".changing-text").appendChild(span);

        charIndex++;
        setTimeout(typeWord, typingSpeed);
    } else {
        setTimeout(eraseWord, 7000);
    }
}

function eraseWord() {
    if (charIndex > 0) {
        const textContainer = document.querySelector(".changing-text");
        textContainer.removeChild(textContainer.lastChild);
        charIndex--;
        setTimeout(eraseWord, typingSpeed / 2);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeWord, 1000);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(typeWord, 7000);
});

function submitYourName() {
    var guest = document.getElementById("yourName").value;

    document.getElementById("guestWelcome").innerHTML = "Hi, "+guest+"! Welcome to my website :)";
    document.getElementById("bgYourName").style.display="none";
}

document.getElementById('homeLink').addEventListener('click', function(event) {
    event.preventDefault(); // Untuk mencegah aksi bawaan dari tautan

    var targetElement = document.getElementById('home');
    targetElement.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('aboutLink').addEventListener('click', function(event) {
    event.preventDefault(); // Untuk mencegah aksi bawaan dari tautan

    var targetElement = document.getElementById('about');
    targetElement.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('messageLink').addEventListener('click', function(event) {
    event.preventDefault(); // Untuk mencegah aksi bawaan dari tautan

    var targetElement = document.getElementById('messageSite');
    targetElement.scrollIntoView({ behavior: 'smooth' });
});

function submitMessage() {
    var name = document.getElementById("nameInput").value;
    var birth = document.getElementById("birthInput").value;
    var male = document.getElementById("boyRadio").checked;
    var female = document.getElementById("girlRadio").checked;
    var email = document.getElementById("messageField").value;

    var gender = male ? "Male" : female ? "Female" : "";

    var resultMessage = "Name: " + name + "<br>";
    resultMessage += "Birth: " + birth + "<br>";
    resultMessage += "Gender: " + gender + "<br>";
    resultMessage += "Email: " + email;

    if(name == "" || birth == "" || email == "") {
        alert("Please input all the fields");
    } else if (!male && !female) {
        alert("Please input all the fields");
    } else {
        document.getElementById("resultMessage").innerHTML = resultMessage;
    }
}