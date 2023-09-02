'use strict';

//! Dom select
const date = document.querySelector('.input__date');
const text = document.querySelector('.input__todo');
const btninput = document.querySelector('.click__input');
const inputwork = document.querySelector('#input__todo_text');
const btnedit = document.querySelectorAll('.but__edit');
const btndelet = document.querySelectorAll('.but__delet');
const heder = document.querySelector('.sections');
const tricolor = document.querySelector('.tes');





//! random colors textcolor

const colors = ['#EC4839', '#EC7839', '#915Cf1', '#EC4899', '#6B7280', '#9B7280', '#1C7280', '#AC4311']

function random(value) {
    const random = Math.trunc(Math.random() * value.length);
    return value[random]
};


function createElemenTHtml() {
    //* create
    const taks_al = document.createElement('div');
    taks_al.classList.add('todo');
    const taks = document.createElement('div');
    taks.classList.add('tes');
    const taks_contanet = document.createElement('input');
    taks_contanet.classList.add('input__todo_text');
    const acshondeldetedeit = document.createElement('div');
    acshondeldetedeit.classList.add('delet__edit');
    const edit = document.createElement('button');
    edit.classList.add("edit");
    const deletes = document.createElement('button');
    deletes.classList.add("delet");


    //* appendchild
    acshondeldetedeit.appendChild(edit)
    acshondeldetedeit.appendChild(deletes)
    taks_al.appendChild(taks_contanet);
    heder.appendChild(taks_al);
    taks_al.appendChild(acshondeldetedeit)
    taks_al.prepend(taks)
}



btninput.addEventListener('click', function (e) {
    e.preventDefault();
    if (!text.value) return;
    createElemenTHtml();
})




