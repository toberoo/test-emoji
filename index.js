import chalk from 'chalk';
import { get, emojify } from 'node-emoji';

const cat = get('cat');
const taco = get('taco');

const input = document.getElementById('emoji-input');
const catButton = document.getElementById('cat-emoji');
const tacoButton = document.getElementById('taco-emoji');

catButton.innerHTML = cat;
tacoButton.innerHTML = taco;

catButton.addEventListener('click', (e) => {
    input.value = input.value + cat + ' ';
});

tacoButton.addEventListener('click', (e) => {
    input.value = input.value + taco + ' ';
});

input.addEventListener("input", function (e) {
    this.value = emojify(this.value);
});
