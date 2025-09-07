// Create an array of sounds

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

//For each sound, create button, add class 'btn', update text, append to DOM
sounds.forEach((sound) => {

    //Create button
    const btn = document.createElement('button');

    //Add class of 'btn' to button element
btn.classList.add('btn');

//Set button lavel text to  be the same as string value
btn.innerText = sound;

// Add button to DOM
document.getElementByID('buttons').appendChild(btn);

});