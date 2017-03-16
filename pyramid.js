

drawPyramid();

//for (var i = 0; i < numBricks; i++) {
//var symbolChar = document.getElementById("symbol");



function drawPyramid() {

    document.getElementById("pyramid").innerHTML = "";

    var symbolElem = document.getElementById("symbol");
    symbolStr = symbolElem.value;

    var heightElem = document.getElementById("height");
    heightStr = heightElem.value;
    height = parseInt(heightStr);

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;


        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += symbolStr;
        }



        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr.fontcolor("#C3118E");
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
