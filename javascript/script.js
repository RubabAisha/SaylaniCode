// EVENTS

// LINK
function foo(){
    var a=2+2;
    alert(a)
}

function koo(greet){
    alert(greet);
}

// BUTTON
function clickBtn(){
    alert("Click!")
}

// Chapter 49
function getName(){
    var fieldname=document.getElementById("name");
    alert(fieldname.value);
    fieldname.value="";
}

function setName(){
    var fieldname=document.getElementById("name");
    fieldname.value="Aisha";
}
setName()