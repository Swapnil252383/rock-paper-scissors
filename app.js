let userScore=0;
let compScore=0;//user for counting

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");//dom concept

const genCompChoice=()=>{
    const option=["rock", "paper", "scissors"];
    const randldx=Math.floor(Math.random()*3);
    return option[randldx];
};//..function sed for gen ramdom no for choice 

const  drawGame=()=>{
    msg.innerText="Game is draw.play again";
    msg.style.backgroundColor="red";
};//if user and computer are same draw the match and display
const showWinner=(userWin,userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`you win your ${userChoice} loose ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`you lost ${compChoice} beat your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};//used to show the winner

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin==compChoice==="paper"? false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"? false:true;
        }
        else{
            userWin=compChoice==="rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};//used to check the winner

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});//use to check the evnt lisser