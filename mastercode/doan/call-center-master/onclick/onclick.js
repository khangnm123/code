let x =1;
let show = document.getElementsByClassName("click")
function Open(){
    x +=1;
    console.log(x)
    if( x % 3 == 0) 
    {
        let a = document.querySelector("ul")
        a.style.display ="none";
    }
    else
    {
        let a = document.querySelector("ul")
        a.style.display ="block";
    }
};