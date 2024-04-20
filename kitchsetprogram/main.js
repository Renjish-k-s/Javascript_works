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

    let itag =document.createElement("i")
    itag.classList.add('glyphicon','glyphicon-trash')
   // console.log(itag)
    li.appendChild(itag)

    


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


function deleteitems(event)
{
     //console.log(event.target.classList[0]);

    if(event.target.classList[0]==="glyphicon")
    {
            //alert('jdshjh');
            let item = event.target.parentElement;
            console.log(item)
            item.remove();
    }
}



btn.addEventListener("click",additems)

ullist.addEventListener("click",deleteitems)


textbox.addEventListener("keypress",keyhandler)

