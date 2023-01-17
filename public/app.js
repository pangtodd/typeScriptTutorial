"use strict";
// const anchor = document.querySelector('a');
// // if(anchor){
// // console.log(anchor.href);
// // }
// console.log(anchor.href);
// const form = document.querySelector('form');
const form = document.querySelector(".new-item-form");
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
