const one = document.getElementById("one");
one.addEventListener('click', function () {
    console.log('1');
});

const two = document.getElementById("two");
two.addEventListener('click', function () {
    console.log('2');
});

const three = document.getElementById("three");
three.addEventListener('click', function () {
    console.log('3');
});

const four = document.getElementById("four");
four.addEventListener('click', function () {
    console.log('4');
});

const five = document.getElementById("five");
five.addEventListener('click',function() {
    console.log('5');
});

const six = document.getElementById("six");
six.addEventListener('click', function () {
    console.log('6');
});

const seven = document.getElementById("seven");
seven.addEventListener('click', function () {
    console.log('7');
});

const eight = document.getElementById("eight");
eight.addEventListener('click', function () {
    console.log(8);
});

const nine = document.getElementById('nine');
nine.addEventListener('click', function () {
    console.log("9");
});

const zero = document.getElementById("zero");
zero.addEventListener('click',function(){
    console.log("0");
})

const tela=document.getElementById(".tela");

tela.addEventListener('click',function(){

    const soma =one.value;

    display.value =+ soma;

});