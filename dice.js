

let randomOne=Math.floor(Math.random()*6)+1;
let randomTwo=Math.floor(Math.random()*6)+1;

document.querySelector('.numberOne').innerHTML=randomOne;
document.querySelector('.numberTwo').innerHTML=randomTwo;

if(randomOne>randomTwo){
    document.querySelector('h1').innerHTML='Player 1 wins!';
}
if(randomTwo>randomOne){
    document.querySelector('h1').innerHTML='Player 2 wins!';

}
if(randomOne===randomTwo){
    document.querySelector('h1').innerHTML='Draw!';

}
