document.getElementById("b").addEventListener("click",function(){
    if (document.getElementById("txt").style.fontWeight=="bold")
    {
        document.getElementById("txt").style.fontWeight="normal";

    }
    else {
        document.getElementById("txt").style.fontWeight="bold";
    
    }
});

document.getElementById("i").addEventListener("click",function(){
    if (document.getElementById("txt").style.fontStyle=="italic")
    {
        document.getElementById("txt").style.fontStyle="normal";

    }
    else {
        document.getElementById("txt").style.fontStyle="italic";
    
    }
});

document.getElementById("underline").addEventListener("click",function(){
    if (document.getElementById("txt").style.textDecoration=="underline")
    {
        document.getElementById("txt").style.textDecoration="none";

    }
    else {
        document.getElementById("txt").style.textDecoration="underline";
    
    }
});