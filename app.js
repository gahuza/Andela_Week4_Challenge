const userScore=0;
const computerscore=0;
const userscore_span=document.getElementById('user-sore');
const computer_span=document.getElementById('computer-score');
const scoreBoard_Div=document.querySelector('.score-board');
const result_Div=document.querySelector('.result');

const rock_Div=document.getElementById('r');
const paper_Div=document.getElementById('p');
const cissor_Div=document.getElementById('s');

function getComputerChoie(){
    const choices = [ 'r' , 'p' , 's' ];
    const randomNubmer=Math.floor(Math.random()*3);
    return choices[randomNubmer];
   

}

console.log(getComputerChoie());
function win(userChoice,computerChoice){
    userScore++;
    userscore_span.innerHTML=userScore;
    computer_span.innerHTML=computerscore;
    result_Div.innerHTML=userChoice+ "beats"+computerChoice+".wined!";
}
function loose(){
    
}
function draw(){
   
}
function game(userChoice){
    const computerChoice=getComputerChoie();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
            case "rp":
                case "ps":
                case "sr":
            loose(userChoice, computerChoice)
            break;
             case "rr":
             case "pp":
             case "ss":
            draw(userChoice, computerChoice);
            break;
    }
    
}


function main(){
    rock_Div.addEventListener('click',function(){
        game('r');
    })
    rock_Div.addEventListener('click',function(){
        game('p');
    })
    
    rock_Div.addEventListener('click',function(){
        game('s');
    }) 
}
main();