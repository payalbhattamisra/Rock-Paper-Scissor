let userScore=0;
let compScore=0;

const choices =document.querySelectorAll(".choice");
const msg=document.querySelector("#msg-content");

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");
const compgen=()=>{
const options=["rock","paper","scissors"];
const optionidx=Math.floor(Math.random()*3);
return options[optionidx];
};


const drawGame=()=>{
    console.log("game was draw.");
    msg.innerText="Game was draw.Play again.";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
if(userWin){
    userScore++;
    userScorepara.innerText=userScore;
    console.log("You win!");
    msg.innerText=`You win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
}else{
    compScore++;
    compScorepara.innerText=compScore;
    console.log("you lose");
    msg.innerText=`You lose. ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor="red";
}
};

 const playgame=(userChoice) => {
    console.log("user choice =", userChoice);
    //generate comp choice 
  const compChoice=  compgen();
    console.log("comp choice =", compChoice);

    if(userChoice===compChoice){
    //draw game
    drawGame();
    }else{
        let userWin=true;
        if(userChoice ==="rock"){
            //paper,scissors
           userWin = compChoice==="paper" ? false: true;
        }else if(userChoice==="paper"){
            //rock,scissors
            userWin = compChoice==="scissors" ? false:true;
        }else{
            //userchoice scissor then comp rock, paper
            userWin=compChoice==="rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};
choices.forEach((choice) => {
    // console.log(choice);
choice.addEventListener("click", () => {
   const userChoice=  choice.getAttribute("id");
    // console.log(`choice was clicked`, userChoice);
    playgame(userChoice);
})
});