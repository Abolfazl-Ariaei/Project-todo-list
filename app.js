const date = document.querySelector('.input__date');
const text = document.querySelector('.input__todo');
const btninput = document.querySelector('.click__input');
const inputwork = document.querySelector('#input__todo_text');
const btnedit = document.querySelectorAll('.but__edit');
const btndelet = document.querySelectorAll('.but__delet');
const heder = document.querySelector('.sections');

btninput.addEventListener('click', (e) => {
    e.preventDefault();
    const todoText = text.value;
    if (!todoText) {
        alert('not value');
    } else {
        const taks_al = document.createElement('div');
        taks_al.classList.add('todo');

        const taks_contanet = document.createElement('input');
        taks_contanet.classList.add('input__todo_text');

        const acshondeldetedeit = document.createElement('div');
        acshondeldetedeit.classList.add('delet__edit');

        const edit = document.createElement('button');
        edit.classList.add("edit");
        const deletes = document.createElement('button');
        deletes.classList.add("delet");
        // appendchild
        acshondeldetedeit.appendChild(edit)
        acshondeldetedeit.appendChild(deletes)
        taks_al.appendChild(taks_contanet);
        heder.appendChild(taks_al);
        taks_al.appendChild(acshondeldetedeit)

        // text content
        taks_contanet.value = todoText;
        edit.textContent = 'edit';
        deletes.textContent = 'delete';

        deletes.addEventListener('click', (e) => {
            taks_al.style.display = 'none';
        });
        edit.addEventListener('click', (e) => {
            if (edit.innerText == 'edit') {
                taks_contanet.focus();
                edit.textContent = 'seve';
            } else {
                edit.textContent = 'edit';
            };
        });
    }
});

