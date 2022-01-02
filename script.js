// Display Operator

function set(op) {
    document.getElementById("display").value += op;
}

// Operation functions

function sine() {
    let tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.sin(tempStore));

}

function cosine() {
    let tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.cos(tempStore));
}

function tan() {
    let tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.tan(tempStore));

}

function asine() {
    let tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.asin(tempStore));

}

function acosine() {
    let tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.acos(tempStore));

}

function atan() {
    let tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.atan(tempStore));

}

function sqrRoot() {
    let tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.sqrt(tempStore));

}

function fLog() {
    let tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.log(tempStore));

}

// Result function 

function answer() {
    let phrase = random();
    let gentext = document.querySelector(".genText")
    gentext.innerHTML=phrase
    let Exp = document.getElementById("display");
    let Exp1 = Exp.value;
    let result = eval(Exp1);
    //alert(result);
    Exp.value = 1;
}

// CE and AC functions

function ce() {

    let elem = document.getElementById("display").value;
    let length = elem.length;
    length--;
    let a = elem.substr(0, length);
    document.getElementById("display").value = a;
}

function ac() {

    let elem = document.getElementById("display").value;
    let length = 0;
    let a = elem.substr(0, length);
    document.getElementById("display").value = a;
}

// Randomm text generated after result 

function random() {
    let randomNum = Math.floor(Math.random() * 7);    
    let phrase;
    switch (randomNum) {
        case 0:
        phrase = `wow you're fucking dumb <img class="emoji" src="assets/crying.png"><img class="emoji" src="assets/crying.png">`;
        break;
        case 1:
        phrase = `you can't even do basic math <img class="emoji" src="assets/skull.png">`;
        break;
        case 2:
        phrase = "lmao";
        break;
        case 3:
        phrase = "you're a failure";
        break;
        case 4:
        phrase = `are you even trying <img class="emoji" src="assets/crying.png">`;
        break;
        case 5:
        phrase = "you're a failure";
        break;
        case 6:
        phrase = "just give up man";
    }
    return phrase;
}

// Hiding elements based on res

let table1 = document.querySelector(".table1")
let table2 = document.querySelector(".table2")

let e1 = document.querySelector(".e1")
let e2 = document.querySelector(".e2");

e1.onclick = function() {
    table1.classList.remove("hide");
    table2.classList.add("hide");
    e1.classList.add("active");
    e2.classList.remove("active");

}

e2.onclick = function() {
    table1.classList.add("hide");
    table2.classList.remove("hide");
    e1.classList.remove("active");
    e2.classList.add("active");
}