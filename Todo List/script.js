const taskdata=[];
function addtask(){
    const task=document.getElementById('task').value;
    if(!task){
        Swal.fire({
            title: "Error",
            text: "Please Enter Your Task",
            icon: "error"
          });
    }else
    {
        taskdata.push(task);
        console.log()
        showdata();
    }
}
function showdata(){
    console.log(taskdata);

    const todocontainerchild=document.getElementById('todo-container-parent');
    todocontainerchild.innerHTML="";
    taskdata.forEach((item,index)=>{
        const value=item;
        const data=` 
        <span id="${item}">${item}</span> 
        <i class="fa fa-trash-o" style="font-size:24px;color:white" onclick="deletetask(${index})"></i><br>`;
        
        todocontainerchild.innerHTML+=data;
    });
}

function deletetask(item){
    console.log(item)
    delete taskdata[item];
    showdata()
}