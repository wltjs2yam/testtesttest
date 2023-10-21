import boardData from "../db.json" assert { type:'json'}

var boardDataContainer = document.getElementById("board-data");
var data = boardData.boardData;

console.log(data.length);

for (let i = 0; i < data.length; i++) {
    var key = data[i];
    console.log("i="+key);
    var row = document.createElement("tr");

    var numCell = document.createElement("td");
    numCell.textContent = key.num;
    row.appendChild(numCell);

    var titleCell = document.createElement("th");
    var titleLink = document.createElement("a");
    titleLink.href = "#";
    titleLink.textContent = key.title;
    titleCell.appendChild(titleLink);
    row.appendChild(titleCell);

    var dateCell = document.createElement("td");
    dateCell.textContent = key.regDate;
    row.appendChild(dateCell);

    boardDataContainer.appendChild(row);
}

console.log("000000"+boardDataContainer.innerHTML);

