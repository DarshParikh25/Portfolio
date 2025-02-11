const textElement = document.getElementById('typing-text');
const words = ['Developer', 'Designer'];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function type() {
    const currentText = words[wordIndex];
    textElement.textContent = currentText.substring(0, letterIndex + 1);
    letterIndex++;

    if (letterIndex === currentText.length + 1) {
        isDeleting = true;
        setTimeout(() => {
            erase();
        }, 1000);
    } else {
        setTimeout(type, 150);
    }
}

function erase() {
    const currentText = words[wordIndex];
    textElement.textContent = currentText.substring(0, letterIndex);
    letterIndex--;

    if (letterIndex === 1 && isDeleting) {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(() => {
            type();
        }, 500);
    } else {
        setTimeout(erase, 150);
    }
}

type();


let mybutton = document.getElementById("top-button");

window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mybutton.style.display = "block";
    }
    else{
        mybutton.style.display = "none";
    }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}