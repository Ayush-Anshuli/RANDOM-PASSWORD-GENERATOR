let passwordbox = document.getElementById("Password");
let length = 15;

let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lower = "abcdefghijklmnopqrstuvwxyz"
let special = "!@#$%^&*()_+=/*{}[];:'.,<>~`"
let number = "1234567890"

let all = upper+lower+special+number

function pass(){

    let password="";
    password+=upper[Math.floor(Math.random()*upper.length)]
    password+=lower[Math.floor(Math.random()*lower.length)]
    password+=special[Math.floor(Math.random()*special.length)]
    password+=number[Math.floor(Math.random()*number.length)]

    while(length>password.length){
        password+=all[Math.floor(Math.random()*all.length)]
    }
    passwordbox.value=password
}

function copy(){
    passwordbox.select();
    document.execCommand("copy")
}