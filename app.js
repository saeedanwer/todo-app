var list = document.getElementById("list")

function addItem(){
    var item = document.getElementById("todo-item") 

    var li = document.createElement('li')
    li.setAttribute("class","li1")
    var liText = document.createTextNode(item.value)
    li.appendChild(liText)

//       create delete button

    var delete_btn = document.createElement("button")
    var delete_text = document.createTextNode("Delete")
    delete_btn.appendChild(delete_text)
    delete_btn.setAttribute("class","btn")
    delete_btn.setAttribute("onclick","delete_item(this)")
    
    //  create edit button
    var edit_btn = document.createElement("button")
    var edit_text = document.createTextNode("Edit")
    edit_btn.appendChild(edit_text)
    edit_btn.setAttribute("class","btn")
    edit_btn.setAttribute("onclick","edit_item(this)")
    
    li.appendChild(edit_btn)
    li.appendChild(delete_btn)
    
    list.appendChild(li)
    
    item.value =""
}

function delete_item(e){
        e.parentNode.remove()
}

function delete_All(){
    list.innerHTML =""
}

function edit_item(e){
   
    var edit_Value = prompt("Enter new item for chang item",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = edit_Value
}