const common = function() {
    let header = document.createElement('div');
    header.classList.add('header')
    let title = document.createElement('div');
    title.textContent = "Ratatouille";
    title.classList.add('title');
    header.appendChild(title);

    let grid = document.createElement('div');
    grid.classList.add('grid-list');
    let g1 = document.createElement('div');
    g1.textContent = 'HOME';
    g1.id = 'g1';
    let g2 = document.createElement('div');
    g2.textContent = 'MENU';
    g2.id = 'g2';
    let g3 = document.createElement('div');
    g3.textContent = 'CONTACT';
    g3.id = 'g3';


    grid.appendChild(g1);
    grid.appendChild(g2);
    grid.appendChild(g3);

    header.appendChild(grid);

    return {header, g1, g2, g3};
};

export { common };

export default function () {

    let div = document.createElement('div');
    div.classList.add('home');
    //head
    let temp = common();
    temp.g1.classList.add('the-one');
    div.appendChild(temp.header);

    //middle
    let mid = document.createElement('div');
    mid.classList.add('middle');
    let mid1 = document.createElement('div');
    let mid2 = document.createElement('div');

    let mid3 = document.createElement('div');
    mid3.textContent = 'This Is Just For Fun';
    mid3.classList.add('mid-fun');

    mid1.textContent = 'This Restuarant is truly awesome';
    mid2.textContent = "It's owner is really cool too. And no, the chefs aren't rats";
    mid2.classList.add('mid');
    mid.appendChild(mid1);
    mid.appendChild(mid2);
    mid.appendChild(mid3);

    div.appendChild(mid);
    
    //footer
    let footer = document.createElement('div');
    footer.classList.add('footer')
    footer.innerHTML = 'Photo by <a href="https://unsplash.com/@elenephotography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Elene Photography</a> on <a href="https://unsplash.com/photos/black-ipad-on-brown-wooden-table-b026zUbgH6A?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';

    div.appendChild(footer);

    return div;
};