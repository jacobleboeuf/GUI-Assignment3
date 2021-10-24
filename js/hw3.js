const inputs = document.querySelector('.inputs');
const table = document.getElementById("table");
var minCol, maxCol, minRow, maxRow;
function checkForMathVars(value) {
    if (isNaN(value) && (value == "e" || value == "pi")) {
        value = 3;
    } else if (isNaN(value) && (value == "-e" || value == "-pi")) {
        value = -3;
    } else if (!isNaN(value)) {
        return parseInt(value);
    }
    return value;
}
function createTable(minCol, maxCol, minRow, maxRow) {
    var values = "";
    var x, y;
    if (minCol > maxCol) {
        x = -1;
    } else {
        x = 1;
    }
    if (minRow > maxRow) {
        y = -1;
    } else {
         y = 1;
    }
    values += "<center><table>";
    //values += "<th>";
    values +="<tr><td></td><td></td>"
    for (var a = minCol; a <= maxCol; a+=x) {
        values +="<td id=\"row\"><center>" + a + "</center></td>";
    }
    values += "</tr></th>";
    for (var i = minRow; i <= maxRow; i+=y) {
        values += "<tr>";
        values += "<th><td id=\"row\"><center>" + i + "</center></td></th>"
        for (var j = minCol; j <= maxCol; j+=x) {
          values += "<td><center>" + i * j + "</center></td>";
        }
        values += "</tr>";
    }
    values += "</table></center>";
    return values;
}
inputs.addEventListener('submit',(e) => {
    e.preventDefault();
    minCol = checkForMathVars(document.getElementById("minCol").value);
    maxCol = checkForMathVars(document.getElementById("maxCol").value);
    minRow = checkForMathVars(document.getElementById("minRow").value);
    maxRow = checkForMathVars(document.getElementById("maxRow").value);
    if (isNaN(minCol) || !minCol) {
        table.innerHTML= "Minimum Column Value is not a number";
    } else if (isNaN(maxCol) || !maxCol) {
        table.innerHTML= "Maximum Column Value is not a number";
    } else if (isNaN(minRow) || !minRow) {
        table.innerHTML= "Minimum Row Value is not a number";
    } else if (isNaN(maxRow) || !maxRow) {
        table.innerHTML= "Maximum Row Value is not a number";
    } else {
        table.innerHTML = "Decimal numbers are rounded to whole numbers.";
        table.innerHTML += "<br>";
        table.innerHTML += "Mathematical symbols 'e' and 'pi' are rounded to 3";
        table.innerHTML += "<br>";
        table.innerHTML += "<br>";
        table.innerHTML += createTable(minCol, maxCol, minRow, maxRow);
    }
});
