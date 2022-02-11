// Display Operator

function set(op) {
    document.getElementById("display").value += op;
    document.getElementById("display-mobile").value += op;
    console.log(op)
}

// Operation functions

function sine() {
    let tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.sin(tempStore));
    let tempStoreM = document.getElementById("display-mobile").value;
    document.getElementById("display-mobile").value = eval(Math.sin(tempStoreM));
}

function cosine() {
    let tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.cos(tempStore));
    let tempStoreM = document.getElementById("display-mobile").value;
    document.getElementById("display-mobile").value = eval(Math.cos(tempStoreM));
}

function tan() {
    let tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.tan(tempStore));
    let tempStoreM = document.getElementById("display-mobile").value;
    document.getElementById("display-mobile").value = eval(Math.tan(tempStoreM));
}

function asine() {
    let tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.asin(tempStore));
    let tempStoreM = document.getElementById("display-mobile").value;
    document.getElementById("display-mobile").value = eval(Math.asin(tempStoreM));
}

function acosine() {
    let tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.acos(tempStore));
    let tempStoreM = document.getElementById("display-mobile").value;
    document.getElementById("display-mobile").value = eval(Math.acos(tempStoreM));

}

function atan() {
    let tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.atan(tempStore));
    let tempStoreM = document.getElementById("display-mobile").value;
    document.getElementById("display-mobile").value = eval(Math.atan(tempStoreM));

}

function sqrRoot() {
    let tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.sqrt(tempStore));
    let tempStoreM = document.getElementById("display-mobile").value;
    document.getElementById("display-mobile").value = eval(Math.sqrt(tempStoreM));

}

function fLog() {
    let tempStore = document.getElementById("display").value;
    document.getElementById("display").value = eval(Math.log(tempStore));
    let tempStoreM = document.getElementById("display-mobile").value;
    document.getElementById("display-mobile").value = eval(Math.log(tempStoreM));
 
}

// Result function 

function answer() {
    let phrase = random();
    let gentext = document.querySelector(".genText")
    gentext.innerHTML=phrase
    let Exp = document.getElementById("display");
    Exp.value = 1;
    let Exp1 = document.getElementById("display-mobile");
    Exp1.value = 1;
    if (randomNum < 6) {
        randomNum = randomNum + 1;
    } else {
        randomNum = 0;
    }
}

document.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
    answer();
    }
});

// CE and AC functions

function ce() {
    let elem = document.getElementById("display").value;
    let elem1 = document.getElementById("display-mobile").value;
    let length = elem.length;
    length--;
    let a = elem.substr(0, length);
    document.getElementById("display").value = a;
    let b = elem1.substr(0, length);
    document.getElementById("display-mobile").value = b;
}

function ac() {
    let elem = document.getElementById("display").value;
    let elem1 = document.getElementById("display-mobile").value;
    let length = 0;
    let a = elem.substr(0, length);
    let b = elem1.substr(0, length);
    document.getElementById("display").value = a;
    document.getElementById("display-mobile").value = b;
}

// Randomm text generated after result 
 
let randomNum = 0;

function random() {
    // let randomNum = Math.floor(Math.random() * 7);   
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

// Fx and 123 table on mobile view

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

// Rad and Deg 

let btnRadM = document.querySelector("#btnRadM");
let btnDegM = document.querySelector("#btnDegM");

btnDegM.onclick = function() {
    btnDegM.classList.add("btnBorder");
    btnRadM.classList.remove("btnBorder");
}

btnRadM.onclick = function() {
    btnRadM.classList.add("btnBorder");
    btnDegM.classList.remove("btnBorder");
}

let btnRad = document.querySelector("#btnRad");
let btnDeg = document.querySelector("#btnDeg");

btnDeg.onclick = function() {
    btnDeg.classList.add("btnBorder");
    btnRad.classList.remove("btnBorder");
}

btnRad.onclick = function() {
    btnRad.classList.add("btnBorder");
    btnDeg.classList.remove("btnBorder");
}