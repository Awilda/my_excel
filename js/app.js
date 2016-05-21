var spreadsheet, cell, numbers;

 function addCells() {
 	var table = document.getElementById("myTable");
 	var row = table.insertRow(0);
 		for(var l = 0; l < 8; l++){
 			cell = row.insertCell(0);
 		}
 };

 function newSheet(){
  for(var x = 0; x < 8; x++){
 		spreadsheet = new addCells();
  }
 	var letterA = document.getElementById('myTable').rows[0].cells[1];
 		letterA.innerHTML="A";
 	var letterB = document.getElementById('myTable').rows[0].cells[2];
 		letterB.innerHTML="B";
 	var letterC = document.getElementById('myTable').rows[0].cells[3];
 		letterC.innerHTML="C";
 	var letterD = document.getElementById('myTable').rows[0].cells[4];
 		letterD.innerHTML="D";
 	var letterE = document.getElementById('myTable').rows[0].cells[5];
 		letterE.innerHTML="E";
 	var letterF = document.getElementById('myTable').rows[0].cells[6];
 		letterF.innerHTML="F";
 	var letterG = document.getElementById('myTable').rows[0].cells[7];
 		letterG.innerHTML="G";

 	var num1 = document.getElementById('myTable').rows[1].cells[0];
 		num1.innerHTML="1";
 	var numB = document.getElementById('myTable').rows[2].cells[0];
 		numB.innerHTML="2";
 	var numC = document.getElementById('myTable').rows[3].cells[0];
 		numC.innerHTML="3";
 	var numD = document.getElementById('myTable').rows[4].cells[0];
 		numD.innerHTML="4";
 	var numE = document.getElementById('myTable').rows[5].cells[0];
 		numE.innerHTML="5";
 	var numF = document.getElementById('myTable').rows[6].cells[0];
 		numF.innerHTML="6";
 	var numG = document.getElementById('myTable').rows[7].cells[0];
 		numG.innerHTML="7";
};




