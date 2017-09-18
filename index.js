import chalk from 'chalk';
import { get, emojify } from 'node-emoji';

const input = document.getElementById('emoji-input');

input.addEventListener("input", function (e) {
    this.value = emojify(this.value);
});
