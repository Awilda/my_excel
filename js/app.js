 var spreadsheet;
 // Do you recommend having the variables assigned outside first?

 	function addCells() {
 		var table = document.getElementById("myTable");
 		var row = table.insertRow(0);
 		for(var l = 0; l < 8; l++){
 		var cell = row.insertCell(0);
 		}
 	};

  function newSheet(){
  	for(var x = 0; x < 8; x++){
 		spreadsheet = new addCells();
  	}
 };


