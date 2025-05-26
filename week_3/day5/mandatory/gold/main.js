boom = `./resource/sounds/boom.wav`;
clap = `./resource/sounds/clap.wav`;
hihat = `./resource/sounds/hihat.wav`;
kick = `./resource/sounds/kick.wav`;
openhat = `./resource/sounds/openhat.wav`;
ride = `./resource/sounds/ride.wav`;
snare = `./resource/sounds/snare.wav`;
tink = `./resource/sounds/tink.wav`;
tom = `./resource/sounds/tom.wav`;
let sounds = {
  boom: boom,
  clap: clap,
  hihat: hihat,
  kick: kick,
  openhat: openhat,
  ride: ride,
  snare: snare,
  tink: tink,
  tom: tom
};
let soundsNUM = {
  65: "boom",
  83: "clap",
  68: "hihat",
  70: "kick",
  71: "openhat",
  72: "ride",
  74: "snare",
  75: "tink",
  76: "tom"
};
function playSoundName(name) {
        console.log(name);
        let sound = sounds[name]
        let audio = new Audio(sound);
        audio.play();
}

let elements = document.querySelectorAll(".element");
elements.forEach((e)=>{
    e.addEventListener("click",(ev)=>{
        console.log(ev);
        let name = ev.currentTarget.dataset.sound
        playSoundName(name);
    })

})


document.addEventListener("keydown",(ev)=>{
       let code = ev.keyCode
       console.log(code);
       playSoundName(soundsNUM[code]);
    })