// Bank some good vibes options
const vibes = [
    "... and you are awesome!",
    "... have a wonderful day!",
    "... and you got this!",
    "... and so is this puppy! 🐶"
];

// choose a random good vibe
var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

// display a good vibe
document.querySelector(".vibe").append(vibe);
// Do not use querySelectorAll