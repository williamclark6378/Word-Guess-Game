<script type="text/javascript">
    
    function startGame () {
        alert ("Welcome to Camp Crystal Lake...");
    }
    document.onkeyup = function(event) {
            
    }
    
    
    
    $(document).ready(function() {    
        
        // define array for letters of the alphabet //
        var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        
        // Record all key presses into an array
        var presses = [];
        window.addEventListener("keydown", function(evt){
        presses.push(evt.key);
        });
        
        
        // define array for available words? //
        var word = 
        // define starting number of wins //
        var winCounter = 0;
        // define number of guesses remaining? //
        var guessCounter = 0; 
    
    
        // create click event that gets user's letter choice //
        $(".row-win").on("click", function() {

        });

        
        

    
    
    
    
    
    
    });
  

</script> 
