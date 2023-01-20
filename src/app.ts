import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;


// docs.push(docTwo);docOne = new Invoice("yoshi", "webwork", 240);
// docTwo = new Payment("Mario", 'plumbing work', 100);

// let docs: HasFormatter[]=[];

// docs.push(docOne);

// console.log(docs);

// const invOne = new Invoice("mario", "work on Marioworld", 400);
// const invTwo = new Invoice("Luigi", "Luigi.com work", 250)

// let invoices: Invoice[]= [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv=>{
//   console.log(inv.client, inv.amount, inv.format());
// });

const form = document.querySelector(".new-item-form") as HTMLFormElement;

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event)=> {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === 'invoice'){
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
  }
  console.log(doc);
});
