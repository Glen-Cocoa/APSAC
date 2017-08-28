 function CreateTableFromJSON(excelData){
   var excelData = this.excelData
// EXTRACT VALUE FOR HTML HEADER.  
   var col = [];
    for (var i = 0; i < excelData.length; i++) {
      for (var key in excelData[i]) {
        if (col.indexOf(key) === -1) {
          col.push(key);
          }
        }
      }
// CREATE DYNAMIC TABLE.
        var table = document.createElement("table");
// CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
            th.className = 'header'
        }

// ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 1; i < excelData.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                if(excelData[i][col[j]] != undefined && col[j] === 'Name of Program'){
                  tabCell.innerHTML = '<a href="">'+excelData[i][col[j]]+'</a>';
                  tabCell.className = col[j];
                  tabCell.id = excelData[i][col[j]];
              } else {
                  tabCell.innerHTML = excelData[i][col[j]];
                  tabCell.className = col[j];
                  tabCell.id = excelData[i][col[j]];
            }
        }
//MAKE EACH PROGRAM A CLICKABLE ELEMENT
        

// ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
 }
 }
 
