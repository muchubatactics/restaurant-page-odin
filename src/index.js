import './style.css';
  
import initial from './initial-page.js';
import menux from './menu.js';
import contactx from './contact.js';

document.getElementById('content').appendChild(initial());

const setupListeners = function(){
    let home = document.getElementById('g1');
    let menu = document.getElementById('g2');
    let contact = document.getElementById('g3');

    home.onclick = function() {
        if(Array.from(home.classList).includes('the-one')) return;
        document.querySelector("#content>div").remove();
        document.getElementById('content').appendChild(initial());
        setupListeners();
    };

    menu.onclick = function() {
        if(Array.from(menu.classList).includes('the-one')) return;
        document.querySelector("#content>div").remove();
        document.getElementById('content').appendChild(menux());
        setupListeners();
    };

    contact.onclick = function() {
        if(Array.from(contact.classList).includes('the-one')) return;
        document.querySelector("#content>div").remove();
        document.getElementById('content').appendChild(contactx());
        setupListeners();
    };
}

setupListeners();