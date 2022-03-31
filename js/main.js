document.querySelector('#addItem').onclick = function(){
    if(document.querySelector('#newTask').value.length == 0){
        alert("Cần điền việc cần làm ...")
    }

    else{
        document.querySelector('#todo').innerHTML += `
            <li class="task">
                <span id="taskname">
                    ${document.querySelector('#newTask').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>

                <button class="check">
                    <i class="fa fa-check"></i>
                </button>
            </li>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}