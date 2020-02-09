              
        var randomNumber = Math.floor(Math.random() * 99) + 1;

       	//var guesses = document.querySelector("#guesses");
        //$("#guesses").html();
       	var lastResult = document.querySelector("#lastResult");
       	//var lowOrHi = document.querySelector("#lowOrHi");
        //$("#lowOrHi")

       	var guessSubmit = document.querySelector(".guessSubmit");
       	var guessField = document.querySelector(".guessField");
       	var guessCount = 1;

       	var resetButton = document.querySelector("#reset");
       	resetButton.style.display = "none";
       	guessField.focus();

        var gamesWon = 0;
        var gamesLost = 0;
        var wonLostDisplay = document.querySelector("#wonLostDisplay");
        var wonLostText = ""
        wonLostDisplay.innerHTML = wonLostText;
       	
        function checkGuess()
       	{
      		var userGuess = Number(guessField.value);
                if(userGuess <= 99 && userGuess >= 0 && typeof userGuess == "number")
                {
                        if (guessCount == 1)
                        {
                                $("#guesses").html("Previous guesses: ");
                        }
                        $("#guesses").append(userGuess + " ");
                        if(userGuess === randomNumber)
                        {
                                lastResult.innerHTML = "Congratulations! You got it Right!";
                                lastResult.style.backgroundColor = "green";
                                $("#lowOrHi").html("");
                                gamesWon++;
                                setGameOver();
                        }
                        else if (guessCount === 7)
                        {
                                lastResult.innerHTML = "Sorry, you lost!";
                                gamesLost++;
                                setGameOver();
                        }
                        else
                        {
                                lastResult.innerHTML = "Wrong!";
                                lastResult.style.backgroundColor = "red";
                                if(userGuess < randomNumber)
                                { 
                                       $("#lowOrHi").html("Last guess was to low!");
                                }
                                else if(userGuess > randomNumber)
                                {
                                        $("#lowOrHi").html("Last guess was to high!");
                                }
                        }

                        guessCount++;
                        guessField.value = "";
                        guessField.focus(); 

                }
                else
                {
                        guessField.value = "";
                        guessField.focus(); 
                        lastResult.innerHTML = "Error: Invalid Input";
                        lastResult.style.backgroundColor = "orange";
                        lowOrHi.innerHTML = "Error: Invalid Input";
                }
       		
       	}

        function setGameOver()
        {
                guessField.disabled = true;
                guessSubmit.disabled = true;
                resetButton.style.display = "inline";
                resetButton.addEventListener("click", resetGame);
                wonLostText ="Games Won: " + gamesWon +" Games Lost: " + gamesLost;
                wonLostDisplay.innerHTML = wonLostText;
        }

       	function resetGame()
       	{
       		guessCount = 1;
       		var resetParas = document.querySelectorAll('.resultParas p');
       		for (var i = 0; i < resetParas.length; i++)
       		{
       			resetParas[i].textContent = "";
       		}
       		resetButton.style.display = "none";
       		guessField.disabled = false;
      		guessSubmit.disabled = false;
   		guessField.value = "";
	        guessField.focus();

	        //lastResult.sytle.backgroundColor = "white";

	        randomNumber = Math.floor(Math.random() * 99) -1;

                //console.log(wonLostText);
                wonLostDisplay.innerHTML = wonLostText;
        }

        guessSubmit.addEventListener("click",checkGuess);
        	