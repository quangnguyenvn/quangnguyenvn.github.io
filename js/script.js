// Assign whole card game function

var game = {

	// Step 2. Assign card value to 1 array

	gallery: ["card/card1.jpg", "card/card2.jpg", "card/card3.jpg", "card/card4.jpg", "card/card5.jpg", "card/card6.jpg", "card/card7.jpg", "card/card8.jpg", "card/card9.jpg", "card/card10.jpg", "card/card11.jpg", "card/card12.jpg", "card/card1.jpg", "card/card2.jpg", "card/card3.jpg", "card/card4.jpg", "card/card5.jpg", "card/card6.jpg", "card/card7.jpg", "card/card8.jpg", "card/card9.jpg", "card/card10.jpg", "card/card11.jpg", "card/card12.jpg"],

	// iIit shuffle function to game

	init: function () {
		game.shuffle();
	},

	// Step 3. Write shuffle function

	shuffle: function () {
		var random = 0;
		var temp = 0;
		for (i = 1; i < game.gallery.length; i++) {
			random = Math.round(Math.random() * i);
			temp = game.gallery[i];
			game.gallery[i] = game.gallery[random];
			game.gallery[random] = temp;
		}

		// Init function to assign random number to cards

		game.assignCards();
		console.log(game.gallery);
	},

	// Step 4. Write function to assign random number to cards

	assignCards: function () {

		// Assign photo source to photo

		$('.photo').each(function (index) {
			$(this).attr('src', game.gallery[index]);
		});

		// Assign value to .card-inner to compare value in the next step

		$('.card-inner').each(function (index) {
			$(this).attr('value', game.gallery[index]);

		});

		// Init event click on game cards

		game.clickHandlers();
	},

	// Step 4. Write event click function including toggle and add class

	clickHandlers: function () {
		$('.card-inner').click(function () {
			console.log(this);
			// Add class select to card-inner to check in the next step
			$(this).addClass('selected').toggleClass('rotator');
			// Init checkMatch function
			$(this).css('pointer-events', 'none');
			game.checkMatch();
		});
	},

	// Step 5. Write checkMatch function when flipping game cards

	checkMatch: function () {
		console.log("Step 5. Check Card Match Active!");
		// console.log($('.selected').attr('value'));
		if ($('.selected').length == 2) {
			if ($('.selected').first().attr('value') == $('.selected').last().attr('value')) {
				// Stop clicking on other cards when finding two similar cards	
				$('.card-inner').css('pointer-events', 'none');
				$('.selected').each(function () {
					// Add sound
					document.getElementById('right_music').play();
					// Make card disappear
					$(this).animate({ opacity: 0 }, 500).removeClass('unmatched');
					// Continue clicking on other cards when two cards disappear	
					$('.card-inner').css('pointer-events', 'auto');
				});

				$('.selected').each(function () {
					$(this).removeClass('selected');
				});
			}

			else {
				// Stop clicking on other cards when finding two different cards	
				$('.card-inner').css('pointer-events', 'none');
				setTimeout(function () {
					$('.selected').each(function () {
						// Add sound
						document.getElementById('wrong_music').play();
						// Flip back to return to normal state when two cards are different
						$(this).removeClass('selected').toggleClass('rotator');
					});
					// Continue clicking on other cards when two cards flip back	
					$('.card-inner').css('pointer-events', 'auto');

				}, 500);
			}
			game.checkWin();
		}
		// Init checkWin function by determining class unmatched
	},
	// Step 6. Trigger card game
	checkWin: function () {

		console.log($('.unmatched').length);
		if ($('.unmatched').length == 0) {
			alert("You are the true champion!");
		}
	},
};
// Step 1. Trigger card game
game.init();


