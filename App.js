const images                  =  ["images/diceRoll(1).png","images/diceRoll(2).png","images/diceRoll(3).png",
                                  "images/diceRoll(4).png","images/diceRoll(5).png","images/diceRoll(6).png"]
const player1ImgBox            =  document.querySelector(".img1")
const player2ImgBox            =  document.querySelector(".img2") 
const player1ScoreBoard        =  document.querySelector(".score1")
const player2ScoreBoard        =  document.querySelector(".score2") 
const resetBtn                 =  document.querySelector("#resetBtn")
const startGame                =  document.querySelector("#startGameBtn" )
const emoji                    =   document.querySelector(".emoji")
const gameContainer              = document.querySelector(".roll")  
let   playerOneScore           =  0
let   playerTwoScore           =  0


    
function getRandomNum(){
    return Math.floor(Math.random()*6)
}
 

function roll(){
        
        let  num1  = getRandomNum()
        let  num2  = getRandomNum()
        player1ImgBox.setAttribute("src",images[num1]) 
        player2ImgBox.setAttribute("src",images[num2])
        playerOneScore  += num1 + 1 
        playerTwoScore  += num2 + 1
        player1ScoreBoard.textContent =  playerOneScore
        player2ScoreBoard.textContent =  playerTwoScore
      

        cheakWinner()
        
     
         
}
function  cheakWinner(){
        if(playerOneScore > playerTwoScore && playerOneScore >= 50){
            document.querySelector("#message").textContent = "Player One Have Won The Match"
            cheakDisplay()

           
        }
        else if( playerTwoScore >playerOneScore &&  playerTwoScore >= 50){
            document.querySelector("#message").textContent = "Player Two Have Won The Match"
            cheakDisplay()
           

            

        }
        else if( playerOneScore === playerTwoScore && playerOneScore && playerTwoScore >= 50 ){
            document.querySelector("#message").textContent = "Match Tie"
            cheakDisplay()
            emoji.style.display   =  "none"

        }
}

function cheakDisplay(){

            resetBtn.style.display = "block"
            startGame.style.display   = "none"
            emoji.style.display   =  "block"
            gameContainer.classList.add("roll2") 
}
let diceImg = document.querySelectorAll("img")

startGame.addEventListener("click",function(){
    diceImg.forEach(function(die){
        die.classList.add("shake")
    });
    setTimeout(function(){
        diceImg.forEach(function(die){
            die.classList.remove("shake")
        })
    }, 
    1000);
    
    player1ImgBox.classList.remove("box")
    player2ImgBox.classList.remove("box")
    roll()
})

resetBtn.addEventListener("click",function(){
          resetBtn.style.display = "none "
          startGame.style.display   = "block"
          playerOneScore           =  0
          playerTwoScore           =  0
          player1ScoreBoard.textContent =  0
          player2ScoreBoard.textContent =  0
          emoji.style.display             =  "none"
          gameContainer.classList.remove("roll2")
        document.querySelector("#message").textContent = ""
        player1ImgBox.setAttribute("src","images/box.ico") 
        player2ImgBox.setAttribute("src","images/box.ico")
      



 
})