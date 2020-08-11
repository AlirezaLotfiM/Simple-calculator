var text = document.querySelector("#text");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var btn5 = document.querySelector("#btn5");
var btn6 = document.querySelector("#btn6");
var btn7 = document.querySelector("#btn7");
var btn8 = document.querySelector("#btn8");
var btn9 = document.querySelector("#btn9");
var btn0 = document.querySelector("#btn0");
var btnSum = document.querySelector("#btnSum");
var btnEqual = document.querySelector("#btnEqual");
var btnSub = document.querySelector("#btnSub");
var btnClean = document.querySelector("#btnClean");
var btnMultiply = document.querySelector("#btnMultiply");
var btnDivide = document.querySelector("#btnDivide");
// text.readOnly = true;
var btnBack = document.querySelector("#btnBack");

text.addEventListener("click",function(){
    for(var i=0;i<text.value.slice().length;i++){
        if(text.value.slice()[i]=="="){
            text.value=""
        }
    }
})

btn1.addEventListener("click", function (event) {
    for(var i=0;i<text.value.slice().length;i++){
        if(text.value.slice()[i]=="="){
            text.value=""
        }
    }
    text.value += event.target.value;
});
btn2.addEventListener("click", function (event) {
    for(var i=0;i<text.value.slice().length;i++){
        if(text.value.slice()[i]=="="){
            text.value=""
        }
    }
    text.value += event.target.value;
});
btn3.addEventListener("click", function (event) {
    for(var i=0;i<text.value.slice().length;i++){
        if(text.value.slice()[i]=="="){
            text.value=""
        }
    }
    text.value += event.target.value;
});
btn4.addEventListener("click", function (event) {
    for(var i=0;i<text.value.slice().length;i++){
        if(text.value.slice()[i]=="="){
            text.value=""
        }
    }
    text.value += event.target.value;
});
btn5.addEventListener("click", function (event) {
    for(var i=0;i<text.value.slice().length;i++){
        if(text.value.slice()[i]=="="){
            text.value=""
        }
    }
    text.value += event.target.value;
});
btn6.addEventListener("click", function (event) {
    for(var i=0;i<text.value.slice().length;i++){
        if(text.value.slice()[i]=="="){
            text.value=""
        }
    }
    text.value += event.target.value;
});
btn7.addEventListener("click", function (event) {
    for(var i=0;i<text.value.slice().length;i++){
        if(text.value.slice()[i]=="="){
            text.value=""
        }
    }
    text.value += event.target.value;
});
btn8.addEventListener("click", function (event) {
    for(var i=0;i<text.value.slice().length;i++){
        if(text.value.slice()[i]=="="){
            text.value=""
        }
    }
    text.value += event.target.value;
});
btn9.addEventListener("click", function (event) {
    for(var i=0;i<text.value.slice().length;i++){
        if(text.value.slice()[i]=="="){
            text.value=""
        }
    }
    text.value += event.target.value;
});
btn0.addEventListener("click", function (event) {
    for(var i=0;i<text.value.slice().length;i++){
        if(text.value.slice()[i]=="="){
            text.value=""
        }
    }
    text.value += event.target.value;
});
btnBack.addEventListener("click", function (event) {
    let array = text.value.slice();
    text.value = "";
    for (var i = 0; i < array.length - 1; i++) {
        text.value += array[i];
    }
});
btnClean.addEventListener("click", function (event) {
    text.value = "";
});
btnSum.addEventListener("click", function (event) {
    text.value += event.target.value;
});
btnSub.addEventListener("click", function (event) {
    text.value += event.target.value;
});
btnMultiply.addEventListener("click", function (event) {
    text.value += event.target.value;
});

btnDivide.addEventListener("click", function (event) {
    text.value += event.target.value;
});

btnEqual.addEventListener("click", function () {
    var TotalSaver = [-1];
    var saver = [];
    for (var i = 0; i < text.value.slice().length; i++) {
        if (
            text.value.slice()[i] == "+" ||
            text.value.slice()[i] == "-" ||
            text.value.slice()[i] == "*" ||
            text.value.slice()[i] == "/"
        ) {
            TotalSaver.push(i);
            saver.push(text.value.slice()[i]);
        }
    }
    TotalSaver.push(text.value.slice().length);
    var ar2 = [];
    for (var i = 0; i < TotalSaver.length; i++) {
        var ar = [];
        for (var j = TotalSaver[i] + 1; j < TotalSaver[i + 1]; j++) {
            ar[j] = text.value.slice()[j];
        }
        ar2.push(ar.join(""));
    }
    ar2.pop();
    var y = ar2.map(Number);

    for (var i = 0; i < saver.length; i++) {
        if (saver[i] == "*") {
            y[i + 1] = y[i] * y[i + 1];
            delete y[i];
            delete saver[i];
        } else if (saver[i] == "/") {
            y[i + 1] = y[i] / y[i + 1];
            delete y[i];
            delete saver[i];
        }
    }
    y = y.filter(function (el) {
        return el != null;
    });
    saver = saver.filter(function (el) {
        return el != null;
    });
    for (var i = 0; i < saver.length; i++) {
        if (saver[i] == "+") {
            y[i + 1] = y[i] + y[i + 1];
            delete y[i];
            delete saver[i];
        } else if (saver[i] == "-") {
            y[i + 1] = y[i] - y[i + 1];
            delete y[i];
            delete saver[i];
        }
    }
    y = y.filter(function (el) {
        return el != null;
    });
    saver = saver.filter(function (el) {
        return el != null;
    });
    text.value += "=" + y.join("");

    y = [];
    ar2 = [];
    ar1 = [];
    saver = [];
    TotalSaver = [];
});
