import { common } from "./initial-page";
import ownerx from '../assets/owner.jpg';
import chefx from'../assets/chef.jpg';

export default function() {
    let div = document.createElement('div');
    div.classList.add('contact');

    let temp = common();
    temp.g3.classList.add('the-one');
    div.appendChild(temp.header);
    
    //middle
    let mid = document.createElement('div');
    mid.classList.add('con-mid');
    let table = document.createElement('div');
    table.classList.add('con-grid');
    const chef = new Image();
    const owner = new Image();
    chef.src = chefx;
    owner.src = ownerx;
    chef.classList.add('con-image');
    owner.classList.add('con-image');
 
    let text1 = document.createElement('div');
    text1.innerHTML = '<span class="con-title">Michael Jordan</span><br>Owner<br>+233-665-867<br>owner@ratatouille.com';
    let text2 = document.createElement('div');
    text2.innerHTML = '<span class="con-title">Remy a.k.a Little Chef</span><br>Chef<br>+133-565-757<br>chef@ratatouille.com';
    let v1 = document.createElement('div');
    v1.classList.add('vv');
    let v2 = document.createElement('div');
    v2.classList.add('vv');
 
    table.appendChild(owner);
    table.appendChild(v1);
    table.appendChild(text1);
    table.appendChild(chef);
    table.appendChild(v2);
    table.appendChild(text2);
 
    mid.appendChild(table);
    div.appendChild(mid);

    let footer = document.createElement('div');
    footer.classList.add('footer');
    footer.innerHTML = 'Photos by <a href="https://unsplash.com/@elenephotography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Elene Photography</a> on <a href="https://unsplash.com/photos/black-ipad-on-brown-wooden-table-b026zUbgH6A?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> and <a href="https://unsplash.com/@h7creatives?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Hunter Newton</a> on <a href="https://unsplash.com/photos/man-wearing-brown-jacket-txtUr7HOKrc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';

    div.appendChild(footer);
 

    return div;
}