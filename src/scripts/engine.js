
const pianokeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

let mapedKeys =[];
let audio = new Audio("tunes")

const playTune = (key) => {
  audio.src = `src/tunes/${key}.wav`
  audio.play();
  // console.log(mapedKeys);
  const clickedkey = document.querySelector(`[data-key="${key}"]`); // 
  clickedkey.classList.add("active");
  setTimeout(() => {
    clickedkey.classList.remove("active");
  }, 150);
}  

pianokeys.forEach((key) => {
  // console.log(key.dataset.key);
  key.addEventListener("click", () => playTune(key.dataset.key));
  mapedKeys.push(key.dataset.key);

});

document.addEventListener("keydown",(e) => {
  if(mapedKeys.includes(e.key)){
    playTune(e.key);
  }
});

const handleVolume = (e)=>{
  audio.volume = e.target.value;
 
};

const showHideKeys = () => {
    pianokeys.forEach(key =>key.classList.toggle("hide"))
}

volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click",showHideKeys)


