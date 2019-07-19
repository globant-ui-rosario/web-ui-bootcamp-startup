let arr = [["a","b","c"],["d","e","f"],['g','h','i']];

function myTable(array) {
    const table = document.createElement('table');
    array.forEach(row => {
        table.setAttribute("border","2")
        table.setAttribute("bordercolor","black")
        let newRow = table.insertRow();
        row.forEach(cell => {
            let newCell = newRow.insertCell();
            newCell.appendChild(document.createTextNode(cell));
        });
    });
    return table;
   }

document.querySelector("body").appendChild(myTable(arr));
