angular.module('gridPartyApp', [])

.controller('GridPartyCtrl', function ($scope) {
	// variables
	var game = $('#game');
	var board = $('#board');
	var tiles = [];
	//the 4 is for the border
	var maxTileSize = 80;

	// set these as we want
	var gridLengthX = 32;
	var gridLengthY = 9;

	// create tiles
	for (i = 1; i <= gridLengthX * gridLengthY; i++){
		board.append('<div class="tile">'+i+'</div>')
		
	}

	// set game and tile size, based on window size for now
	var windowWidth = $(window).width();
	
	var tileSize = Math.floor(windowWidth / gridLengthX);
	//avoid big tiles
	if (tileSize > maxTileSize) {
		board.css('width', gridLengthX * maxTileSize);
		//  -4 is for the border
		$('.tile').css('width', maxTileSize - 4).css('height', maxTileSize - 4);
	}
	else{ 
		board.css('width', tileSize * gridLengthX);
		// - 4 is for border
		$('.tile').css('width', tileSize - 4).css('height', tileSize - 4 );
	};

});