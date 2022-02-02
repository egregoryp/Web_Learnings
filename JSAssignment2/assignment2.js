function buildTable() {

    var txtRows, txtColumns, inputRows, inputColumns;

    txtRows = document.getElementById("txtRows").value;
    txtColumns = document.getElementById("txtColumns").value;

    inputRows = parseInt(txtRows, 10);
    inputColumns = parseInt(txtColumns, 10);

    if (txtRows.length <= 0 || txtColumns.length <= 0) {
        return true; //to prevent showing results if required inputs are empty
    } else if (txtRows <= 0 || txtColumns <= 0) {
        return true; //to prevent showing results 0 or negative values
    } else {

        //to eliminate table if the button is pressed again
        var innertable = document.getElementsByTagName("table");
        for (let elem of innertable) {
            if (elem.id === "generatedTable") {
                elem.remove();
            }
        }

        // get body reference
        var body = document.getElementsByTagName("table")[3];

        // creates a new element inside the table and create tbody inside the new table
        var tbl = document.createElement("table");
        tbl.setAttribute('id', 'generatedTable');
        var tblBody = document.createElement("tbody");
        var row, cell, text;

        // creating cells according to the inputs with loops for the rows and columns
        for (var r = 1; r <= inputRows; r++) {
            row = document.createElement("tr");

            for (var c = 1; c <= inputColumns; c++) {
                cell = document.createElement("td");
                text = document.createTextNode(`(${r},${c})`);
                cell.appendChild(text);
                row.appendChild(cell);
            }

            // add row to end of the table body
            tblBody.appendChild(row);
        }

        // put the tbody inside the innertable element created
        tbl.appendChild(tblBody);
        // appends table into the table with the specific index
        body.appendChild(tbl);

        document.getElementById("resultsPane").style.display = "block";

        //Creating Automatic Margins for the generated table
        var marginPerc = 32.4;
        var textSize = 13; 
        var cVal = 0;

        switch (true) {
            case (c == 2):
                cVal = 14;
                marginPerc = marginPerc + cVal;
                break;
            case (c > 2 && c <= 3):
                cVal = 12;
                marginPerc = marginPerc + cVal;
                break;
            case (c > 3 && c <= 5):
                cVal = 10;
                marginPerc = marginPerc + cVal;
                break;
            case (c > 5 && c <= 7):
                cVal = 4;
                marginPerc = marginPerc + cVal;
                break;
            case (c > 7 && c <= 10):
                cVal = 0;
                marginPerc = marginPerc - cVal;
                break;
            case (c > 10 && c <= 17):
                cVal = 21;
                marginPerc = marginPerc - cVal;
                break;
            case (c > 17 && c <= 21):
                cVal = 32.4;
                marginPerc = marginPerc - cVal;
                break;
            default: alert("After 21 Columns text will decrease size to not overflow the width of the page!")
                marginPerc = 0;
                textSize = 16; 
                textSize = textSize - (c * 0.27);                
                break;
        }
        //console.log(marginPerc);

        document.getElementById("resultsPane").style.marginLeft = +marginPerc + "%";
        document.getElementById("resultsPane").style.marginRight = +marginPerc + "%";
        document.getElementById("resultsTable").style.marginLeft = +marginPerc + "%";
        document.getElementById("resultsTable").style.marginRight = +marginPerc + "%";
        document.getElementById("resultsTable").style.fontSize = `${textSize}px`;

        document.getElementById("resultsTable").style.display = "block";

        return false; //to prevent the form from submitting
    }
};

function hideTable() {
    var innertable = document.getElementsByTagName("table");
    for (let elem of innertable) {
        if (elem.id === "generatedTable") {
            elem.remove();
        }
    }
    document.getElementById("resultsPane").style.display = "none";
    document.getElementById("resultsTable").style.display = "none";
};
