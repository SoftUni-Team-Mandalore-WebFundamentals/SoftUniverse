var playing = false;

function startAnimation() { 
    if(!playing){
        playing = true;
    	var output = document.getElementById("output");
        var frames = document.getElementById("animationFrames").children;
        var frameCount = frames.length;
        var i = 0;
        
        var myTimer = setInterval(function () { 
            
            output.src = frames[++i % frameCount].src;
                    
            if(i>5){
            	clearInterval(myTimer);  
                playing = false; 	
             }
        }, 100); 
        
    }  
}

var counter = 0;

function increaseCounter(){       
    counter++;    
    var output = document.getElementById("counter");
    output.innerHTML = counter;
}

var sound = false;
var sounds = ['sounds/ruki.mp3', 'sounds/vaaae.mp3', 'sounds/jivotno.mp3', 'sounds/azlisum.mp3'];  
var soundcounter=Math.floor(Math.random() * 4);;
function playSound(){       
    if(!sound){
        sound = new Audio(sounds[soundcounter]);
        sound.onended = function() {
             sound = false;
             soundcounter=Math.floor(Math.random() * 4);
            };
        sound.play();
    }
}
