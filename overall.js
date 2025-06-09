let skillScroll = JSON.parse(localStorage.getItem('skillScroll'));

function openSkill() {
    skillScroll = true;
    localStorage.setItem(`skillScroll`, JSON.stringify(skillScroll))

    console.log(JSON.stringify(skillScroll));
}

function scrollToSkills() {
    if (skillScroll) {
        window.scrollTo({
            top: 750,
            behavior: 'smooth'
        });
        skillScroll = false;
        localStorage.setItem(`skillScroll`, JSON.stringify(skillScroll));
    };
}

scrollToSkills();