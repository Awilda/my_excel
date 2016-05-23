var spreadsheet, cell, numbers;
var letters = ["A","B","C","D","E","F","G"];
var numbers = [1,2,3,4,5,6,7];

function addCells() {
 	var table = document.getElementById("myTable");
 	var row = table.insertRow(0);
 		for(var l = 0; l < 8; l++){
 			cell = row.insertCell(0);
 		}
};

function highlightColumn(e) {
	var columnLetter = e.target.className;
  var columnNumber = letters.indexOf(columnLetter) + 1;

  var table = document.getElementById("myTable");
  for (var counter = 0; counter <= numbers.length; counter++){
  	var column = table.rows[counter].cells[columnNumber];
    column.classList.add("highlight");
  }
}

function newSheet(){
  for (var x = 0; x < 8; x++) {
 		spreadsheet = new addCells();
  }

	/* A-G */
  for (var counter = 1; counter <= letters.length; counter++) {
  	var cell = document.getElementById('myTable').rows[0].cells[counter];
    cell.innerHTML = letters[counter-1];
    cell.addEventListener("click", highlightColumn);
    cell.classList.add(letters[counter-1]);
  }
  
  /* 1-7 */
  for (var index = 0; index < numbers.length; index++){
  	var nums = document.getElementById('myTable').rows[index + 1].cells[0];
    nums.innerHTML = numbers[index];
  }
  
  /* Rest of the table */
  for (var count = 1; count <= numbers.length; count++){
  	for (var ind = 1; ind <= letters.length; ind++){
  		var empt = document.getElementById('myTable').rows[count].cells[ind];
    	empt.innerHTML = "<input />";
  	}
  }
};

window.onload = newSheet();



