const form = document.querySelectorAll("form");
const form1 = document.querySelector(".form1")
const btn = document.querySelectorAll(".btn")
const num0 = document.getElementById("0")
const num1 = document.getElementById("1")
const num2 = document.getElementById("2")
const num3 = document.getElementById("3")
const num4 = document.getElementById("4")
const num5 = document.getElementById("5")
const num6 = document.getElementById("6")
const num7 = document.getElementById("7")
const num8 = document.getElementById("8")
const num9 = document.getElementById("9")

console.log(form1)


function speak(event){
    event.preventDefault();
    // let first_num = event.target.id
    // console.log(first_num);
    console.log("hi");
}

function go(){
    form.forEach(function(number){
        number.addEventListener("submit",speak)
    })
    
   

}
go();