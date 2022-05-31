//references
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
    const html = `
    <li class="list-group-item text-light d-flex justify-content-between align-items-center">
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    list.innerHTML += html;
}

addForm.addEventListener('submit', e=> {
    e.preventDefault();
    const todo = addForm.add.value.trim();

    if(todo.length){    //if 1,2,3 then it will be true. If 0 will be false then wont work
        generateTemplate(todo);
        addForm.reset();
    }  
});

//delete todos
list.addEventListener('click', e=> {
    if (e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterTodos = term => {
    //Add filter class if not match
    Array.from(list.children)   
      .filter(todo =>  !todo.textContent.toLowerCase().includes(term))
      .forEach(todo => todo.classList.add('filtered'));

      //Remove filter class once matched again
      Array.from(list.children)   
      .filter(todo => todo.textContent.toLowerCase().includes(term))
      .forEach(todo => todo.classList.remove('filtered'));
};

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});

