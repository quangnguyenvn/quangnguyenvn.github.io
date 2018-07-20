// Assign game card function
var game = {
	// Assign card value to 1 array

	gallery: ["card/card1.jpg","card/card2.jpg","card/card3.jpg","card/card4.jpg","card/card5.jpg","card/card6.jpg","card/card7.jpg","card/card8.jpg","card/card9.jpg","card/card10.jpg","card/card11.jpg","card/card12.jpg","card/card1.jpg","card/card2.jpg","card/card3.jpg","card/card4.jpg","card/card5.jpg","card/card6.jpg","card/card7.jpg","card/card8.jpg","card/card9.jpg","card/card10.jpg","card/card11.jpg","card/card12.jpg"],
	
	// init shuffle function to game
	
	init: function() {
		game.shuffle();
	},
	
	// write shuffle function
	
	shuffle: function() {
		var random = 0;
		var temp = 0;
		for(i=1; i<game.gallery.length; i++ ) {
			random = Math.round(Math.random()*i);
			temp = game.gallery[i];
			game.gallery[i] = game.gallery[random];
			game.gallery[random] = temp;
		}
	// Init function to assign random number to cards

		game.assignCards();	
		console.log(game.gallery);
	},
	
	// Write function to assign random number to cards

	assignCards: function() {

		console.log(game.gallery);

		$('.photo').each(function(index){
				$(this).attr('src',game.gallery[index]);
				
			});
	},
			
};

// Trigger 

	game.init();