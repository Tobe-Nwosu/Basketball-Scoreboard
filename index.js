

let scoreHome = document.getElementById("score-el-home")
let scoreGuest = document.getElementById("score-el-guest")
let resetBtn = document.getElementById("reset")



let countHome = 0 

let countGuest = 0

function add2Home(){
   countHome += 2
   scoreHome.innerText = countHome
}

function add3Home(){
    countHome += 3
    scoreHome.innerText = countHome

}


function add2Guest(){
   countGuest += 2
   scoreGuest.innerText = countGuest
}

function add3Guest(){
   countGuest += 3
   scoreGuest.innerText = countGuest
}


function resetScore(){
    
    countHome = 0
    countGuest = 0 
    scoreHome.innerText = 0
    scoreGuest.innerText = 0
    
}