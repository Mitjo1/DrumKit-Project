// Store the audio files and their corresponding key codes in an object
const sounds = {
  w: new Audio("sounds/tom-1.mp3"),
  a: new Audio("sounds/tom-2.mp3"),
  s: new Audio("sounds/tom-3.mp3"),
  d: new Audio("sounds/tom-4.mp3"),
  j: new Audio("sounds/snare.mp3"),
  k: new Audio("sounds/crash.mp3"),
  l: new Audio("sounds/kick-bass.mp3"),
};

// Function to play the corresponding sound for a given key
function playSound(key) {
  if (sounds[key]) {
    sounds[key].currentTime = 0;
    sounds[key].play();
  }
}

// Add event listeners to the buttons and document for keyboard presses
const buttons = document.querySelectorAll(".drum");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const buttonKey = this.textContent;
    playSound(buttonKey);
  });
}

document.addEventListener("keydown", function (event) {
  const key = event.key;
  playSound(key);
});
