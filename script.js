/* =========================================================
   IT11A OFFICERS
========================================================= */

const it11a = [

    {
        image: "IT11A/MayorA.png",
        position: "MAYOR",
        name: "BENITEZ, JASMINE",
        quote: "Happy Teacher's Day po Ma'am/Sir! AI might have all the answers, but it will never have your patience, heart, or ability to tolerate us. Thank you for shaping who we are as people, that is something no technology can ever replicate. Wishing you all the most blessings of the Most High!! 🤍"
    },

    {
        image: "IT11A/viceA.jpg",
        position: "VICE MAYOR",
        name: "SERRANO, DIANA",
        quote: "Happy Teacher’s Day po sa lahat ng teachers! Thank you po for always being patient and understanding sa amin. Thank you rin po for everything, and we hope you know how much we appreciate you as our professors. Happy Teacher’s Day po! ❤️"
    },

    {
        image: "IT11A/SecretaryA.jpg",
        position: "SECRETARY",
        name: "CRUZ, BIANCA",
        quote: "Thank you for your patience and guidance in teaching us. We truly appreciate your efforts 🫶🏻",
        quote2: "p.s don’t forget to eat your vegetables po 🥦 stay healthy and strong!"
    },

    {
        image: "IT11A/TreasurerA.jpg",
        position: "TREASURER",
        name: "DDALUNSUNG, ISAIAH",
        quote: "Thank you for your patience and guidance in teaching us. We truly appreciate your efforts ma'am/sir. 🫶🏻🙂🙂"
    },

    {
        image: "IT11A/PIOA.jpg",
        position: "P.I.O",
        name: "MANAPAT, DREDD",
        quote: "Thank you for being an exceptional teacher who turns every class into a welcoming place to learn, grow, and feel valued.",
        quote2:"ps. wag po kayo makikinig sa baliw"
    },

    {
        image: "IT11A/EscortA.jpg",
        position: "ESCORT",
        name: "MARCOS, FERMAR",
        quote: "Thank you po for being so patient and kind, and for always helping us learn. Happy Teachers' Day po ma’am/sir!"
    },

    {
        image: "IT11A/MuseA.jpg",
        position: "MUSE",
        name: "BRASILEÑO, JANE",
        quote: "Happy Teacher’s Day po! To all our teachers, thank you for being part of our journey and for helping us become better not just as students, but also as individuals. You deserve all the love and appreciation today and always, Ma’am and Sir! God bless you all po! ❤️"
    },

];


/* =========================================================
   IT11B OFFICERS
========================================================= */

const it11b = [

    {
        image: "IT11B/MayorB.jpg",
        position: "MAYOR",
        name: "BAYLON, MIKE",
        quote: "Happy Teacher's Day Ma'am/Sir! A special day we celebrate just for you Ma'am/Sir! your expertise, love, and ability to teach us. Thank you for everything you do for us. We hope you have a wonderful day!💙"
    },

    {
        image: "IT11B/ViceB.jpg",
        position: "VICE MAYOR",
        name: "PEREZ, MARK",
        quote: "It’s always a pleasure learning from someone who puts so much effort into helping us improve. Thank you for being there to guide us along the way, Sir!",
        quote2: "P.S. The shades and side cap say it all --- just keeping it cool."
    },

    {
        image: "IT11B/SecretaryB.jpg",
        position: "SECRETARY",
        name: "BLAS, MARIAN",
        quote: "To our teachers: thank you for making us academically stressed but emotionally educated."
    },

    {
        image: "IT11B/TreasurerB.jpg",
        position: "TREASURER",
        name: "OCAMPO, CEAN",
        quote: "To the world, you may be just a teacher, but to your students, you are a hero. Happy Teacher's Day po! ❤️🤗."
    },

    {
        image: "IT11B/PIOB.jpg",
        position: "P,I.O",
        name: "RUSTIA, RHOD",
        quote: "Thank you for being friend and also teacher to us we love you ma’am stay what you are :))"
    }

];


/* =========================================================
   CURRENT STATE
========================================================= */

let currentGroup = [];
let currentOfficer = 0;


/* =========================================================
   SCREEN CONTROL
========================================================= */

function showScreen(id) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const target = document.getElementById(id);

    if (target) {
        target.classList.add("active");
    }
}


/* =========================================================
   START
========================================================= */

function startProgram() {

    const music = document.getElementById("background-music");

    music.volume = 0.4;

    music.play()
        .then(() => {
            console.log("Music started!");
        })
        .catch((error) => {
            console.error("Music could not play:", error);
        });

    showScreen("it11a-title");
}

function toggleMusic() {

    const music = document.getElementById("background-music");
    const button = document.getElementById("music-button");

    if (music.paused) {

        music.play()
            .then(() => {
                button.textContent = "♫";
            })
            .catch((error) => {
                console.error("Music could not play:", error);
            });

    } else {

        music.pause();

        button.textContent = "♪";
    }
}

/* =========================================================
   START IT11A
========================================================= */

function startIT11A() {

    currentGroup = it11a;

    currentOfficer = 0;

    showOfficer();

}


/* =========================================================
   START IT11B
========================================================= */

function startIT11B() {

    currentGroup = it11b;

    currentOfficer = 0;

    showOfficer();

}


/* =========================================================
   SHOW OFFICER
========================================================= */

function showOfficer() {

    const officer = currentGroup[currentOfficer];

    if (!officer) {
        return;
    }


    document.getElementById("officer-image").src =
        officer.image;

    document.getElementById("officer-image").alt =
        officer.name;

    document.getElementById("officer-position").textContent =
        officer.position;

    document.getElementById("officer-name").textContent =
        officer.name;

    document.getElementById("officer-quote").textContent =
        `"${officer.quote}"`;

   const quote2 = document.getElementById("officer-quote2");

   if (officer.quote2) {
       quote2.textContent = officer.quote2;
       quote2.style.display = "block";
   } else {
       quote2.textContent = "";
       quote2.style.display = "none";
   }


    document.getElementById("officer-number").textContent =
        `${String(currentOfficer + 1).padStart(2, "0")} / ${String(currentGroup.length).padStart(2, "0")}`;


    const nextButton =
        document.getElementById("officer-next");


    if (currentOfficer === currentGroup.length - 1) {

        nextButton.textContent = "CONTINUE →";

    } else {

        nextButton.textContent = "NEXT →";

    }


    showScreen("officer-screen");
}


/* =========================================================
   NEXT OFFICER
========================================================= */

function nextOfficer() {

    currentOfficer++;

    if (currentOfficer < currentGroup.length) {

        showOfficer();

        return;
    }


    /*
        If we just finished IT11A,
        move to IT11B introduction.
    */

    if (currentGroup === it11a) {

        showScreen("it11b-title");

        return;
    }


    /*
        If we just finished IT11B,
        move to the final Teacher's Day message.
    */

    if (currentGroup === it11b) {

        showScreen("finale-screen");

        return;
    }

}


/* =========================================================
   KEYBOARD SUPPORT
========================================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowRight" || event.key === "Enter") {

        const officerScreen =
            document.getElementById("officer-screen");

        if (officerScreen.classList.contains("active")) {

            nextOfficer();

        }

    }

});
