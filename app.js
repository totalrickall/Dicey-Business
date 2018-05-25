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
    console.log(die);

});

class Die {
    constructor(value) {
        this.value = randomVal(7,1);
    };
    roll() {
        return (this.value);
    };
};



// random number generator between 1-6
function randomVal(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
};
//console.log(randomVal(7,1));

// Create a sumDice function and a button that triggers it. It should add up the current face value of all the dice on the page and display an alert with the sum.
// Add a feature where clicking on a die on the page causes just that one die to roll, updating its face value
// Add a feature where double clicking on a die on the page causes that die to be removed from the page
// Be careful to take appropriate measures so that the sumDice function still reports the correct sum after you delete a die. You need to not only remove the on-screen representation of the Die on the screen, but also remove the Die object from the array as well.