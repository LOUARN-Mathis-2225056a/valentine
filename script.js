const my_type = new Howl({
    src: ['music/my_type.mp3']
    });
const cupid = new Howl({
    src: ['music/cupid.mp3']
});
const gif = document.getElementById("gif");
let cupidPlaying = false;
let my_typePlaying = false;
const yes = document.getElementById("yes");
const no = document.getElementById("no");
let yesSize1 = 5;
let yesSize2 = 9;
yes.addEventListener("click", function (){
    try {
        cupid.stop();
        cupidPlaying = false;
    } catch (e) {
        console.log("la musique n'est pas déjà lancée");
    }
    if (!my_typePlaying){
        my_type.seek(128.5);
        my_type.play();
        my_typePlaying = true;
    }
    saidYes();
});

no.addEventListener("click", function (){
    try {
        my_type.stop();
        my_typePlaying = false;
    } catch (e) {
        console.log("la musique n'est pas déjà lancée");
    }
    if (!cupidPlaying){
        cupid.seek(20);
        cupid.play();
        cupidPlaying = true;
    }
    saidNo();
})

function saidNo(){
    yes.style.padding = "" + yesSize1.toString() +  "vh " + yesSize2.toString() +"vh";
    incrementSize();
    gif.setAttribute("src","/gif/no/"+getRandomString()+".gif");
}

function incrementSize(){
    yesSize1 = yesSize1 + 3
    yesSize2 = yesSize2 + 3
}

function saidYes() {
    gif.setAttribute("src","/gif/yes/mashle.gif");
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function getRandomString(){
    return getRandomInt(13).toString();
}