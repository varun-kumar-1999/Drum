//document.querySelector("button").addEventListener("click",handleClick); //not using () for handleClick method, if used the alert msg will automatically popup whthout clicking button
//function handleClick(){
//    alert("Button clicked");
//}
var no_of_buttons = document.querySelectorAll(".drum").length;
for(var i = 0;i<no_of_buttons;i++){         //. means class
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){      //function ==> anonymous function
        //alert("Button clicked");
        //var sound = new Audio('sounds/tom-2.mp3');
        //sound.play();
        var buttonLetter = this.innerHTML;
        playsound(buttonLetter);
        buttonAnimate(buttonLetter);
     });
}

document.addEventListener("keypress",function(event){   //anonymous function

    playsound(event.key);
    buttonAnimate(event.key);
});

function playsound(key){
    switch (key) {
        case "w":
            var sound = new Audio('sounds/tom-1.mp3');
            sound.play();
            break;
        case "a":
            var sound = new Audio('sounds/tom-2.mp3');
            sound.play();
            break;
        case "s":
            var sound = new Audio('sounds/tom-3.mp3');
            sound.play();
        break;
        case "d":
            var sound = new Audio('sounds/tom-4.mp3');
            sound.play();
        break;
        case "j":
            var sound = new Audio('sounds/snare.mp3');
            sound.play();
        break;
        case "k":
            var sound = new Audio('sounds/kick-bass.mp3');
            sound.play();
        break;
        case "l":
            var sound = new Audio('sounds/crash.mp3');
            sound.play();
        break;
        default:
            console.log(button.innerHTML);
        break;
    }

}

function buttonAnimate(cur_key){
    var anim = document.querySelector("."+cur_key);
    anim.classList.add("presseffect");
    //remove animation on timeout
    setTimeout(function(){
        anim.classList.remove("presseffect");
    },100);
}