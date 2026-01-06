let you=0;
let comp=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScore=document.querySelector("#user-score");
const compScore=document.querySelector("#computer-score");

const genCompChoice = () =>{
    let options=["rock","paper","sicssors"];
    let randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
};
const draw = () => {
    //console.log("Game was draw");
    msg.style.backgroundColor="black";
    msg.innerText="Game Draw.. Play again";
};
const playGame=(userChoice) =>{
    const compChoice=genCompChoice();
    //console.log("User choice :",userChoice);
    //console.log("Computer choice :",compChoice);
    let userWin=true;
    if(userChoice === compChoice){
        draw();
    }else{
        if(userChoice === "rock"){
            userWin=compChoice === "paper" ? false : true; 
        }else if(userChoice === "paper"){
            userWin=compChoice === "rock" ? true : false;
        }else{
            userWin=compChoice === "paper" ? true : false;
        }
    showWinner(userWin,userChoice,compChoice);
    }

};
const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        //console.log("User win");
        msg.innerText=`You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        you+=1;
        userScore.innerText=`${you}`;

    }else{
        //console.log("Computer wins");
        msg.innerText=`You lose. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
        comp += 1;
        compScore.innerText=`${comp}`;
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");
        //console.log("choice made by user",userChoice);
        playGame(userChoice);
});
});