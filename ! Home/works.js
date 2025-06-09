function scrollDown() {
    window.scrollTo({
        top: 600,
        behavior: 'smooth'
    });
}

let deleting = false;

function typeWriting() {
    let i = 1;
    let x = 0;
    let text = {
        t1: "‎ human (optional)",
        t2: "‎ (hopefully full stack soon :pray:) web developer",
        t3: "‎ noob animator :D",
        t4: "n artist",
        t5: "n UX/UI designer",
    };

    let textOutput = text[`t${i}`];

    typeWriter();

    function typeWriter() {
        if (!deleting && x < textOutput.length) {
            document.getElementById("typeWritingJS").innerHTML += textOutput.charAt(x);
            x++;
            setTimeout(typeWriter, 150);
        } else if (!deleting && x === textOutput.length) {
            deleting = true;
            setTimeout(typeWriter, 3000);
        } else if (deleting && x > 0) {
            document.getElementById("typeWritingJS").innerHTML = textOutput.substring(0, x - 1);
            x--;
            setTimeout(typeWriter, 100);
        } else if (deleting && x === 0) {
            deleting = false;
            setTimeout(typeWriter, 200);

            if (i < 5) {
                i++;
            } else {
                i = 1;
            }

            textOutput = text[`t${i}`];
        }
    }
}

function typeLine() {
    if (document.getElementById("typeLineJS").innerHTML == "" || !deleting) {
        document.getElementById("typeLineJS").innerHTML = "|";
        setTimeout(typeLine, 500);
    } else {
        document.getElementById("typeLineJS").innerHTML = "";
        setTimeout(typeLine, 500);
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 700,
        behavior: 'smooth'
    });
};

typeWriting();
typeLine();