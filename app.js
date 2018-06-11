let btn;
let container = document.getElementById('container');
let sumContainer = document.getElementById('sum-container');
let id = 0;
let array = [];

document.addEventListener('DOMContentLoaded', () => {
    //console.log('DOM Loaded')
    btn = document.getElementById('btn');
   
   
    btn.addEventListener('click', () => {
        //console.log('clicked');
        new Die ();
    });

});







class Die {
    constructor() {
        this.el = document.createElement('div');
        this.el.className = 'die';
        this.el.id = id;
        id++;
        this.roll();
        this.sumDice();
        //this.reRoll();
        this.el.addEventListener('click', () => {
            this.reRoll();
        })
        this.el.addEventListener('dblclick', () => {
            this.el.remove();
        })

    }
    roll() {
        let random = Math.floor(Math.random() * (7 - 1) + 1);
        //console.log(random)
        this.el.innerText = random;
        array.push(random);

        container.appendChild(this.el);
        //console.log(array);
    }
    sumDice() {
        console.log(array);
        let sum = array.reduce((acc, val) => {
            return acc + val;
        }, 0)
        sumContainer.innerText = sum;
    }
    reRoll() {
        let random = Math.floor(Math.random() * (7 - 1) + 1);
        //console.log(random)
        this.el.innerText = random;
    }
}

