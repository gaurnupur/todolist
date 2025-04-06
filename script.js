function fun(){
    const newtask=document.createElement('li')
    const task=document.getElementById('tasklist')
    task.appendChild(newtask)
    newtask.textContent=document.getElementById('input').value
    document.getElementById('input').value=""
    deletetask(newtask)


    //adding delete butt in every task added

}

function deletetask(newtask){
    const deletebtn=document.createElement('button')
    deletebtn.textContent="Delete"
    newtask.appendChild(deletebtn)
    deletebtn.onclick=function(){newtask.remove()}

    
}