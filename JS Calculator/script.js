let clearAll = document.getElementById("clear")
let divde = document.getElementById("divide")
let pilus = document.getElementById("pilus")
let minus = document.getElementById("minus")
let multiply = document.getElementById("multiply")
let equals = document.getElementById("equals")
let num0 = document.getElementById("0")
let num1 = document.getElementById("1")
let num2 = document.getElementById("2")
let num3 = document.getElementById("3")
let num4 = document.getElementById("4")
let num5 = document.getElementById("5")
let num6 = document.getElementById("6")
let num7 = document.getElementById("7")
let num8 = document.getElementById("8")
let num9 = document.getElementById("9")

num0.addEventListener("click",function() {

    document.getElementById("scren").value+=num0.value;
})

num1.addEventListener("click",function() {
    document.getElementById("scren").value+=num1.value;
})
num2.addEventListener("click",function() {
    document.getElementById("scren").value+=num2.value;
})
num3.addEventListener("click",function() {
    document.getElementById("scren").value+=num3.value;
})
num4.addEventListener("click",function() {
    document.getElementById("scren").value+=num4.value;
})
num5.addEventListener("click",function() {
    document.getElementById("scren").value+=num5.value;
})
num6.addEventListener("click",function() {
    document.getElementById("scren").value+=num6.value;
})
num7.addEventListener("click",function() {
    document.getElementById("scren").value+=num7.value;
})
num8.addEventListener("click",function() {
    document.getElementById("scren").value+=num8.value;
})
num9.addEventListener("click",function() {
    document.getElementById("scren").value+=num9.value;
})

//Clear function
clearAll.addEventListener("click",function() {
    document.getElementById("scren").value="";
})

//Clear function son


// operator
divde.addEventListener("click",function() {
    scren =document.getElementById("scren").value
    if (scren.length==0) {
    return;
    }
    else if ((parseInt(scren[scren.length-1])*0)!=0) {
     
    return;
    }else
    {
        document.getElementById("scren").value+=divde.value;
    }
})

pilus.addEventListener("click",function() {
    scren =document.getElementById("scren").value
    if (scren.length==0) {
    return;
    }
    else if ((parseInt(scren[scren.length-1])*0)!=0) {
      
    return;
    }else
    {

        document.getElementById("scren").value+=pilus.value;
    }
})

minus.addEventListener("click",function() {
    scren =document.getElementById("scren").value
    if (scren.length==0) {
    return;
    }
    else if ((parseInt(scren[scren.length-1])*0)!=0) {
    return;
    }else
    {
        document.getElementById("scren").value+=minus.value;
    }
})


multiply.addEventListener("click",function() {
    scren =document.getElementById("scren").value
    if (scren.length==0) {
    return;
    }
    else if ((parseInt(scren[scren.length-1])*0)!=0) {
    return;
    }else
    {
        document.getElementById("scren").value+=multiply.value;
    }
})

dot.addEventListener("click" , function () {
    scren =document.getElementById("scren").value
    if (scren.length==0) {
    return;
    }
    else if ((parseInt(scren[scren.length-1])*0)!=0) {
    return;
    }else
    {
        document.getElementById("scren").value+=dot.value;
    }
})
//operator son


equals.addEventListener("click",function() {
      scren =document.getElementById("scren").value
    if (scren.length==0) {
        return;
    }
    else 
    {
      document.getElementById("scren").value=eval(scren)
    }
})

