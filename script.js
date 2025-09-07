// Create an array of sounds

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

//For each sound, create button, add class 'btn', update text, append to DOM
sounds.forEach((sound) => {

    //Create button
    const btn = document.createElement('button');

    //Add class of 'btn' to button element
btn.classList.add('btn');


//Stop all sounds first
stopSounds();
document.getElementById(sound).play();

//Add event listerner to button
btn.addEventListener('click', () => {
    document.getElementById(sound).play();
})

//Set button lavel text to  be the same as string value
btn.innerText = sound;

// Add button to DOM
document.getElementById('buttons').appendChild(btn);

});

//Helper Function
function stopSounds() {
    sounds.forEach((sound) => { 
        const snd = document.getElementByID(sound);

        snd.pause();
        snd.currentTime = 0;
});
}