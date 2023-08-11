// Make Monster Img Move on Click
let monsterImg = document.querySelector('.monster-image');
let monsterImgTransitions = ['transition1', 'transition2', 'transition3', 'transition4'];
let monsterImgTransitionsPosition = 0;
let maxHealth = 24;

monsterImg.addEventListener("click", (e) => {
    hit();
    if (monsterImgTransitionsPosition == 4) {
        monsterImgTransitionsPosition = 0;
        for (let i = 0 ; i < monsterImgTransitions.length; i++) {
            monsterImg.classList.remove(monsterImgTransitions[i]);
        }
        cry();
    }
    monsterImg.classList.add(monsterImgTransitions[monsterImgTransitionsPosition]);
    monsterImgTransitionsPosition++;

    reduceHealth();
})

// // Scale Icon Transition
monsterImg.addEventListener("mousedown", scaleSwordIcon);
monsterImg.addEventListener("mouseup", scaleSwordIcon);

// Select Monster Health 
let healthCounter = 4;
function reduceHealth () {
    let monsterHealth = document.querySelector('.damaged-health');
    monsterHealth.style.width = `${healthCounter}rem`;
    healthCounter += 4;
}

// Play Cry when health is zero
function cry () {
    let cryAdudio = document.querySelector('.cry');
    cryAdudio.load();
    cryAdudio.playbackRate = 0.5;
    cryAdudio.play();
}

// Play Cry when health is zero
function hit () {
    let hitAudio = document.querySelector('.hit');
    hitAudio.load();
    hitAudio.playbackRate = 1.5;
    hitAudio.play();
}

// Scale Sword Icon 
function scaleSwordIcon() {
    let swordIcon = document.querySelector('.sword');
    swordIcon.classList.toggle('active');
}

// Scale Sword Icon 
// function scaleSpellIcon() {
//     let spellIcon = document.querySelector('.spell');
//     spellIcon.classList.toggle('active');
// }