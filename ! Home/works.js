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
        t1: "front-end dev | from Netherlands | 19yr old",
        t2: "i like to UX / UI design aswell :)",
        t3: "i also have interest in art & animations",
        t4: "im a human (optional)",
        t5: "i sometimes 3D model",
    };

    let textOutput = text[`t${i}`];

    typeWriter();

    function typeWriter() {
        if (!deleting && x < textOutput.length) {
            document.getElementById("typeWritingJS").innerHTML += textOutput.charAt(x);
            x++;
            setTimeout(typeWriter, 95);
        } else if (!deleting && x === textOutput.length) {
            deleting = true;
            setTimeout(typeWriter, 2750);
        } else if (deleting && x > 0) {
            document.getElementById("typeWritingJS").innerHTML = textOutput.substring(0, x - 1);
            x--;
            setTimeout(typeWriter, 30);
        } else if (deleting && x === 0) {
            deleting = false;
            setTimeout(typeWriter, 150);

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

let gridNr = 0;

autoSelect();

function autoSelect() {
    let gridSelection = document.querySelector(`.selectButtonJS.sel`);

    if (gridSelection) {
        if (gridSelection.classList.contains('selectWork1')) {
            gridNr = 1;
        } else if (gridSelection.classList.contains('selectWork2')) {
            gridNr = 2;
        } else if (gridSelection.classList.contains('selectWork3')) {
            gridNr = 3;
        }
    }
};

function selectWork(select) {
    let gridSelection = document.querySelector(`.${select}`);

    if (!gridSelection.classList.contains('sel')) {
        removeAllSelectionWork();

        gridSelection.classList.add('primary');
        gridSelection.classList.add('sel');
        gridSelection.classList.remove('secondary');
        gridSelection.classList.remove('unsel');
    }
};

function removeAllSelectionWork() {
    let gridSelection = document.querySelector('.sel')
    if (gridSelection) {
        gridSelection.classList.remove('primary');
        gridSelection.classList.remove('sel');
        gridSelection.classList.add('secondary');
        gridSelection.classList.add('unsel');
    }
};

let findGrid = document.querySelector('.grid');

let gridDesign1HTML = `
<div class="webDesign" onclick="window.open('../WD pages/wd1.html','_self');">
    <img src="../Images/webDesigns/WD-1.png" alt="project image">
    <div class="info">
        <div>
            <p class="robotoBold">The Dutch Store website rework | Figma Design</p>
            <p class="p2">Apr. 25, 2025</p>
        </div>
        <img src="../Icons/arrow.png" alt="arrow icon">
    </div>
</div>

<div class="webDesign" onclick="window.open('../WD pages/wd2.html','_self');">
    <img src="../Images/webDesigns/WD-2.png" alt="project image">
    <div class="info">
        <div>
            <p class="robotoBold">VCS Website revamped</p>
            <p class="p2">Apr. 14, 2025</p>
        </div>
        <img src="../Icons/arrow.png" alt="arrow icon">
    </div>
</div>

<div class="webDesign" onclick="window.open('../WD pages/wd3.html','_self');">
    <img src="../Images/webDesigns/WD-3.png" alt="project image">
    <div class="info">
        <div>
            <p class="robotoBold">Steppets</p>
            <p class="p2">Nov. 20, 2023</p>
        </div>
        <img src="../Icons/arrow.png" alt="arrow icon">
    </div>
</div>
`

function setGrid(gridNum) {
    if (gridNum == 1) {
        findGrid.innerHTML = gridDesign1HTML;
        gridNr = 1;
    } else if (gridNum == 2) {
        findGrid.innerHTML = '<p>work 2</p>'
        gridNr = 2;
    } else if (gridNum == 3) {
        findGrid.innerHTML = '<p> work 3</p>'
        gridNr = 3;
    }
    console.log(gridNr);
};

setGrid(gridNr);

// findGrid.innerHTML = gridDesign1HTML;