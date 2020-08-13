// var count=0;
// function timer(){
//     // var minHeadding=document.getElementById("min");
//     // var secHeadding=document.getElementById("sec");
//     // var miliHeadding=document.getElementById("milisec");
//     count++;
//     console.log(count);
// }

// setInterval(timer(),6000);

// $(selector).action() JQUERY SYNTAX

var list=document.getElementById("list");

function addTodo(){
var todo_item=document.getElementById("todo-item");

// CREATING LIST
var li= document.createElement("li");//create html tag any
var liText=document.createTextNode(todo_item.value);//add text through javascript
li.appendChild(liText);//li k ander insert krdo li ka text
list.appendChild(li);//li plus us ki value list m ja rhi hai

// CREATING Del BTN
var delBtn= document.createElement("button");//creating html button
var delText=document.createTextNode("Delete");//creating button text
delBtn.appendChild(delText);//button k tag m button ka text
delBtn.setAttribute("class","btn");//button k tag m attribute set horha hai
delBtn.setAttribute("onclick", "deleteItem(this)");//button k click pey function call horha hai, 'this' pura element uth k la dey ga, as a argument pass kiya hai 
li.appendChild(delBtn);

// CREATING Edit BTN
var editBtn= document.createElement("button");//creating html button
var editText=document.createTextNode("Edit");//creating button text
editBtn.appendChild(editText);//button k tag m button ka text
editBtn.setAttribute("class","btn");//button k tag m attribute set horha hai
editBtn.setAttribute("onclick", "editItem(this)");//button k click pey function call horha hai, 'this' pura element uth k la dey ga, as a argument pass kiya hai 
li.appendChild(editBtn);


todo_item.value="";

}

function deleteItem(e){//e as a parameter get kiya hai

    console.log(e.parentNode);//pura li la k dey dey ga q k button ka parent li hai
    e.parentNode.remove();//buildin function hai JS ka
}

function editItem(e){//e as a parameter get kiya hai
    // console.log(e);//edit ka button la k dey ga
    // console.log(e.parentNode);//pura li la k dey ga
    // console.log(e.parentNode.firstChild);//li ka first child la k dey ga i.e text node
    // console.log(e.parentNode.firstChild.nodeValue);//nodeValue k through edit hogi value is liye lagyaa
    var editValue=prompt("Enter edit value", e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue=editValue;
}

function deleteAll(){
    list.innerHTML=" ";
}
