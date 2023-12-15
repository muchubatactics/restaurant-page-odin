import { common } from "./initial-page";



export default function() {
    let div = document.createElement('div');
    div.classList.add('menu');

    let temp = common();
    temp.g2.classList.add('the-one');
    div.appendChild(temp.header);

    let mid = document.createElement('div');
    mid.classList.add('middle');
    mid.textContent = 'COMING SOON';
    div.appendChild(mid);

   
    return div;
}