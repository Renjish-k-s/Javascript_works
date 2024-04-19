var ullist=document.getElementById("list");
var btn=document.getElementById("btn");
var textbox=document.getElementById("textx");

function additems()
{

    let textboxvalue = textbox.value;

    let li = document.createElement('li')
    li.innerText=textboxvalue
    li.style.cssText='animation-name:silde'
    ullist.appendChild(li)
    textbox.value= " "
    textbox.focus()



    //console.log(textboxvalue)

    // alert('added');
}

function keyhandler(event)
{
    if(event.keyCode === 13)
    {
        btn.click();
    }
}

btn.addEventListener("click",additems)

textbox.addEventListener("keypress",keyhandler)