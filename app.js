let button = document.getElementById(`die-generator`);
//console.log(button);
let container = document.getElementById(`die-container`);
//console.log(container);

button.addEventListener('click', () => {
    let contain = document.createElement('div');
    contain.className = 'heyo';
    container.appendChild(contain);
    contain.style.float = 'left'
    let die = new Die();
    contain.innerText = die.roll();

});

class Die {
    constructor(value) {
        this.value = randomVal(6,1);
    };
    roll() {
        return (this.value);
    };
};



// random number generator between 1-6
function randomVal(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
};
//console.log(randomVal(6,1));