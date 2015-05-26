(function() {

	var grid = document.getElementById("grid");

	for (var i = 0; i < 5; i++) {
		var temp = document.createElement("DIV");
		temp.className = "row";
		grid.appendChild(temp);
	}

	var row = grid.getElementsByClassName("row");

})();