var level = 0;var i = 0;var start = false;
var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red" , "blue" , "green","yellow"];
$(document).keypress(function(){
    if(!start){
        nextSequence();
    }
})
$(".btn").click(function(){
    
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    if(userChosenColor!=gamePattern[i]){
        animatePress(userChosenColor);
        $(".bd").addClass("game-over");
        setTimeout(function(){
            $(".bd").removeClass("game-over");
        },100)
        playSound("wrong");
        $("#level-title").text("Game Over! Press any key to Restart");
        $(".second-title").hide();
        level = 0;
        gamePattern = [];
        start=false;
    }else{
        playSound(userChosenColor);
        i++;
        if(i==level){
            setTimeout(function () {
                nextSequence();
              }, 400);
        }
    }     
});
function nextSequence(){
    $(".second-title").show();
    start = true;
    userClickedPattern = [];
    i = 0;
    level++;
    $("#level-title").text("LEVEL  "+ level);
    var randomNumber= Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}
function playSound(name){
    var audio =new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function animatePress(className){
        $('.'+className).addClass("pressed");
        setTimeout(function(){
            $('.'+className).removeClass("pressed");
        },100)
}
