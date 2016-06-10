var spreadsheet, cell, numbers;
var letters = ["A", "B", "C", "D", "E", "F", "G"];
var numbers = [1, 2, 3, 4, 5, 6, 7];

function addCells() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(0);
  for (var l = 0; l < 8; l++) {
    cell = row.insertCell(0);
  }
};

// Highlight Entire Table
function hightlightTable(event) {
	var table = document.getElementById("myTable")
	table.classList.add("highlight");
}

// Highlight/Unhighlight Columns
function highlightColumn(event) {
  var columnLetter = event.target.className; // "A"
  var columnNumber = letters.indexOf(columnLetter) + 1; // -1 + 1 = 0

  if (columnNumber != 0) {
    var table = document.getElementById("myTable");
    for (var counter = 0; counter <= numbers.length; counter++) {
      var column = table.rows[counter].cells[columnNumber]; // [x][0]
      column.classList.add("highlight");
    }
  }
}

function unhighlightColumn(e) { 
  var columnLetter = e.target.className; // "A Highlight"
  var columnNumber = letters.indexOf(columnLetter);

  if (columnNumber === -1) {
    columnNumber = letters.indexOf(columnLetter.charAt(0));

    var table = document.getElementById("myTable");
    for (var counter = 0; counter <= numbers.length; counter++) {
      var column = table.rows[counter].cells[columnNumber + 1];
      column.classList.remove("highlight");
    }
  }
}

// Hightlight/Unhighlight Rows
function highlightRow(event) {
  var rowNumber = event.target.className; // "1"
  var rowLetter = numbers.indexOf(rowNumber) + 1; // 0

  if (rowLetter != -1) {
    var table = document.getElementById("myTable");
    for (var counter = 0; counter <= letters.length; counter++) {
      var row = table.rows[rowNumber].cells[counter];
      row.classList.add("highlight");
    }
  }
}

function unhighlightRow(event) {
  var rowNumber = event.target.className; // "1 Highlight"
  var rowLetter = numbers.indexOf(rowNumber);

  if (rowLetter === -1) {
    rowLetter = numbers.indexOf(parseInt(rowNumber.charAt(0)));

    var table = document.getElementById("myTable");
    for (var counter = 0; counter <= letters.length; counter++) {
      var row = table.rows[rowLetter + 1].cells[counter];
      row.classList.remove("highlight");
    }
  }
}

function hightlightTable() {
	var table = document.getElementById("myTable");
	table.classList.add("highlight");
}

function unhighlightTable() {
	var table = document.getElementById("myTable");
	table.classList.remove("highlight");
}

var tabLinks = new Array();
var contentDivs = new Array();

function init() {
	var tabListItems = document.getElementById('tabs').childNodes;
	for (var i = 0; i < tabListItems.length; i++) {
		if (tabListItems[i].nodeName == "LI") {
		var tabLink = getFirstChildWithTagName(tabListItems[i], 'A');
		var id = getHash(tabLink.getAttribute('href'));
		tabLinks[id] = tabLink;
		contentDivs[id] = document.getElementById(id);
		}
	}

var i = 0;

for (var id in tabLinks) {
	tabLinks[id].onclick = showTab;
	tabLinks[id].onfocus = function() {
		this.blur()
	};
	if (i == 0) tabLinks[id].className = 'selected';
	i++;
}

var i = 0;

for (var id in contentDivs) {
	if (i != 0) contentDivs[id].className = 'tabContent hide';
	i++;
}
} 

function showTab() {
	var selectedId = getHash(this.getAttribute('href'));
	for (var id in contentDivs) {
		if (id == selectedId) {
			tabLinks[id].className = 'selected';
			contentDivs[id].className = 'tabContent';
		} else {
			tabLinks[id].className = '';
			contentDivs[id].className = 'tabContent hide';
		}
	}
	return false;
}

function getFirstChildWithTagName(element, tagName) {
	for (var i = 0; i < element.childNodes.length; i++) {
		if (element.childNodes[i].nodeName == tagName)
			return element.childNodes[i];
	}
}

function getHash(url) {
	var hashPos = url.lastIndexOf('#');
	return url.substring(hashPos + 1);
}

function newSheet() {
  for (var x = 0; x < 8; x++) {
    spreadsheet = new addCells();
  }

  var fullTable = document.getElementById("myTable");
  var firstCell = fullTable.rows[0].cells[0];
  firstCell.addEventListener ("click", function() {
  	if (fullTable.classList.contains("highlight")) {
  		unhighlightTable();
  		console.log("hi");
  	} else { 
  		hightlightTable();
  	}
  });

  /* A-G */
  for (var counter = 1; counter <= letters.length; counter++) {
    var cell = document.getElementById('myTable').rows[0].cells[counter];
    cell.innerHTML = letters[counter - 1];
    cell.addEventListener("click", function(event) {
      if (event.target.classList.contains("highlight")) {
        unhighlightColumn(event);
      } else {
        highlightColumn(event);
      }
    });
    cell.classList.add(letters[counter - 1]);
  }

  /* 1-7 */
  for (var index = 0; index < numbers.length; index++) {
    var nums = document.getElementById('myTable').rows[index + 1].cells[0];
    nums.innerHTML = numbers[index];
    nums.addEventListener("click", function(event) {
      if (event.target.classList.contains("highlight")) {
        unhighlightRow(event);
      } else {
        highlightRow(event);
      }
    });
    nums.classList.add(numbers[index]);
  }

  /* Rest of the table */
  for (var count = 1; count <= numbers.length; count++) {
    for (var ind = 1; ind <= letters.length; ind++) {
      var empt = document.getElementById('myTable').rows[count].cells[ind];
      empt.innerHTML = "<input />";
    }
  }
};

// window.onload = newSheet();

