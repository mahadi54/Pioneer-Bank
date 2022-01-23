let input = document.querySelector('todo-list-input')
let button = document.querySelector('todo-list-add-btn')
let form = document.getElementById('form')


button.addEventListener('click', addSubmit)

function addSubmit(){
    form.addEventListener('submit', function(e){
        e.preventDefault();
        let value = input.value;
        if(value){
            const todoDiv = document.createElement('div')
            todoDiv.classList.add('form-check')
            const i = document.createElement('i')
            i.classList.add('remove  fas fa-trash-alt')
            const li = document.createElement('li')
            li.appendChild(todoDiv)
            li.appendChild(i)

            todoDiv.innerHTML = '<label class="form-check-label"> <input class="checkbox" type="checkbox" checked=""> For what reason would it be advisable for me to think. <i class="input-helper"></i></label> </div>'
           
      
    
            const label = document.createElement('label')
            label.classList.add('form-check-label')
            todoDiv.appendChild(label)
    
            const inner_input = document.createElement('input')
            inner_input.classList.add('checkbox')
            inner_input.type = 'checkbox';
            inner_input.innerText = input.value;
    
            const inner_i = document.createElement('i')
            i.classList.add('input-helper')
    
            label.appendChild(inner_input)
            label.appendChild(inner_i)
            
    
        }
    })

}

