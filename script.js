var left = document.querySelector(".left");
var right = document.querySelector(".right");
var result = document.querySelector(".result");
var board = document.querySelector(".board");
var screen2 = document.querySelector(".screen2");
var cross = document.querySelector(".screen2>.cross");
var screen2pl1 = document.querySelector(".screen2>.total>div:nth-child(2)>h2:nth-child(1)");
var screen2pl2 = document.querySelector(".screen2>.total>div:nth-child(2)>h2:nth-child(2)");
var countdisplay = document.querySelector(".count");

var reset = document.querySelector(".screen2>.reset");
var player1name = prompt("Enter Player 1 name");
player1name = player1name.length<1?"Player 1":player1name.toUpperCase().slice(0,15);
var player2name = prompt("Enter Player 2 name");
player2name = player2name.length<1?"Player 2":player2name.toUpperCase().slice(0,15);
var count = Number(prompt("Enter the number of Playes"));
count=count?count:-1;
countdisplay.innerText = count<0?"infinite":String(count);
var count2 = count;
var player1names = new Array();
var player2names = new Array();
player1names.push(document.querySelector(".incont>h3:nth-child(1)"));
player1names.push(document.querySelector(".screen2>.total>div:nth-child(1)>h2:nth-child(1)"));
player2names.push(document.querySelector(".incont>h3:nth-child(3)"));
player2names.push(document.querySelector(".screen2>.total>div:nth-child(1)>h2:nth-child(2)"));
player1names.forEach((i)=>{
  i.innerText = player1name;
})
player2names.forEach((i)=>{
  i.innerText = player2name;
})
reset.addEventListener("click",()=>{
  player1score=0;
  player2score=0;
  result.innerText="";
  screen2.style.display = "none";
  count=count2;
  countdisplay.innerText = count<0?"infinite":String(count);
  scoreset();
})
var player1score=0;
var player2score=0;

board.addEventListener("click",()=>{
  screen2.style.display = "";
})
cross.addEventListener("click",()=>{
  screen2.style.display = "none"  
})
function roll(){
  if(count!==0){
    throwdice();
    count--;
    countdisplay.innerText = count<0?"infinite":String(count);
  }
  if(count===0){
    setTimeout(()=>{
      screen2.style.display = "";
    },1000);
 }
}
function throwdice(){
  var num1 = Math.floor(((Math.random()*10)%6)+1);
  var num2 = Math.floor(((Math.random()*10)%6)+1);
  left.innerText = num1.toString();
  right.innerText = num2.toString();
  left.classList.add("roll");
  right.classList.add("roll");
  setTimeout(()=>{
    left.classList.remove("roll");
    right.classList.remove("roll");
    if(num1>num2){
      result.innerText = player1name+" Wins";
      player1score++;
    }else if(num1<num2){
      result.innerText = player2name+" Wins";
      player2score++;
    }else{
      result.innerText = "DRAW";
      player1score++;
      player2score++;
    }
    scoreset();
  },1000);
}
function scoreset(){
screen2pl1.innerText=player1score.toString();
screen2pl2.innerText=player2score.toString();
}