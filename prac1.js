let unt = document.querySelector(".count")
let save = document.querySelector(".entry")
count= 0
function inc() {
    count += 1
    unt.innerText = count
}

function fal() {
    // count = 0
//    previousentry += count 
     let k = " " + count 
    save.innerText += k
    // save.innerText = previous entry
    count = 0;
    unt.innerText = count
}

fal()
